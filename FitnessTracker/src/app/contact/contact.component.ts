import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactusForm:FormGroup;

  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {

    this.contactusForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'msgSubject': new FormControl(null,Validators.required),
      'msg': new FormControl(null,Validators.required),

    })

  }

  onSend(){

    if(this.contactusForm.valid){
      const info  = this.contactusForm.value;
      this.contactservice.addQuery(info);
      this.contactusForm.reset();
    }
  }

}
