import { NumberFormatStyle } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MQuestion } from './question';
import { Agent } from './Agent';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { HomeComponent } from './home/home.component';


interface Qsns{
  question: string;
  answer: { userAnswer: number, score: number } [];
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private postQsnUrl = 'http://localhost:5050/saveAgentQsn';
  private postAgentUrl = 'http://localhost:5050/saveagent';
  private listagents = 'http://localhost:5050/listagents';
  private moniteringResultsUrl = 'http://localhost:5050/scores';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
   
  ) { }
// save questions
saveQuestion(qsn:string,  answer:number, score:number, maxScore:number, agentName: string) {
  return this.http.post<any>(this.postQsnUrl,{qsn, answer, score, maxScore, agentName},httpOptions )
 
}


//post agent info to DB
postAgent(agent:Agent){
  return this.http.post<any>(this.postAgentUrl,agent,httpOptions )
}

getName(){
  return localStorage.getItem('access_name')
} 

// list agents
listAgents(): Observable<any> {
    return this.http.get<Agent[]>(this.listagents, { headers: this.headers }).pipe(
    map((res: any) => {
      return res || {}
    }),
    // catchError(this.handleError)
  )
}

//monitering results
getMoniteringResults(currentAgent:any): Observable<any> {
  let scoreUrl = `${this.moniteringResultsUrl}/${currentAgent}`;
  return this.http.get<MQuestion[]>(scoreUrl, { headers: this.headers }).pipe(
    map((res) => {
      return res || {}
    }),
    // catchError(this.handleError)
  )
}


  // questions
  questions: Qsns[] = [
    {
      question: "Q1 Did the agent professionally greet the client?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q2 Did the agent introduce him/ herself?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q3 Did the agent mention the company's name?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q4 Did the agent fully describe the company's product offering?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q5 Did the agent confirm or ask for the potential client's name?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q6 Did the agent display knowledge of previous calls?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q7 Did the agent avoid the use of slang?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q8 Did the agent mention the client's name at least 3 times?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    },
    {
      question: "Q9 Did the agent thank the client for his/ her time?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
      
    },
    {
      question: "Q10 Did the agent correctly dispose the call?",
      answer: [
        { userAnswer: 1, score: 1},
        { userAnswer: 2, score: 0},
        { userAnswer: 3, score: 0}
    
      ]
    }
  ]

  getQuestions(){
    return this.questions;
  }
}
