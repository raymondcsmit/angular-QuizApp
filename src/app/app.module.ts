import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ResultComponent } from './components/result/result.component';
import { QuestionService } from './services/question.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageloadguardDirective } from './directive/pageloadguard.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WelcomeComponent,
    ResultComponent,
    PageloadguardDirective
  ],
  imports: [
    BrowserModule,CommonModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
    })
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
