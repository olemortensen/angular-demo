import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyFormComponent} from './my-form.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;
  let compiled;

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
    compiled = fixture.debugElement.nativeElement;
  });

  it('creates the form', () => {
    expect(component).toBeTruthy();
  });

  it('has all input elements', async(() => {
    ['firstname', 'lastname', 'street', 'city', 'postalcode'].forEach(e => {
      expect(compiled.querySelector(`input[name="${e}"]`)).toBeTruthy();
    });
  }));
});
