import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  nationality:string[]=[];
  @Input() dataForm:FormGroup;

  constructor(private builder:FormBuilder) { 
    this.nationality=["Indian", "American", "Others"]
    this.dataForm=this.builder.group({})
  }
  

  ngOnInit(): void {
    
  }

}
