import {EventEmitter, Injectable} from '@angular/core';
import { Document } from "./document.model";
import { MOCKDOCUMENTS } from "./MOCKDOCUMENTS";
import { Subject} from "rxjs/Subject";

@Injectable()
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();
  documents: Document[] = [];
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number = 0;

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(){
    return this.documents.slice();
  }

  getDocument(id: string) {
    for(let document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  getMaxId(){
    let maxId = 0;
    for (let document of this.documents){
      const currentId = +document.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if(newDocument == null || newDocument == undefined){
      return;
    }

    this.maxDocumentId++;
    newDocument.id = String(this.maxDocumentId);
    this.documents.push(newDocument);
    this.documentListChangedEvent.next(this.documents.slice());
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if(originalDocument == null || originalDocument == undefined ||
      newDocument == null || newDocument == undefined){
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if(pos < 0) {
      return;
    }
    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;

    this.documentListChangedEvent.next(this.documents.slice());
  }

  deleteDocument(document: Document) {
    if(document == null) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0){
      return;
    }

    this.documents.splice(pos, 1);
    this.documentListChangedEvent.next(this.documents.slice());
  }

}
