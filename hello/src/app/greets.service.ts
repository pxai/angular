import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetsService {
  @Output() addGreet: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
