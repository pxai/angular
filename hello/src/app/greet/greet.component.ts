import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  public _greet: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  set greet(greet: string) {
      this._greet = greet;
  }

  get greet():string {
      return this._greet;
  }
 }
