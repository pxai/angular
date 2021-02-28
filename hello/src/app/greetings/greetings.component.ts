import { Component, OnInit } from '@angular/core';
import { SayService } from "../say.service";
import { GreetsService } from '../greets.service';

@Component({
  selector: 'greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {
  private _greetings:Array<string> = [];
  private _lastGreet: string = "";

  constructor(private sayService: SayService, private greetsService: GreetsService) { }

  ngOnInit(): void {
      this._greetings = ["Hello", "Hola", "Salut"];
      this.sayService.saySomething.subscribe(something => {
          this._lastGreet = something.greet;
      });

      this.greetsService.addGreet.subscribe(greet => {
          this._greetings.push(greet.greet);
      });
  }

  get greetings ():Array<string> {
    return this._greetings;
  }

  get lastGreet (): string {
      return this._lastGreet;
  }
}
