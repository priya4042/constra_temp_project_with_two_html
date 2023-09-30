import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExtraContentService } from 'src/extra-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'constratempproject';
  constructor(private extraContentService: ExtraContentService) {}

  loadExtraHtmlContent() {
    this.extraContentService.loadExtraHtml()
      .then(() => {
        // Extra HTML content has been loaded and applied
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
