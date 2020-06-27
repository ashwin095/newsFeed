import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMArkComponent } from './book-mark.component';

describe('BookMArkComponent', () => {
  let component: BookMArkComponent;
  let fixture: ComponentFixture<BookMArkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMArkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMArkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
