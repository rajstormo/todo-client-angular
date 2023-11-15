import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
})

export class DeleteTaskComponent {
  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.todoService.deleteTask(id).subscribe((data:any) => {
      if (!data.error)
        this.router.navigate(['tasks']);
    })
  }
}
