import { Component } from '@angular/core';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-portfolio';

  navigation = [
    { link: 'about', label: 'About'},
    { link: 'portfolio', label: 'Portfolio' },
    { link: 'blog', label: 'Blog' },
  ];
}
