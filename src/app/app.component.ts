import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
      imports: [
         FormsModule
      ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'array';
  // inputData: any = {name: ""}

  name = '';
  branch = '';
  course = '';
  color = 'red';
  ddd = true;

  student =[ 
     {name:'anju',rollno:21,branch:'it',course:'btech'}, 
     {name:'noor',rollno:26,branch:'it',course:'btech'}, 
     {name:'kk',rollno:20,branch:'it',course:'btech'}, 
     ];

     data =[1,2,3,4,5];

     abc ={name:'anju',addess:'bijnor'};


     head = "This is header"
     headData = {name: "yes", data: "this is headData"}
     num = 345
     price = 54
     product = {name: "redme", price: 40000}
     collection = [{name: "redmin 8", price: 4000},{name: "redmi 9", price: 1000}];

     clickFun(){
      this.student.push({name: this.name, rollno: 32, branch: this.branch, course: this.course})
      // dfd
      // this.name = ''
      // this.branch = ''
      // this.course = ''
      this.name= 'enter data'
      this.branch= 'enter data'
      this.course= 'enter data'
         }
     deleteData(){
    this.student.pop()
}

clickRun(){
  this.student.shift();
}
clicktun(){
  this.student.unshift({name:this.name,rollno:33,branch:this.branch,course:this.course});
  this.name = ''
      this.branch = ''
      this.branch = ''
      this.course = ''

}

clickDun(){
  delete this.student[2];
}

myEvent(colorData: string){
  // if(color==='red'){
  //   this.color = color;
  // }
  // else if(color==='green'){
  //   this.color = color;
  // }
  // else if(color==='blue'){
  //   this.color = color;
  // }
  // else if(color==='yellow'){
  //   this.color = color;
  // }
  this.color =colorData
}

changeBtn(){
  this.ddd= false
}



}
