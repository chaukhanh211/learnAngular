import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessgaseComponent } from './messgase.component';

describe('MessgaseComponent', () => {
  let component: MessgaseComponent;
  let fixture: ComponentFixture<MessgaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessgaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessgaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
