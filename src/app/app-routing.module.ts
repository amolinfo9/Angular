import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // angular basic
  {
    path:"Angular_1",
    loadChildren:()=>import("./Modules/angular-1/angular-1.module")
    .then(mod=>mod.Angular1Module)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
