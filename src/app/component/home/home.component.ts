import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  parentMessage: string = 'Hello from Parent!';

  // constructor(private cdr: ChangeDetectorRef) {}

  // triggerChangeDetection() {
  //   this.cdr.detectChanges();
  // }


cont = 1;

  decreasing(){
    this.cont++
  }
  decreaseing(){
    this.cont--;
  }

}
