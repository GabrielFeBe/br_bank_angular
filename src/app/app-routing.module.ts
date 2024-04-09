import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { RouterGuardGuard } from './router-guard.guard';
import { StatementPageComponent } from './statement-page/statement-page.component';
import { MonthStatementComponent } from './month-statement/month-statement.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path: 'login', component: LoginComponent},
{path:'create',component: RegisterComponent },
{path:'profile', component:ProfileComponent, canActivate:[RouterGuardGuard]},
{path:'deactivate', component:DeactivateComponent, canActivate:[RouterGuardGuard]},
{path:'statement', component:StatementPageComponent, canActivate:[RouterGuardGuard]},
{path:'statement/month/:id', component:MonthStatementComponent,canActivate:[RouterGuardGuard]},
{path:'statement/month', component:MonthStatementComponent,canActivate:[RouterGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
