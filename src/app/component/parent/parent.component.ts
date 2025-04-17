import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  standalone:true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
parent:string ="amar kumar";

constructor(private cr:ChangeDetectorRef){}

changeDetection(){
  this.cr.detectChanges;
  console.log("changeDetection")
}
}
