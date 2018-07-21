import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {ContactusComponent} from './components/contactus/contactus.component'; 
import {PrivacypolicyComponent} from './components/footer/privacypolicy/privacypolicy.component';
import {SitemapComponent} from './components/footer/sitemap/sitemap.component';
import {AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ExampaperComponent} from './components/exampaper/exampaper.component';
import {AptitudeComponent} from './components/exampaper/aptitude/aptitude.component';
import {TechnicalComponent} from './components/exampaper/technical/technical.component';
export const routes: Routes = [
  { path: '', component: LandingComponent },
  {path:"login",component:AdminloginComponent},
  {path:'exampaper',component:ExampaperComponent},
  {path:'exampaper/technical',component:TechnicalComponent},
  {path:'exampaper/aptitude',component:AptitudeComponent},

  {path:'registration',component:RegistrationComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'sitemap',component:SitemapComponent},
  { path: 'connect', component: ContactusComponent,
  children: [
    // { path: ':id', component: BranchAddressComponent}
  ]
},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
