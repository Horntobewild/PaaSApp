import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>){
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  

  todos = [
    {
      name: 'Laundry',
      category: 'Household'
    },
    {
      name: 'Kitchen',
      category: 'Household'
    },
    {
      name: 'Application X',
      category: 'Career'}
  ];

  completed = [
    {
      name: 'Lawn',
      category: 'Household'
    },
    {
      name: 'Bathroom',
      category: 'Household'
    }
  ];


}
