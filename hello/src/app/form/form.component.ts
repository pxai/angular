import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      greet: ['', [Validators.required, Validators.minLength(2)]],
      count: ['', [Validators.required, Validators.min(0)]],
    });
  }

  enviarDatos(): any {
    console.log(this.form.value);
  }
}
