import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpInfoComponent } from './imp-info.component';

describe('ImpInfoComponent', () => {
  let component: ImpInfoComponent;
  let fixture: ComponentFixture<ImpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
