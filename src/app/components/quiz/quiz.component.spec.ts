import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { ToastrModule } from 'ngx-toastr';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
let questionService:QuestionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, ReactiveFormsModule,HttpClientModule,RouterTestingModule.withRoutes([]),ToastrModule.forRoot()],
      declarations: [ QuizComponent ],
      providers:[QuestionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    //questionService = fixture.debugElement.injector.get(QuestionService);
    fixture.detectChanges();
  });
  
  it('should create', () => {
    inject([QuestionService], (quesService) => {
    expect(component).toBeTruthy(); 
    });
  });

  

  it('should return an Observable<Array<Video>>',
  inject([QuestionService], (quesService) => {

    quesService.getQuestions().subscribe((data) => {
      expect(data.length).toBe(5);
    });
}));


  it('should start with a testFinished at false', () => {
    spyOn(component, 'ngOnInit');
    
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    expect(component.testFinished).toEqual(false);
    });
  });

  it('should have current question when is resolved', async(() => {
   
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      //expect(component.CurrentQuestion).toEqual(1);
    })
  }))

});

 