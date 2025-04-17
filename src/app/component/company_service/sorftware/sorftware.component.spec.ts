import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorftwareComponent } from './sorftware.component';

describe('SorftwareComponent', () => {
  let component: SorftwareComponent;
  let fixture: ComponentFixture<SorftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
