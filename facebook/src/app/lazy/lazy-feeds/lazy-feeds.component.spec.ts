import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFeedsComponent } from './lazy-feeds.component';

describe('LazyFeedsComponent', () => {
  let component: LazyFeedsComponent;
  let fixture: ComponentFixture<LazyFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
