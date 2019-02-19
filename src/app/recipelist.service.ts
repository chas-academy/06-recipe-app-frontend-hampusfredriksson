import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipelistService {
  // BYT NAMN HÄR
  private messageSource = new BehaviorSubject<any>([]);
  currentMessage = this.messageSource.asObservable();

  constructor() {}
  // BYT NAMN HÄR
  changeMessage(message: string): void {
    this.messageSource.next(this.messageSource.getValue().concat([message]));
  }
}
