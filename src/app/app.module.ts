import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ExpandableHeader } from './expandable-header'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ExpandableHeader],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    ScrollDispatchModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
