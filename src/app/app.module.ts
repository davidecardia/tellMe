import { StatusVisibilityPopoverPageModule } from './pages/status-visibility-popover/status-visibility-popover.module';
import { PhotoVisibilityPopoverPageModule } from './pages/photo-visibility-popover/photo-visibility-popover.module';
import { LastAccessPopoverPageModule } from './pages/last-access-popover/last-access-popover.module';
import { DoubleCheckPopoverPageModule } from './pages/double-check-popover/double-check-popover.module';
import { PrivacyModalPageModule } from './pages/privacy-modal/privacy-modal.module';
import { EditFontSizePopoverPageModule } from './pages/edit-font-size-popover/edit-font-size-popover.module';

import { StatusPhotoModalPageModule } from './pages/status-photo-modal/status-photo-modal.module';
import { BackgroundsSlidesModalPageModule } from './pages/backgrounds-slides-modal/backgrounds-slides-modal.module';
import { ChatOptionsModalPageModule } from './pages/chat-options-modal/chat-options-modal.module';
import { InfoChatModalPageModule } from './pages/info-chat-modal/info-chat-modal.module';
import { EditModalPageModule } from './pages/edit-modal/edit-modal.module';
import { DetailsGroupModalPageModule } from './pages/details-group-modal/details-group-modal.module';
import { GroupModalPageModule } from './pages/group-modal/group-modal.module';
import { DetailsModalPageModule } from './pages/details-modal/details-modal.module';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';

// import { NotificationInterceptorService } from './interceptors/notification-interceptor.service';
import { PhotoModalPageModule } from './pages/photo-modal/photo-modal.module';
import { OptionsPopoverPageModule } from './pages/options-popover/options-popover.module';
import { AddFriendModalPageModule } from './pages/add-friend-modal/add-friend-modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";

import { FCM } from '@ionic-native/fcm/ngx';
import { Network } from '@ionic-native/network/ngx';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'; //per press e swipe
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'press': {
      time: 700
    },
    'swipe': {
      direction: Hammer.DIRECTION_ALL
    }
  }
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "auto",
    });
    return mc;
  }

}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OptionsPopoverPageModule,
    EditFontSizePopoverPageModule,
    DoubleCheckPopoverPageModule,
    LastAccessPopoverPageModule,
    PhotoVisibilityPopoverPageModule,
    StatusVisibilityPopoverPageModule,
    AddFriendModalPageModule,
    PhotoModalPageModule,
    BackgroundsSlidesModalPageModule,
    ChatOptionsModalPageModule,
    DetailsModalPageModule,
    EditModalPageModule,
    InfoChatModalPageModule,
    DetailsGroupModalPageModule,
    GroupModalPageModule,
    StatusPhotoModalPageModule,
    PrivacyModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: NotificationInterceptorService,
    //   multi: true
    // },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    Camera,
    LocalNotifications,
    FCM,
    MediaCapture,
    File,
    Media,
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
