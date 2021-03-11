import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let compiled;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an About title', () => {
    const title = fixture.nativeElement.querySelector('b');
    expect(title.textContent).toEqual("About:");
  });

  it('should have an about property', () => {
    const expected: string = "ToDo app - http://pello.io";

    expect(component.about).toEqual(expected);
  });

  it('should have an about text', () => {
    const paragraph = fixture.nativeElement.querySelector('p');
    const expected: string = "About: ToDo app - http://pello.io";

    expect(paragraph.textContent).toEqual(expected);
  });
});
