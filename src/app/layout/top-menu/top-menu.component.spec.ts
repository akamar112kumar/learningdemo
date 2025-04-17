import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  let comp = new TopMenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
 it('show alert message',()=>{
expect(comp.showmasg('hello')).toBe('hello')
 });

  it('addition of two number', ()=>{
    expect(comp.Addition(10,20)).toBe(30);
  });

});


