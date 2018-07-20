import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "../message.model";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectElRef: ElementRef;
  @ViewChild('msgText') messageElRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender = 'Kimberly Dean';
  constructor(private msgSvc: MessagesService) { }

  ngOnInit() {
  }

  onSendMessage(){
    const messageSubject = this.subjectElRef.nativeElement.value;
    const messageText = this.messageElRef.nativeElement.value;
    const newMessage = new Message('1', messageSubject, messageText, this.currentSender);
    this.msgSvc.addMessage(newMessage);
  }

  onClear(){
    this.subjectElRef.nativeElement.value = '';
    this.messageElRef.nativeElement.value = '';
  }

}
