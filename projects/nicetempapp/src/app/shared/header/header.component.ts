import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // constructor(private renderer: Renderer2, private el: ElementRef) { }
 

  // ngOnInit(): void {

   
  //   this.addCssAndJsLinks([
  //     // ----------------------------CSS------------------------------------------------------------
  //     { type: 'stylesheet', path: '../../../shared-assets/css/style.css'},
  //        { type: 'stylesheet', path: '../../../shared-assets/vendor/bootstrap/css/bootstrap.min.css' },

  //     // ----------------------------Js------------------------------------------------------------
     
  //     { type: 'script', path: '../../../shared-assets/js/main.js' },
  //   ]);
  // }

  // addCssAndJsLinks(links: { type: string; path: string; rel?: string }[]) {
  //   links.forEach(link => {
  //     if (link.type === 'stylesheet') {
  //       this.createAndAppendLink(link.type, 'stylesheet', 'text/css', link.path);
  //     } else if (link.type === 'script') {
  //       this.createAndAppendScript('text/javascript', link.path);
  //     }
  //   });
  // }

  // private createAndAppendLink(rel: string, linkType: string, type: string, href: string) {
  //   const linkElement = this.renderer.createElement('link');
  //   this.renderer.setAttribute(linkElement, 'rel', rel);
  //   this.renderer.setAttribute(linkElement, 'type', type);
  //   this.renderer.setAttribute(linkElement, 'href', href);
  //   this.renderer.appendChild(this.el.nativeElement, linkElement);
  // }

  // private createAndAppendScript(type: string, src: string) {
  //   const scriptElement = this.renderer.createElement('script');
  //   this.renderer.setAttribute(scriptElement, 'type', type);
  //   this.renderer.setAttribute(scriptElement, 'src', src);
  //   this.renderer.appendChild(this.el.nativeElement, scriptElement);
  // }

  
}