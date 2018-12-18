import { Component } from '@angular/core';
import { Picture } from './picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfd';
  pictures: Picture[] = [];
  addImage() {
    this.pictures.push({ src: '', type: 0 });
  }
}
