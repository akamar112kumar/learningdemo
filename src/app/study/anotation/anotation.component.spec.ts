import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotationComponent } from './anotation.component';

describe('AnotationComponent', () => {
  let component: AnotationComponent;
  let fixture: ComponentFixture<AnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
