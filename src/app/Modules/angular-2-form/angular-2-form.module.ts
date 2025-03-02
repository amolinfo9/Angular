import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route:Routes =[
  {
    path:"",
    component:TemplateComponent
  },
  {
    path:"react",
    component:ReactiveComponent
  },
  {
    path:"**",
    redirectTo:"",
    component:TemplateComponent
  }
]

@NgModule({
  declarations: [
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(route)]
  ]
})
export class Angular2FormModule { }
