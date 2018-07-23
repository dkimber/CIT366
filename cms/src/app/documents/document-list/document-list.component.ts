import {Component, OnDestroy, OnInit} from '@angular/core';
import { Document } from "../document.model";
import { DocumentsService } from "../documents.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private subscription: Subscription;

  constructor(private docSvc: DocumentsService) {
    this.documents = this.docSvc.getDocuments();
  }

  ngOnInit() {
   this.subscription = this.docSvc.documentListChangedEvent
      .subscribe(
        (documentsList: Document[]) => {
          this.documents = documentsList;
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
