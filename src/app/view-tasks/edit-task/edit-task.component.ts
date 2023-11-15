import { Component } from '@angular/core';
import { Task } from '../Task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent {
  task:Task = {id: 0, title: '', description: '', completed: false}

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {}
  
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.todoService.getTaskById(id).subscribe((data:any) => {
      console.log(data.message);
      this.task = data.message;
    })
  }

  handleEditTask(value: Task) {
    // to copy the id of task
    this.task = {...this.task, ...value};
    this.todoService.updateTask(this.task).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/tasks']);
    })
  }
}
