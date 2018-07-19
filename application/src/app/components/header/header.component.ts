import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isHeaderSticky: boolean = false;
  isHeaderVisible: boolean = true;

  constructor( private headerSection: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const haderOffsetTopValue = this.headerSection.nativeElement.children[0].offsetTop;
    const windowScrollTopValue = window.scrollY;
    this.setStickyHeaderClass(haderOffsetTopValue, windowScrollTopValue);
  }
  @HostListener('window:resize', []) onWindowResize() {
    console.log(window.innerWidth);

    if (window.innerWidth < 576 || window.innerWidth > 768) {
      this.isHeaderVisible = true;
    }
  }

  setStickyHeaderClass(headerOffsetTop, windowOffsetTop) {
      this.isHeaderSticky = headerOffsetTop < windowOffsetTop;
  }

  onToggleMenuButtonClick() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  onToggleHeaderButtonClick() {
    this.isHeaderVisible = !this.isHeaderVisible;
  }

}
