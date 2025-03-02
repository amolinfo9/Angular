import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempValidationComponent } from './temp-validation/temp-validation.component';

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
    path:"temp_valid",
    component:TempValidationComponent
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
    ReactiveComponent,
    TempValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(route)]
  ]
})
export class Angular2FormModule { }
