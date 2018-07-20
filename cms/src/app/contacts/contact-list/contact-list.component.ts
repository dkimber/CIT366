import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact.model";
import {ContactService} from "../contact.service";
import {Document} from "../../documents/document.model";

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactSvc: ContactService) {
    this.contacts = this.contactSvc.getContacts();
  }

  ngOnInit() {
    this.contactSvc.contactsChangedEvent
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      )
  }
}
