import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { RouterGuardGuard } from './router-guard.guard';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path:'create',component: RegisterComponent },
{path:'profile', component:ProfileComponent, canActivate:[RouterGuardGuard]},
{path:'deactivate', component:DeactivateComponent, canActivate:[RouterGuardGuard]}
,{path:'statement', component:StatementComponent, canActivate:[RouterGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
