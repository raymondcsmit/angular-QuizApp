import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { GenericValidator } from 'src/app/validation/generic-validator';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/model/question';
import { Router } from '@angular/router';
import { Utility } from 'src/app/validation/utility';
import { ToastrService } from 'ngx-toastr';
import { TestResult } from 'src/app/model/test-result';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, AfterViewInit, OnDestroy {


  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  private sub: Subscription;
  private QuizQuestions: Question[] = [];
  private result: TestResult;

  CurrentQuestion: Question;
  QuestionForm: FormGroup;
  nextIndex: number ;
  buttonTitle: string;
  testFinished: boolean ;
  constructor(private formBuilder: FormBuilder, private qservice: QuestionService, private router: Router, private toastr: ToastrService, ) {

   
    this.nextIndex = 0;
    this.buttonTitle = 'Next';
    this.testFinished = false;
    this.QuizQuestions = [];


    this.validationMessages = {
      SelectedAnswer: {
        required: 'please select any option as answer'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.result = new TestResult();
  }

  ngOnInit() {
    this.qservice.getQuestions().subscribe(res => {
      this.QuizQuestions = res;

      this.createForm();
      this.sub = this.QuestionForm.valueChanges
        .subscribe(change => {

          this.displayMessage = this.genericValidator.processMessages(this.QuestionForm);
        });
      this.next();
    },
      (error: any) => this.toastr.error(<any>error)
    );
  }
  //clear subscriptions on destroy
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.displayMessage = {};

  }
  ngAfterViewInit(): void {

  }
  //create form with formcontrol SelectedAnswer
  createForm() {
    this.QuestionForm = this.formBuilder.group({
      SelectedAnswer: ['', Validators.required]
    });
  }

  // Display next Question
  next() {

    if (this.nextIndex < this.QuizQuestions.length) {
      this.CurrentQuestion = this.QuizQuestions[this.nextIndex];
      if (this.QuestionForm) {
        this.QuestionForm.reset();
      }
    }
    else {
      //On completion navigate to result
      this.router.navigate(['/result', JSON.stringify(this.result)]);
    }

    this.nextIndex++;
    //Change button title
    if (this.nextIndex === this.QuizQuestions.length) {
      this.buttonTitle = 'Finish';
      this.testFinished=true;
    }
  }

  onsaveComplete() {
    this.QuestionForm.reset();
    this.next();

  }

  save() {

    if (this.QuestionForm.valid) {
      if (this.QuestionForm.dirty) {
        let answer = this.QuestionForm.get('SelectedAnswer').value;

        if (answer === this.CurrentQuestion.CorrectAnswer) {
          this.result.CorrectAnswer++;

        }
        else {
          this.result.IncorrectAnswer++;

        }
        this.onsaveComplete();
      }
    }

    else {
      // If form is not valid mark questions form touched, process error message
      Utility.markTouched(this.QuestionForm);
      this.displayMessage = this.genericValidator.processMessages(this.QuestionForm);
      let errMessage = 'Please correct the validation errors.';
      //Display error message in toastr
      this.toastr.error(errMessage);
    }

  }

  //skip action
  skip() {
    this.result.SkipedAnswer++;
    this.displayMessage = {};
    this.next();
  }

}
