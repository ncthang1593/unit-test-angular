import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  count = 0;
  obj = {
    name: 'thang',
  };

  constructor() {}

  ngOnInit(): void {
    this.changeName(this.obj);
  }

  changeName(obj: any): void {
    const newObj = structuredClone(obj);
    newObj.name = 'hello';

    return newObj;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
