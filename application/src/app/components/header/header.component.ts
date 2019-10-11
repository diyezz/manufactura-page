import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ClickOutside } from '../../directives/click-outside.directive';
import {environment} from '../../../environments/environment';
import {TranslateService} from '../../services/translate.service';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-header',
    viewProviders: [ClickOutside],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    defaultEnvironment = environment;
    isMenuVisible = false;
    isHeaderSticky = false;
    isHeaderVisible = true;
    isHeaderTransparent = false;
    bodyHideOverflowClass = 'hide-overflow';
    socialList: Array<any>;
    socialListStyles = {
        'display': 'flex',
        'align-items': 'center',
        'list-style': 'none',
        'font-size': '1.125rem',
        'font-weight': '700',
        'padding': '0 10px',
        'min-width': '180px',
    };

    constructor(
        private headerSection: ElementRef,
        private router: Router,
        private renderer: Renderer2,
        private translate: TranslateService,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.isMenuVisible = false;
                this.renderer.removeClass(document.body, this.bodyHideOverflowClass);
                this.setTransparencyClass();
            });
        this.getCompanySocialListData();
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

    getCompanySocialListData() {
        return this.dataService.getCompanySocialList().subscribe((data) => {
            this.socialList = data;
        });
    }

    setStickyHeaderClass(headerOffsetTop, windowOffsetTop) {
        this.isHeaderSticky = headerOffsetTop < windowOffsetTop;
    }

    setTransparencyClass() {
        if ( this.router.url.includes('/project-detail') || this.router.url === '/' ) {
            this.isHeaderTransparent = true;
        } else {
            this.isHeaderTransparent = false;
        }
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

    setLang(lang: string) {
        this.translate.use(lang);
    }

    checkCurrentLang(lang) {
        return this.translate.currentLang === lang;
    }
}
