import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import {CommonModule} from '@angular/common'; 
import {WINDOW_PROVIDERS} from "./services/window.service";
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { BgvideoComponent } from './components/landing/bgvideo/bgvideo.component';
import { TrendingcoursesComponent } from './components/landing/trendingcourses/trendingcourses.component';
import { WeareoneComponent } from './components/landing/weareone/weareone.component';
import { OurprocessComponent } from './components/landing/ourprocess/ourprocess.component';
import { OurbranchesComponent } from './components/landing/ourbranches/ourbranches.component';
import { OurreviewsComponent } from './components/landing/ourreviews/ourreviews.component';
import { OurpartnersComponent } from './components/landing/ourpartners/ourpartners.component';
import {SharedModule} from './shared/shared.module';
import {FooterService} from './components/footer/footer.service';
import {HeaderService} from './components/header/header.service';
import {ContactusComponent} from './components/contactus/contactus.component';
import {PrivacypolicyComponent} from './components/footer/privacypolicy/privacypolicy.component';
import {SitemapComponent} from './components/footer/sitemap/sitemap.component';
import {AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {RegisterService} from './components/registration/register.service';
import {LoginService} from './components/adminlogin/login.service';
import {ExampaperComponent} from './components/exampaper/exampaper.component';
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'Digitallync-Online Exam portal' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    HttpModule
  ],
  declarations: [
    AppComponent,AdminloginComponent,RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    BgvideoComponent,
    TrendingcoursesComponent,
    WeareoneComponent,
    OurprocessComponent,
    OurbranchesComponent,
    OurreviewsComponent,
    OurpartnersComponent,
    ContactusComponent,
    ExampaperComponent,
    PrivacypolicyComponent,
    SitemapComponent
  ],
  providers: [FooterService,WINDOW_PROVIDERS,HeaderService,RegisterService,LoginService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
