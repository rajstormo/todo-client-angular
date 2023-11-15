import { Component, Input, OnChanges} from '@angular/core';
import { Task } from '../Task.model';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input() task:any;
  isCompleted = false;
  
  handleIsCompleted() {
    this.isCompleted = !this.isCompleted;
    console.log(this.task)
  }

}
