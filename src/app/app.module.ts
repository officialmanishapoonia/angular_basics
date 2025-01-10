import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { SVGIconModule } from '@progress/kendo-angular-icons';
import { HomeComponent } from './pages/home/home.component';
import {ButtonModule} from '@progress/kendo-angular-buttons';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import {  provideHttpClient } from '@angular/common/http';
import {GridModule} from '@progress/kendo-angular-grid';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MailPipe } from './pipes/mail.pipe';
import  { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule} from '@progress/kendo-angular-dialog';
import { EditUserDetailsComponent } from './pages/edit-user-details/edit-user-details.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { LoaderComponent } from './components/loader/loader.component';
import {LoaderModule} from '@progress/kendo-angular-indicators';
import { LabelModule } from "@progress/kendo-angular-label";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    UserProfileComponent,
    PhoneFormatPipe,
    NotFoundComponent,
    MailPipe,
    EditUserDetailsComponent,
    AddUserComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBarModule,
    SVGIconModule,
    ButtonModule,
    GridModule,
    LayoutModule,
    FontAwesomeModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownsModule,
    NoopAnimationsModule,
    DialogModule,
    LoaderModule,
    LabelModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
