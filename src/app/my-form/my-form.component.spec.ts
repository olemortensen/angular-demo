import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyFormComponent} from './my-form.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyFormComponent],
      imports: [FormsModule, BrowserAnimationsModule]
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


  it('has address input elements', async(() => {
    ['firstname', 'lastname', 'city', 'postalcode'].forEach(e => {
      expect(compiled.querySelector(`input[name="${e}"]`)).toBeTruthy();
    });
  }));

  it('has a street textarea element', async(() => {
    expect(compiled.querySelector('textarea[name="street"]')).toBeTruthy();
  }));
});
