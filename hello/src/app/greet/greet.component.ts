import { Component, OnInit, Input } from '@angular/core';
import { SayService } from "../say.service";

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  @Input() greet: any;
  private _greet: string = "";
  private _count: number = 0;

  constructor(private sayService: SayService) { }

  ngOnInit(): void {
    this._greet = this.greet;
  }

  get count () {
      return this._count;
  }

  say(what: string): void {
    console.log("Say something: ", what);
    this._count++;
    this.sayService.saySomething.emit({ greet: this._greet, count: this.count });
  }
 }
