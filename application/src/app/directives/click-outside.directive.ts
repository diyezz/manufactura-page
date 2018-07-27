import {Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef} from '@angular/core';
import {delay, tap} from "rxjs/operators";
import {fromEvent} from "rxjs/observable/fromEvent";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

@Directive({
    selector: '[clickOutside]'
})

export class ClickOutside implements OnInit, OnDestroy {
    private listening: boolean = true;
    private globalClick: Observable<any>;
    private globalClickSubscription: Subscription;

    @Output('clickOutside') clickOutside:EventEmitter<Object>;

    constructor(
        private _elRef:ElementRef
    ) {
        this.clickOutside = new EventEmitter();
    }



    ngOnInit() {
        this.globalClick = fromEvent(document, 'click');
        this.globalClickSubscription =  this.globalClick.pipe(
            delay(1),
            tap(() => {
                this.listening = true;
            })
        )
        .subscribe((event:MouseEvent) => {
            this.onGlobalClick(event);
        });
    }

    ngOnDestroy() {
        this.globalClickSubscription.unsubscribe();
    }

    onGlobalClick(event:MouseEvent) {
        if (event instanceof MouseEvent && this.listening === true) {
            if(this.isDescendant(this._elRef.nativeElement, event.target) === true) {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: false
                });
            } else {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: true
                });
            }
        }
    }

    isDescendant(parent, child) {
        let node = child;
        while (node !== null) {
            if (node === parent) {
                return true;
            } else {
                node = node.parentNode;
            }
        }
        return false;
    }
}