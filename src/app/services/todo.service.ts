import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from "../view-tasks/Task.model"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = "http://localhost:3000";

  searchedText = "";

  constructor(private http: HttpClient) {}

  getTasks():Observable<any> {   
    return this.http.get(this.url + '/todos');
  }

  createTask(task:Task):Observable<any> {
    return this.http.post(this.url + '/todo', task);
  }

  getTaskById(id:string) {
    return this.http.get(`${this.url}/todo/${id}`);
  }

  updateTask(task:any) {
    return this.http.put(`${this.url}/todo/${task._id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.url}/todo/${id}`);
  }
}
