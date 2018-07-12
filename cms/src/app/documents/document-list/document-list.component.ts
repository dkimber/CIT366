import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from "../document.model";

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(1, 'Document One', 'This document is a test file', 'www.document1.com', null),
    new Document(2, 'Document 2', 'This is document dos', 'www.document2.com', null),
    new Document(3, 'Document III', 'DUMMY DOCUMENT THREE', 'www.document3.com', null),
    new Document(4, 'Document QUATRO', 'Yet another dummy document', 'www.document4.com', null),
    new Document(5, 'Document 5', 'Fifth Test doc...', 'www.document5.com', null),
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
