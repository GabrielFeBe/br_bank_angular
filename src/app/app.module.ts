import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './interceptors/token.interceptor';
import { ActivateComponent } from './activate/activate.component';
import { StatementComponent } from './statement/statement.component';
import { StatementPageComponent } from './statement-page/statement-page.component';
import { MonthStatementComponent } from './month-statement/month-statement.component';
import { HomeComponent } from './home/home.component';
import { CustomBoxComponent } from './home/custom-box/custom-box.component';
import { CustomSectionComponent } from './home/custom-section/custom-section.component';
import { FooterComponent } from './footer/footer.component';
import { CustomCardComponent } from './profile/custom-card/custom-card.component';
import { BlackButtonComponent } from './components/black-button/black-button.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ActivateComponent,
    StatementComponent,
    StatementPageComponent,
    MonthStatementComponent,
    HomeComponent,
    CustomBoxComponent,
    CustomSectionComponent,
    FooterComponent,
    CustomCardComponent,
    BlackButtonComponent,
    ProfileEditComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
