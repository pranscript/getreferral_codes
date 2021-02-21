import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinfoComponent } from './refinfo.component';

describe('RefinfoComponent', () => {
  let component: RefinfoComponent;
  let fixture: ComponentFixture<RefinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
