import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTablestyle]',
  standalone: true
})
export class TablestyleDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', '500');
    // this.renderer.setStyle(this.el.nativeElement, 'font-family', 'arial');
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');

    // this.renderer.setAttribute(this.el.nativeElement, 'title', 'This is a custom directive');
    // this.renderer.addClass(this.el.nativeElement, 'custom-class-style');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('red');
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
export { ElementRef, Renderer2 };

