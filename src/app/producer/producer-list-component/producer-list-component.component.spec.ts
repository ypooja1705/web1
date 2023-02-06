import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerListComponentComponent } from './producer-list-component.component';

describe('ProducerListComponentComponent', () => {
  let component: ProducerListComponentComponent;
  let fixture: ComponentFixture<ProducerListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducerListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
