import { Component } from '@angular/core';
import { ExtraContentService } from 'src/extra-content.service';

@Component({
  selector: 'app-sharingcomlay',
  templateUrl: './sharingcomlay.component.html',
  styleUrls: ['./sharingcomlay.component.scss']
})
export class SharingcomlayComponent {

  constructor(private extraContentService: ExtraContentService) {}

  ngOnInit(): void {
    this.extraContentService.loadExtraHtml().then(() => {
      // Extra HTML content has been loaded
    }).catch((error) => {
      console.error(error);
    });
  }
}
