// Create a route guard (e.g., extra-content.guard.ts)
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExtraContentGuard implements CanActivate {
  canActivate(): boolean {
    // Load and execute the extra.html content here
    this.loadExtraHtml();
    return true;
  }

  private loadExtraHtml(): void {
    // Create a script element to load extra.html
    const script = document.createElement('script');
    script.src = './assets/extra.html'; // Replace with the actual path
    script.async = true;

    // Append the script element to the document's body
    document.body.appendChild(script);
  }
}
