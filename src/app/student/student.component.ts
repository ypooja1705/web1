import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import{HttpClient}from'@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: any;
  teachers: any;
  studentsForm = {
    "name": "", "class": "", "section": ""
  }
    teachersForm={  
      "name": "", "class": "", "section": ""
    } 
  status:string='offline';
  constructor(private api: ApiService,private http:HttpClient) {
  }

  ngOnInit(): void {
    debugger;
    this.api.getStudents().subscribe(data => {
      this.students = data;
      console.log(data);
    });
    this.api.getTeachers().subscribe(data => {
      this.teachers = data;
      console.log(data);
    });
  }

  calculateSqure(num: number) {
    return this.api.getSquare(num);
  }
  calculateCube(num: number) {
    return this.api.getCube(num);
  }
  onSave() {

    let isconfirmed = confirm("are you sure to insert record");
    if (isconfirmed) {
      this.http.post("http://localhost:3000/Student", this.studentsForm).subscribe(data => {
        this.students.push(data);
        console.log("post response", data);
      })
    }
    else {
      alert("no record inserted");
    }
  }

  onClick() {
    debugger;
        let isconfirmed = confirm("are you sure to insert record");
        if (isconfirmed) {
          this.http.post("http://localhost:3000/Teacher", this.teachersForm).subscribe(data => {
            this.teachers.push(data);
            console.log("post response", data);
          })
        }
        else {
          alert("no record inserted");
        }
}
checkstatus(){
  // alert('hi');
 this.status = Math.random()>0.5?'online':'offline';
}
getStatusColor(){
  if(this.status=='online'){
// return {backgroundColor:'green'}
return 'green';
  }
  else{
    // return {backgroundColor:'red'}
    return 'red';
  }
}
}
