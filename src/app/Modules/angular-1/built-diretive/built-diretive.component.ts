import { Component } from '@angular/core';

@Component({
  selector: 'app-built-diretive',
  templateUrl: './built-diretive.component.html',
  styleUrls: ['./built-diretive.component.css']
})
export class BuiltDiretiveComponent {

  // ngIf
  public age:number=18;

  public Google:string="https://www.google.com/"
  public Facebook:string="https://www.facebook.com/"

  // ng For
  public num:number[]=[1,2,3]

  // ngSwitch
  public game:string="1"

  //  attribute directive 
  public t1={color:'blue'}

}
