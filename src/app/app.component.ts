import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';
import { presidents } from './shared/presidents';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  list = presidents;
  private readonly SHRINK_TOP_SCROLL_POSITION = 64;
  shrinkToolbar = false;
  scrollingSubscription: any;
  scrollTop: any;
  Colors: Object = Colors;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {
    this.initializeApp();

    this.scrollDispatcher.scrolled()
      .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
      .subscribe(scrollTop => this.ngZone.run(() => this.setScroll(scrollTop)));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  getScrollPosition(event) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.pageYOffset;
    }
  }
  setScroll(scrollTop){
    this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false;
    this.scrollTop = scrollTop;
  }
}
