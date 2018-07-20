import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact.model";
import {ContactService} from "../contact.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;

  constructor(private contSvc: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          this.contact = this.contSvc.getContact(id);
        }
      );
  }

  onDelete(){
    this.contSvc.deleteContact(this.contact);
    this.router.navigate(['/contacts']);
  }

}
