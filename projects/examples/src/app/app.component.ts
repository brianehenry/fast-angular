import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appearance = 'outline';
  textField = new FormControl('');
  constructor() {
  }

  onClick(event: MouseEvent) {
    console.log(event);
  }
}
