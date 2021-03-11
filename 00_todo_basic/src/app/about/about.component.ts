import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private _about: string = "ToDo app - http://pello.io";
  constructor() { }

  ngOnInit(): void { }

  get about ():string {
      return this._about;
  }
}
