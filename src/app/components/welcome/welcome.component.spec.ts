import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { QuizComponent } from '../quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, ReactiveFormsModule, RouterTestingModule.withRoutes([{ path: 'quiz', component: QuizComponent }])],
      declarations: [WelcomeComponent, QuizComponent],
      providers: [Location]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });






  it('should render title in a h4 tag', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Quiz App');
  });




  it('should go to url', async(inject([Router, Location], (router: Router, location: Location) => {

    spyOn(component, 'ngOnInit');
    const elem = fixture.debugElement;
    const btn = elem.query(e => e.nativeElement.id == 'startquiz');
    btn.nativeElement.click();
    //btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      console.log(location.path());
      expect(location.path()).toContain('quiz');
      // expect(component.productSelection).toHaveBeenCalled();
    });
  })));


});
