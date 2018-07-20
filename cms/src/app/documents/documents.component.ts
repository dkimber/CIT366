import { Component, OnInit } from '@angular/core';
import { DocumentsService } from "./documents.service";
import {Contact} from "../contacts/contact.model";
import {Document} from "./document.model";

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  constructor(private docSvc: DocumentsService) { }

  ngOnInit() {
    this.docSvc.documentSelectedEvent
      .subscribe(
        (document: Document) => {
          this.selectedDocument = document;
        }
      );
  }

}
