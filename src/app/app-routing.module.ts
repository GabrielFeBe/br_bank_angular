import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DeactivateComponent } from './deactivate/deactivate.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path:'create',component: RegisterComponent },
{path:'profile', component:ProfileComponent},
{path:'deactivate', component:DeactivateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
