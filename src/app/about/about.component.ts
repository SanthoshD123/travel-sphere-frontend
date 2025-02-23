import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `<h2>About Us</h2>
    <p>
      This platform aggregates travel packages so you can easily compare and
      choose the best deals!
    </p>`,
  styles: [
    `
      h2 {
        color: navy;
      }
      p {
        font-size: 1.1em;
      }
    `,
  ],
})
export class AboutComponent {}
