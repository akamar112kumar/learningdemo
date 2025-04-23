import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowFComponent } from './arrow-f.component';

describe('ArrowFComponent', () => {
  let component: ArrowFComponent;
  let fixture: ComponentFixture<ArrowFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
