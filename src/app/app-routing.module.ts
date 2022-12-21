import { ContentComponent } from './components/pages/content/content.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path:"",
    component: HomeComponent,
 },
 {
    path:'content/:id',
    component:ContentComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

