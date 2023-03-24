import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCatComponent } from './detail-cat.component';

describe('DetailCatComponent', () => {
  let component: DetailCatComponent;
  let fixture: ComponentFixture<DetailCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
