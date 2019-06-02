import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Question } from '../model/question';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {
//filepath:string='../../assets/question.data.json';
  constructor(private httpService: HttpClient) { }
  //questions:Question[];
 questions:Question[]=[
  {
  "QuestionID":1,
"QuestionText": "Which is the largest country in the world by population?",
"Options": ["India", "USA", "China", "Russia"],
"CorrectAnswer": "China"
},{
  "QuestionID":2,
"QuestionText": "When did the second world war end?",
"Options": ["1945", "1939", "1944", "1942"],
"CorrectAnswer": "1945"
},
 { "QuestionID":3,
"QuestionText": "Which was the first country to issue paper currency?",
"Options": ["USA","France","Italy","China"],
"CorrectAnswer": "China"
},
 { "QuestionID":4,
"QuestionText": "Which city hosted the 1996 Summer Olympics?",
"Options": [ "Atlanta", "Sydney", "Athens", "Beijing"],
"CorrectAnswer": "Atlanta"
},
 { "QuestionID":5,
"QuestionText": "Who invented telephone?",
"Options": [ "Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
"CorrectAnswer": "Alexander Graham Bell"
}
    ];

 getQuestions() : Observable<Question[]> {
//return   this.httpService.get<Question[]>( this.filepath );
return of(this.questions);
}
  


private handleError(error: HttpErrorResponse) {
        console.log(error);
        //todo display error
        return Observable.throw(error.message || 'Internal Server error');
}

}
