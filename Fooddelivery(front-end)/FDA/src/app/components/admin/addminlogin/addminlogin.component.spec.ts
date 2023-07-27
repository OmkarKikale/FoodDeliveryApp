import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminloginComponent } from './addminlogin.component';

describe('AddminloginComponent', () => {
  let component: AddminloginComponent;
  let fixture: ComponentFixture<AddminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddminloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
