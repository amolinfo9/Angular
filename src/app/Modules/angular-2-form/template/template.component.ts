import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  public Stud:any;   // -- from name 
  public showBtn:boolean=false;
  public RegData:any[]=[
    {id:1,sname:"Amol",pass:123,sadd:"Pune",sgander:'Male',sclass:"Comp Eng"},
    {id:2,sname:"raj",pass:'asd123',sadd:"solapur",sgander:'Male',sclass:"Mech Eng"}

  ]; // to store data
  public idCount:number=this.RegData.length +1; // auto inc id

  // table heading 
  public theadname:any=['Id','Name','Pass',"Address","Gendar","Class"]



  // onSave() ---- to submit data through form
  onSave(data:any){
    data.value.id = this.idCount;
    this.idCount++;
    this.RegData.push(data.value)
    data.form.reset();
  }
//  omDelete () --- to delete data
  onDelete(id:number){
    if(id){
      this.RegData.splice(this.RegData.findIndex((ele:any)=> ele.id === id),1)
    }
  }
  // to edit data
  public temp:any={
    id:'',
    sname:'',
    pass:'',
    sadd:'',
    sgander:'',
    sclass:''
  }
  onEdit(data:any){
    if(data){
      this.temp ={...data}
      this.showBtn = true;
    }
  }

  onUpdate(data:any){
    if(data){
      this.RegData.splice(this.RegData.findIndex((ele:any)=>ele.id === data.id),1,data.value)
      this.showBtn=false;
    }
  }
}
