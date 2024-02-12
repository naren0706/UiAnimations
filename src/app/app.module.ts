import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './sections/home/home.component';
import { FormsComponent } from './sections/forms/forms.component';
import { OutputComponent } from './sections/output/output.component';
import { CreditsComponent } from './sections/credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentsComponent,
    HomeComponent,
    FormsComponent,
    OutputComponent,
    CreditsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxParallaxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
