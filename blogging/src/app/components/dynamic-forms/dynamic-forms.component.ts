import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  reactiveForm: FormBuilder;
  dynamicForms = [
  {
    label: 'Dynamic 1',
    Validator: [Validators.required, Validators.minLength(30)],
    errorMsg: 'Should contain 30 words'
  },
  {
    label: 'Dynamic 1',
    Validator: [Validators.required, Validators.minLength(30)],
    errorMsg: 'Should contain 30 words'
  }];

  constructor(private fb: FormBuilder) {
    const dynamicF = [];

    // for (const form of this.dynamicForms) {
    //   dynamicF.push(this.createForm(form))
    // }

    // this.reactiveForm = this.fb.group({
    //   'name': [null, Validators.required],
    //   'desciption': ,
    //   'validate'
    // });
   }

  //  createForm(dynamic): FormGroup {

  //  }

  ngOnInit() {
  }

}
