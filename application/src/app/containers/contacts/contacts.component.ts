import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { LocationService } from '../../services/location.service';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    theme: string;
    description: string;
}

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ContactsComponent implements OnInit, OnDestroy {
    contactForm: FormGroup;
    textChangesSubscription: Subscription;
    textAreaLengthMinText = 'Minimum is required: ';
    textAreaLengthMaxText = 'Max available message length: ';
    symbolsMinLength = 20;
    symbolsMaxLength = 500;
    symbolsCurrentLength = 0;
    socialList: Array<any>;

    constructor(
        public locationService: LocationService,
        private dataService: DataService,
        private httpService: HttpClient
    ) {
    }

    ngOnInit() {
        this.initForm();
        this.getCompanySocialListData();
    }

    getCompanySocialListData() {
        return this.dataService.getCompanySocialList().subscribe((data) => {
            this.socialList = data;
        });
    }

    initForm() {
        this.contactForm = new FormGroup({
            firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
            lastName: new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.email]),
            companyName: new FormControl(''),
            theme: new FormControl(''),
            description: new FormControl('', [Validators.compose([
                Validators.required,
                Validators.minLength(this.symbolsMinLength),
                Validators.maxLength(this.symbolsMaxLength)
            ])])
        });

        this.textChangesSubscription = this.checkDescriptionValidity();
    }

    onSubmit({ value, valid }: { value: ContactData, valid: boolean }) {
        const apiUrl = 'https://manufactura-backend.firebaseapp.com/api/uploadContact';
        const formData = JSON.stringify(value);

        this.markAllFormFieldsAsTouched(this.contactForm);

        console.log(value, valid);
        this.httpService.post(apiUrl, formData)
        .subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
        );
    }

    checkDescriptionValidity() {
        return this.contactForm.get('description').valueChanges.subscribe((value) => {
            this.symbolsCurrentLength = value.length;
        });
    }

    markAllFormFieldsAsTouched(form: FormGroup | FormArray) {
        if (!form) {
            return;
        }

        form.markAsTouched();
        this.markNestedControlsAsTouched(form);
    }

    markNestedControlsAsTouched(form: FormGroup | FormArray) {
        for (const control in form.controls) {
            const currentForm = form.get(control) as FormArray;
            form.get(control).markAsTouched();
            form.get(control).updateValueAndValidity();

            if (currentForm.controls) {
                const newForm = form.get(control) as FormArray;
                this.markNestedControlsAsTouched(newForm);
            }
        }
    }

    ngOnDestroy() {
        this.textChangesSubscription.unsubscribe();
    }
}