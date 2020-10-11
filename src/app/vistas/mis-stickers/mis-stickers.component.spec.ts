import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisStickersComponent } from './mis-stickers.component';

describe('MisStickersComponent', () => {
  let component: MisStickersComponent;
  let fixture: ComponentFixture<MisStickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisStickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
