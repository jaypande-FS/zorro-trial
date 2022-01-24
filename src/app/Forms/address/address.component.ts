import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() addForm:FormGroup
  countries:[]=[]
  constructor(private builder:FormBuilder) {
    this.addForm=this.builder.group({})
   }

  ngOnInit(): void {
  }

}
