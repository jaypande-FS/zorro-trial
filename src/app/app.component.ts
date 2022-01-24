import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from './services/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageNum = 0;
  forms:FormGroup
  form_data!:any[]


  constructor(private builder:FormBuilder,private dataService:DataService) {
    this.forms=this.builder.group({
      name:['',[Validators.required]],
      age:['',[Validators.required,Validators.maxLength(2)]],
      phone:['',[Validators.minLength(10),Validators.maxLength(10)]],
      email:['',Validators.email],
      nationality:[''],
      house:[''],
      locality:[''],
      city:[''],
      country:[''],
      feedback:['']
    
    })
    
 
  }
  getname(){
  }
  ngOnInit(): void {
    this.getdatafortable()
    //console.log(this.forms)
   }

  getdatafortable(){
  this.dataService.getdata().subscribe(data =>{this.form_data=data})
}
  
  pre(): void {
    this.pageNum -= 1;

  }

  next(): void {
    this.pageNum += 1;
  
  }

  done(): void {

    console.log(this.forms.value)
    this.dataService.savedata(this.forms.value).subscribe(data => {this.getdatafortable()});
    this.forms.reset();
    this.pageNum=0;

  }
  
  
}