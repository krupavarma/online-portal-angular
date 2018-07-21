import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent {
    constructor(private router:Router){}
    answers={
        1:"c",2:"c"
    }
    count=0;
apptitute=[
    {
        id:1,
        question:"what what what ??????",
        options:[
            {   id:'a',value:'1aa'},
            {   id:'b',value:'1bb'},
            {   id:'c',value:'1cc'},
            {   id:'d',value:'1dd'},
        ]
        
    },
    {
        id:2,
        question:"what what what ??????",
        options:[
            {   id:'a',value:'2aa'},
            {   id:'b',value:'2bb'},
            {   id:'c', value:'2cc'},
            {    id:'d',value:'2dd' },
        ]
        
    }

]
submit(f){
    console.log(f);
let ans=Object.values(this.answers);
let sub=Object.values(f);

for(let i=0;i<ans.length;i++){
  
     if(ans[i]==sub[i]){
      this.count++;
      console.log(this.count)
     }
    
}
sessionStorage.aptitude=this.count;
this.router.navigate(['./exampaper/technical']);
//  console.log(this.count);
}
}
