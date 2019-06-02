import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';
import { Question } from '../model/question';
import { of } from 'rxjs';

describe('QuestionService', () => {
 
  let service: QuestionService; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [QuestionService]
    });

    service = TestBed.get(QuestionService); 
  });


  

  it('should be created', () => {
   
    expect(service).toBeTruthy();
  });
  it('should load data', () => {
    
    service.getQuestions().subscribe((data) => {
      expect(data.length).toBe(5);
    });

    
  });
  
});
