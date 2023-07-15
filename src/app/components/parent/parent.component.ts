import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
