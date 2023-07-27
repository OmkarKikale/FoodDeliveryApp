import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminregistrationComponent } from './addminregistration.component';

describe('AddminregistrationComponent', () => {
  let component: AddminregistrationComponent;
  let fixture: ComponentFixture<AddminregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddminregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
