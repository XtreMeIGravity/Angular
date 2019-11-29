import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelizComponent } from './feliz.component';

describe('FelizComponent', () => {
  let component: FelizComponent;
  let fixture: ComponentFixture<FelizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
