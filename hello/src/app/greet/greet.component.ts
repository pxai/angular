import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  @Input() greet: any;
  private _greet: string = "";
  private _count: number = 0;

  constructor() { }

  ngOnInit(): void {
    this._greet = this.greet;
  }

  get count () {
      return this._count;
  }

  say(what: string): void {
    console.log("Say something: ", what);
  }
 }
