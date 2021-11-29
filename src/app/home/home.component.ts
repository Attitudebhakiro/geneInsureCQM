import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MQuestion } from '../question';
import { QuestionsService } from '../questions.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Agent } from '../Agent';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  agentForm!: FormGroup;

  questions: any[] = [];

  currentQsn!: number;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [] as any;
  agentName!: string;
  answer!: number;
  score!: number;
  maxScore!: number;
  qsnNumber!: number;
  info: any
  public AgntName!: Agent[];
  public MoniteringResults!: MQuestion[];
  AgentSavedSucceed = false;
  AgentSaveFaild = false;
  new!: string;
  viewResults = false;
  qsn!: string;

  @ViewChild('dataTable', { static: false })
  table!: { nativeElement: any; };
  dataTable: any;
  


  constructor(
    public fb: FormBuilder,
    private qsnService: QuestionsService,
    
    ) { 
      this.agentForm = this.fb.group({
        name: '',     
        supervisor: '',
        rdate: '',
        callref:  '',
        callrecordingRef: '',  
        customernumber: '',
  
      })
   
  }

  ngOnInit(): void {
    this.questions = this.qsnService.getQuestions();
    this.currentQsn = this.getRandom();
    
    
    this.prevAnswered.push(this.currentQsn);

      // fetch details of agent
      this.info = {
       
        Aname: this.qsnService.getName(),
            
      };
  
      // fetch existing students results
      this.qsnService.listAgents()
         .subscribe((rs: Agent[]) => {
          this.AgntName = rs;
          console.log(this.AgntName);   
                 
        })

  
  }

    // saving the agent info to DB
    saveAgent(){
      this.qsnService.postAgent(this.agentForm.value).subscribe(
       data  => {
          console.log(data);
          this.AgentSavedSucceed = true;
          this.AgentSaveFaild = false;
            },
          error => {
     
          this.AgentSaveFaild = true;
            console.log(error);
       
        }
     
      );

      //taking name for displaying results
      // this.qsnService.getMoniteringResults(this.agentName)
 }
 ViewResults(){
 this.viewResults = true;
   // fetch monitering results
   this.qsnService.getMoniteringResults(this.agentName)
   .subscribe((rs: MQuestion[]) => {
    this.MoniteringResults = rs;
    console.log(this.MoniteringResults);   
           
  })
 }

  onAnswer(answr: number, userScore: number){
    this.answerSelected = true;
    setTimeout(() => {
      let newQsn = this.getRandom();
       while(this.prevAnswered.includes(newQsn) && this.prevAnswered.length < 10){
        newQsn = this.getRandom();
       }
       this.currentQsn = newQsn;
        this.prevAnswered.push(this.currentQsn);
      
        this.answerSelected = false;
    }, 300);
   

    if(answr){
      this.correctAnswers++;
      if(this.prevAnswered.length < 10){
          if(answr==3){
            this.maxScore = 0
          }else{
            this.maxScore = 1
          }
            
          this.score = userScore
          this.answer = answr
          this.agentName = this.agentForm.value.name
          // this.qsnNumber = this.currentQsn
          this.qsn= this.qsnService.questions[this.currentQsn].question
          // console.log(answr)
          // console.log(this.score)
          // console.log(this.maxScore)
          // console.log(this.currentQsn)
          // console.log(this.agentName)
          // console.log(this.new)
      
        }
        // saving the current question to DB
        this.qsnService.saveQuestion(this.qsn, this.answer, this.score, this.maxScore, this.agentName).subscribe(
          data  => {
            //  console.log(data);
               },
             error => {
               console.log(error);
          
           }
        
         );

    }else{
      this.incorrectAnswers++;
    }
    
  }

  getRandom(){
    return Math.floor(Math.random() * this.questions.length);
    // return Math.floor(this.questions.length);
  }

  //save question
  
 

}
