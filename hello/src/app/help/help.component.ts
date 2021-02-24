import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  private _topic: string = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  get topic ():string {
      return `${this._topic[0].toUpperCase()}${this._topic.slice(1)}`;
  }

  get helpText ():string {
      const helpTexts: any = {
          "list" : "Help for listing stuff",
          "about": "Help for about component",
          "home": "Help about home"
      };
      return helpTexts[this._topic];
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(paramsId => {
        this._topic = paramsId.topic;
      });
  }
}
