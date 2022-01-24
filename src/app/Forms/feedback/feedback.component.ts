import { Component,  Input,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
@Input() feedform:FormGroup;
  constructor(private builder:FormBuilder) { 
    this.feedform=this.builder.group({})
  }

  ngOnInit(): void {
  }

}
