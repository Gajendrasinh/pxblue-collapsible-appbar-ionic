import { Component, NgZone} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
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
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  

  logScrolling(scrollTop:any){
    this.shrinkToolbar = scrollTop.detail > this.SHRINK_TOP_SCROLL_POSITION ? true : false;
  }
}
