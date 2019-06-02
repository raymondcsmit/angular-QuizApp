import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizComponent } from '../components/quiz/quiz.component';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanDeactivate<QuizComponent> {

  canDeactivate(component: QuizComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if (component.QuestionForm && component.testFinished===false ) {
      
        return confirm(`Navigate away and lose all changes ?`);
      }
      return true;
    // if (component.QuestionForm.dirty) {
      
    //   return confirm(`Navigate away and lose all changes ?`);
    // }
    
  }

}