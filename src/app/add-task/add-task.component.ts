import { Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Task } from '../view-tasks/Task.model';
import {Router} from "@angular/router";
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private todoService: TodoService, private router: Router) {}
  
  handleNewTask(newTask:Task) {
    this.todoService.createTask(newTask).subscribe((data) => {
      if (!data.error) 
        this.router.navigate(['tasks']);
    })
  }
}
