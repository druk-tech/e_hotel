import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
  }

  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }

  createUsers(data){
    return this.http.post('http://localhost:3000/users',data);
  }
  
}
