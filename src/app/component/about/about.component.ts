import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() message: string | undefined;
  // items = ['Item 1', 'Item 2', 'Item 3'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

}
