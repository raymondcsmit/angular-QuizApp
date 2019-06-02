import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { EditGuard } from './guard/edit.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },     
  { path: 'welcome', component:WelcomeComponent},
  { path: 'quiz', component:QuizComponent ,canDeactivate: [EditGuard] },  
  { path: 'result/:resultData', component: ResultComponent },
  { path: '**', redirectTo: 'welcome' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
