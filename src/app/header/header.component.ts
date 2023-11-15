import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private todoService: TodoService) {}

  handleSearchQuery(searchQuery: string) {
    console.log(searchQuery)
    this.todoService.searchedText = searchQuery;
  }
}
