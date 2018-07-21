import { Component } from '@angular/core';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent {
  constructor(){
    console.log(sessionStorage.aptitude)
  }
  answers={
    1:"c",2:"c"
}
count=0;
total=0;
app=0;
tech=0;
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
  console.log(this.count);
 }

}
sessionStorage.technical=this.count;
// this.total=this.count+sessionStorage.aptitude;
//  console.log(this.count);
 this.app=sessionStorage.aptitude;
this.tech=sessionStorage.technical;
this.total=this.app + this.tech;
sessionStorage.clear();
}
}
