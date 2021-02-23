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

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(paramsId => {
        this._topic = paramsId.topic;
        console.log(this._topic);
      });
  }

}
