import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Task } from './Task.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
})

export class ViewTasksComponent {
  loadedTasks:Task[] = [];

  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTasks().subscribe((data:Task[]) => {
      this.loadedTasks = data;
      this.tasks = data;
    })
  }

  ngDoCheck() {   
    if (this.todoService.searchedText.length != 0) {
      const tasksFound = this.loadedTasks.filter(task => {
        return task.title.toLowerCase().includes(this.todoService.searchedText.toLowerCase());
      })
      this.tasks = tasksFound;
    }
    else {
      this.tasks = this.loadedTasks;
    }
  }
}
