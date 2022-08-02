import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfileComponent } from './main-profile.component';

describe('MainProfileComponent', () => {
  let component: MainProfileComponent;
  let fixture: ComponentFixture<MainProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
