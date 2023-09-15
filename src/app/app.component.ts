import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Marquitos';
  age = 50;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Andres',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}
