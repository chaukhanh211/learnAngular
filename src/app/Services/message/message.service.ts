import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = [];

  addMessage(_message: string) {
    this.message.push(_message);
  }
  delMessage(){
    this.message = [];
  }
  constructor() { }

}
