import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerapplicatonComponent } from './custmerapplicaton.component';

describe('CustmerapplicatonComponent', () => {
  let component: CustmerapplicatonComponent;
  let fixture: ComponentFixture<CustmerapplicatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmerapplicatonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmerapplicatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
