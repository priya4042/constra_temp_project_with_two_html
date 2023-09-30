// extra-content.service.ts
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtraContentService implements OnDestroy {
  private appliedStyles: HTMLLinkElement[] = [];
  private appliedScripts: HTMLScriptElement[] = [];

  constructor() {}

  loadExtraHtml(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', './assets/extra.html', true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(xhr.responseText, 'text/html');

          // Clear any previously applied styles and scripts
          this.clearAppliedStylesAndScripts();

          // Apply the styles and scripts from extra.html to the current document
          this.applyStylesAndScripts(doc);

          // Store the loaded content in sessionStorage
          sessionStorage.setItem('extraHtmlContent', xhr.responseText);

          resolve();
        } else if (xhr.readyState === 4) {
          reject(new Error(`Failed to load extra.html (status ${xhr.status})`));
        }
      };
      xhr.send();
    });
  }

  private applyStylesAndScripts(doc: Document) {
    // Apply styles from extra.html to the current document
    const stylesheets = doc.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((stylesheet) => {
      const href = stylesheet.getAttribute('href');
      if (href) {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.href = href;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        this.appliedStyles.push(link);
      }
    });

    // Apply scripts from extra.html to the current document
    const scripts = doc.querySelectorAll('script');
    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src) {
        const newScript = document.createElement('script');
        newScript.src = src;
        document.body.appendChild(newScript);
        this.appliedScripts.push(newScript);
      }
    });
  }

  clearAppliedStylesAndScripts() {
    // Remove previously applied styles
    this.appliedStyles.forEach((style) => {
      style.remove();
    });
    this.appliedStyles = [];

    // Remove previously applied scripts
    this.appliedScripts.forEach((script) => {
      script.remove();
    });
    this.appliedScripts = [];
  }

  ngOnDestroy() {
    // Ensure that applied styles and scripts are cleared when the service is destroyed
    this.clearAppliedStylesAndScripts();
  }
}
