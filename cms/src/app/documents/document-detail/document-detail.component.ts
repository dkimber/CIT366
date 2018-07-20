import {Component, OnInit} from '@angular/core';
import {Document} from "../document.model";
import {DocumentsService} from "../documents.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import {WindRefService} from "../../wind-ref.service";

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;

  constructor(private docSvc: DocumentsService,
              private route: ActivatedRoute,
              private router: Router,
              private windRefSvc: WindRefService) {
    this.nativeWindow = this.windRefSvc.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          this.document = this.docSvc.getDocument(id);
        }
      );
  }

  onView(){
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete(){
    this.docSvc.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }

}
