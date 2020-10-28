import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaasResultsComponent } from './paas-results.component';

describe('PaasResultsComponent', () => {
  let component: PaasResultsComponent;
  let fixture: ComponentFixture<PaasResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaasResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaasResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
