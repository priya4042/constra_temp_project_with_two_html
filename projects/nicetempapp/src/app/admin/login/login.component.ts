import { Component, Renderer2, OnInit } from '@angular/core';
import { ExtraContentService } from 'src/extra-content.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private extraContentService: ExtraContentService,
    private router: Router // Inject the Router
  ) {}

  ngOnInit(): void {
    // Check if content exists in sessionStorage
    const extraHtmlContent = sessionStorage.getItem('extraHtmlContent');
    if (extraHtmlContent) {
      // Inject the extra HTML content into the DOM
      const parser = new DOMParser();
      const doc = parser.parseFromString(extraHtmlContent, 'text/html');
      document.body.appendChild(doc.body);
    }
  }

  // Define the function to load extra HTML content
  loadExtraHtmlContent() {
    this.extraContentService.loadExtraHtml()
      .then(() => {
        console.log('Extra HTML content loaded');
        // Redirect to the admin home page
        this.router.navigate(['../admin/home']); // Use Router to navigate
      })
      .catch((error) => {
        // Handle the error if the extra HTML content fails to load
        console.error('Failed to load extra HTML content:', error);
      });
  }
}
