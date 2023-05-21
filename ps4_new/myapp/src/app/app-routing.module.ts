import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    component: TestComponent,
    path:''
  },
  {
    component: ProfileComponent,
    path: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
