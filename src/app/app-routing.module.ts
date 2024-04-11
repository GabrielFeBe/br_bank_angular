import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterGuardGuard } from './router-guard.guard';
import { StatementPageComponent } from './statement-page/statement-page.component';
import { MonthStatementComponent } from './month-statement/month-statement.component';
import { HomeComponent } from './home/home.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path: 'login', component: LoginComponent},
{path:'create',component: RegisterComponent },
{path:'profile/edit' , component:ProfileEditComponent},
{path:'profile', component:ProfileComponent, canActivate:[RouterGuardGuard]},
{path:'statement', component:StatementPageComponent, canActivate:[RouterGuardGuard]},
{path:'statement/month/:id', component:MonthStatementComponent,canActivate:[RouterGuardGuard]},
{path:'statement/month', component:MonthStatementComponent,canActivate:[RouterGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
