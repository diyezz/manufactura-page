import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  theme = 'light';
  constructor (
    private router: Router,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
    this.switchTheme();
  }

  switchTheme() {
    if (this.theme === 'light') {
      document.documentElement.style.setProperty('--main-black', '#262626');
      document.documentElement.style.setProperty('--main-grey', '#d2d2d2');
      document.documentElement.style.setProperty('--main-white', '#ffffff');
      this.theme = 'dark';
    } else {
      document.documentElement.style.setProperty('--main-black', '#ffffff');
      document.documentElement.style.setProperty('--main-grey', '#3D3D3D');
      document.documentElement.style.setProperty('--main-white', '#1a1a1a');
      this.theme = 'light';
    }
  }
}
