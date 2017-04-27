import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BookComponent } from './../book/book.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    const httpMock = {
      get: () => Observable.of({
        json: () => []
      })
    };

    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: Http,
        useValue: httpMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a great book on button click', () => {

    // fixture.nativeElement.querySelector('button').click();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.books.length).toBe(3);
  });
});
