import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import {HttpClientModule} from "@angular/common/http"
import { EditTaskComponent } from './view-tasks/edit-task/edit-task.component';
import { DeleteTaskComponent } from './view-tasks/delete-task/delete-task.component';

const routes: Routes = [
  {path: '', redirectTo:'/tasks', pathMatch:'full'},
  {path: 'tasks', component: ViewTasksComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'edit-task/:id', component: EditTaskComponent}, 
  {path: 'delete-task/:id', component: DeleteTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
