import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsComponent } from './manage-subjects.component';

describe('ManageSubjectsComponent', () => {
  let component: ManageSubjectsComponent;
  let fixture: ComponentFixture<ManageSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
