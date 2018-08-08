import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyFormComponent} from './my-form.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyFormComponent],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
