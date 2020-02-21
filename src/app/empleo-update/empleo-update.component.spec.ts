import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleoUpdateComponent } from './empleo-update.component';

describe('EmpleoUpdateComponent', () => {
  let component: EmpleoUpdateComponent;
  let fixture: ComponentFixture<EmpleoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
