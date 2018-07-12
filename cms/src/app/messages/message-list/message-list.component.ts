import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(2, 'Tester Subject 2', 'This is just a test', 'Kim Dean'),
    new Message(3, 'Tester #3', 'Still just testing things out', 'Not Kim'),
    new Message(4, 'Subject 4', 'I only need a few more testers', 'President Eyring')
  ];
  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
