import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLeadsFormComponent } from './c-leads-form.component';

describe('CLeadsFormComponent', () => {
  let component: CLeadsFormComponent;
  let fixture: ComponentFixture<CLeadsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLeadsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLeadsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
