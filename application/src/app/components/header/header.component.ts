import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from 'rxjs/operators';
import { ClickOutside } from "app/directives/click-outside.directive";

@Component({
    selector: 'app-header',
    viewProviders: [ClickOutside],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isMenuVisible: boolean = false;
    isHeaderSticky: boolean = false;
    isHeaderVisible: boolean = true;
    bodyHideOverflowClass: string = 'hide-overflow';
    socialList = [
        {'facebook': 'https://www.facebook.com/'},
        {'twitter': 'https://www.twitter.com/'},
        {'instagram': 'https://www.instagram.com/'},
        {'googlePlus': 'https://www.google.com/'},
        {'youtube': 'https://www.youtube.com/'},
        {'pinterest': 'https://www.pinterest.com/'}
    ];
    socialListStyles = {
        'list-style': 'none',
        'font-size': '1.125rem',
        'font-weight': '700',
        'padding': '0 10px',
        'min-width': '180px',
    };

    constructor(
        private headerSection: ElementRef,
        private router: Router,
        private renderer: Renderer2
    ) {
    }

    ngOnInit() {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.isMenuVisible = false;
                this.renderer.removeClass(document.body, this.bodyHideOverflowClass);
            });
    }

    @HostListener('window:scroll', []) onWindowScroll() {
        const haderOffsetTopValue = this.headerSection.nativeElement.children[0].offsetTop;
        const windowScrollTopValue = window.scrollY;
        this.setStickyHeaderClass(haderOffsetTopValue, windowScrollTopValue);
    }

    @HostListener('window:resize', []) onWindowResize() {
        if (window.innerWidth < 576 || window.innerWidth > 768) {
            this.isHeaderVisible = true;
        }
    }

    setStickyHeaderClass(headerOffsetTop, windowOffsetTop) {
        this.isHeaderSticky = headerOffsetTop < windowOffsetTop;
    }

    onToggleMenuButtonClick() {
        this.isMenuVisible = !this.isMenuVisible;
        if (this.isMenuVisible) {
            this.renderer.addClass(document.body, this.bodyHideOverflowClass);
        } else {
            this.renderer.removeClass(document.body, this.bodyHideOverflowClass);
        }
    }

    onToggleHeaderButtonClick() {
        this.isHeaderVisible = !this.isHeaderVisible;
    }

    onClickOutside(event) {
        if (event && event.value === true) {
            this.isMenuVisible = false;
            this.renderer.removeClass(document.body, this.bodyHideOverflowClass);
        }
    }

}
