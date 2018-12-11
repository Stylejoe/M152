import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainItemComponent } from './mountain-item.component';

describe('MountainItemComponent', () => {
  let component: MountainItemComponent;
  let fixture: ComponentFixture<MountainItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
