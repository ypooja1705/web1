import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { 
  }
  getStudents(){
   return this.http.get("http://localhost:3000/Student");

  }
  poststudentsForm(data:any){
    return this.http.post("http://localhost:3000/Student",data);
   }
  getTeachers(){
    return this.http.get("http://localhost:3000/teacher");
   }
   postteachersForm(data:any){
    return this.http.post("http://localhost:3000/teacher",data);
   }
   getcustomers(){
    return this.http.get("http://localhost:3000/customer");
   }
   postcustomersForm(data:any){
return this.http.get("http://localhost:3000/customer",data);
   }
  getSquare(a:number){
    return a*a;
  }
  getCube(a:number){
    return a*a*a;
  }
  
  
}
