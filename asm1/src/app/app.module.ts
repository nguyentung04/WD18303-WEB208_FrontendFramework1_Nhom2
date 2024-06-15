import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule
} from '@nebular/theme';
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./@core/core.module";
import {ThemeModule} from "./@theme/theme.module";
import { PostService } from './@core/services/apis/post.service';
import { PostService2 } from './@core/services/apis/post.services';
=======

import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./@core/core.module";
import {ThemeModule} from "./@theme/theme.module";
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
=======
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
<<<<<<< HEAD
  providers: [
    PostService,
    PostService2
  ],
=======
  providers: [],
>>>>>>> 05374b85aa4d45f56e4e3a43da72272edf7bb528
  bootstrap: [AppComponent]
})
export class AppModule { }
