import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaasQueryComponent } from './paas-query.component';

describe('PaasQueryComponent', () => {
  let component: PaasQueryComponent;
  let fixture: ComponentFixture<PaasQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaasQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaasQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
