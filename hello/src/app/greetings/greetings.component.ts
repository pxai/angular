import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {
  private _greetings:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
      this._greetings = ["Hello", "Hola", "Salut"];
  }

  get greetings ():Array<string> {
    return this._greetings;
  }
}
