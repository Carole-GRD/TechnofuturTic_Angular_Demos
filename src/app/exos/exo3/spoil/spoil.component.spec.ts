import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilComponent } from './spoil.component';

describe('SpoilComponent', () => {
  let component: SpoilComponent;
  let fixture: ComponentFixture<SpoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
