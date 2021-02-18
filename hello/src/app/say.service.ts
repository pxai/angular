import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SayService {
  @Output() saySomething: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
