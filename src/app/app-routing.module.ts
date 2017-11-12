import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { AppIndexComponent } from './app-index/app-index.component';
import { AppActiveComponent } from './app-active/app-active.component';
import { AppCompletedComponent } from './app-completed/app-completed.component';

const routes: Routes = [{
    path: '', 
    component: AppIndexComponent  
  },{
    path: 'completed', 
    component: AppCompletedComponent  
  }, 
  {
    path: 'active', 
    component: AppActiveComponent  
}];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {


 

 }
