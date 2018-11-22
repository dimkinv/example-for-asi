import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'app';

  onButtonClicked() {
    this.title = 'clicked';
  }

  onTitleChange(title) {
    this.title = title;
  }
}
