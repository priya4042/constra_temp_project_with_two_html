import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading">
      <!-- Add your loading icon or message here -->
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
