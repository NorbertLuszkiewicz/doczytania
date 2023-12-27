import { Component } from '@angular/core';
import { novelData } from './novelData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = novelData.pages;
  p: any;
}
