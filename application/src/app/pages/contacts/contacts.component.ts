import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

interface contactData {
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
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
    contactForm: FormGroup;
    textChangesSubscription: Subscription;
    textAreaLengthMinText: string = 'Minimum is required: ';
    textAreaLengthMaxText: string = 'Max available message length: ';
    symbolsMinLength: number = 20;
    symbolsMaxLength: number = 500;
    symbolsCurrentLength: number = 0;
    socialList = [
        {'facebook': 'https://www.facebook.com/'},
        {'twitter': 'https://www.twitter.com/'},
        {'instagram': 'https://www.instagram.com/'},
        {'googlePlus': 'https://www.google.com/'},
        {'youtube': 'https://www.youtube.com/'}
    ];
    googleMapsStyles = [
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#cb0000"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "hue": "#ff0000"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "hue": "#ff0000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cdcdcd"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#5a5a5a"
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
        this.initForm();
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

    onSubmit({value, valid}: { value: contactData, valid: boolean }) {
        this.markAllFormFieldsAsTouched(this.contactForm);
        console.log(value, valid);
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
