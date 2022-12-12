import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: this.newProperty,
  styleUrls: ['./component3.component.css']
})
export class AppComponent {
  private readonly newProperty = './component3.component.html';

  title = 'blog';
}
