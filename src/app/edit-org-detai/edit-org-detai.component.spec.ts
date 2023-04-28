import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrgDetaiComponent } from './edit-org-detai.component';

describe('EditOrgDetaiComponent', () => {
  let component: EditOrgDetaiComponent;
  let fixture: ComponentFixture<EditOrgDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrgDetaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrgDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
