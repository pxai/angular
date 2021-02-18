import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  @Input() greet: any;
  private _greet: string = "";
  constructor() { }

  ngOnInit(): void {
    this._greet = this.greet;
  }

  say(): void {
    console.log("Say something");
  }
 }
