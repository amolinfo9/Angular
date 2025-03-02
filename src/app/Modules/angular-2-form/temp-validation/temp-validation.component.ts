import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-validation',
  templateUrl: './temp-validation.component.html',
  styleUrls: ['./temp-validation.component.css']
})
export class TempValidationComponent {
  public Stud :any;
  public RegData:any[]=[]
  public studID:number=this.RegData.length+1;
  public thead:any=['id','Username','Password','Message']
  public showbtn:boolean=false;

  onSave(data:NgForm){
    data.value.id = this.studID;
    this.studID++;
    this.RegData.push(data.value)
    data.resetForm()
  }

  onDelete(id:number){
    if(id){
      this.RegData.splice(this.RegData.findIndex((ele)=>ele.id === id),1)
    }
  }

  public temp={
    id:'',
    sname:'',
    spass:'',
    smsg:''
  }

  onEdit(data:any){
    this.temp = {...data}
    this.showbtn = true;
  }
  onUpdate(data:any){
    if(data){
      this.RegData.splice(this.RegData.findIndex((ele)=>ele.id === data.id),1,data.value)
      this.showbtn=false;
      data.resetForm()
    }
  }
}
