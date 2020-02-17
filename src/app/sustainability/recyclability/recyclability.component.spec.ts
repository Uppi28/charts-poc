import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclabilityComponent } from './recyclability.component';

describe('RecyclabilityComponent', () => {
  let component: RecyclabilityComponent;
  let fixture: ComponentFixture<RecyclabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
