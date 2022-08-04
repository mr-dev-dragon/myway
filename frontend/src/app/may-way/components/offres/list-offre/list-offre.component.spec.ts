import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffreComponent } from './list-offre.component';

describe('ListOffreComponent', () => {
  let component: ListOffreComponent;
  let fixture: ComponentFixture<ListOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
