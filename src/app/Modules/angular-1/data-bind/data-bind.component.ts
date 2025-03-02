import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent {

  //  string interpolution 
  public name:string="Amol here"
  
  // property / Attribute binding
  public link:string= "https://www.google.com/"

  public ImagePath:string='assets/one.png'

  // Event Binding
  public msg:string=""
  AskQue(){
    this.msg = "hey How are u..?"
  }

  //  two way data binding
  public test :string = "Hey i am fine"

}
