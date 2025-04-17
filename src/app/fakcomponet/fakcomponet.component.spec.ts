import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakcomponetComponent } from './fakcomponet.component';

describe('FakcomponetComponent', () => {
  let component: FakcomponetComponent;
  let fixture: ComponentFixture<FakcomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakcomponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
