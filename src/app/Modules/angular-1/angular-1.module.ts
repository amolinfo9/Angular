import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindComponent } from './data-bind/data-bind.component';
import { BuiltDiretiveComponent } from './built-diretive/built-diretive.component';
import { CustDirectiveComponent } from './cust-directive/cust-directive.component';
import { CustDirective } from './cust-directive/CustDire/cust.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const route : Routes = [
  {
    path:"",
    component:DataBindComponent
  },
  {
    path:"Built-Dire",
    component:BuiltDiretiveComponent,
  },
  {
    path:"Cust-Dire",
    component:CustDirectiveComponent
  },
  {
    path:"**",
    redirectTo:"",
    component:DataBindComponent
  }

]

@NgModule({
  declarations: [
    DataBindComponent,
    BuiltDiretiveComponent,
    CustDirectiveComponent,
    CustDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    [RouterModule.forChild(route)]
  ]
})
export class Angular1Module { }
