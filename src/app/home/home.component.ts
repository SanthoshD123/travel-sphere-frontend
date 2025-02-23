import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>Welcome to the Travel Aggregator Home Page</h2>
    <p>Plan your trip by comparing travel packages from multiple agencies.</p>`,
  styles: [
    `
      h2 {
        color: darkgreen;
      }
      p {
        font-size: 1.1em;
      }
    `,
  ],
})
export class HomeComponent {}
