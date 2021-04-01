import { Component } from "@angular/core";
import * as Socket from "socket.io-client";

interface Task {
  name: string;
  id: string;
  work: string;
  isCompleted: boolean;
}

@Component({
  selector: "list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  inputValue: string = "";
  list: Array<Task> = [
    { name: "chanu", id: "123", work: "to complete UI", isCompleted: true },
    {
      name: "hani",
      id: "124",
      work: "to complete Back end",
      isCompleted: false
    },
    {
      name: "harsha",
      id: "124",
      work: "to complete profile page",
      isCompleted: false
    }
  ];

  handleClick() {
    if (this.inputValue.trim() !== "") {
      this.add(this.inputValue);
      this.inputValue = "";
    }
  }

  handleKeyDown($event: KeyboardEvent): void {
    if ($event.keyCode === 13) {
      this.handleAdd();
    }
  }

  private add(name: string): void {
    this.list.push({
      name: name,
      id: id,
      work: work,
      isCompleted: false
    });
  }

  remove(i: number): void {
    this.list.splice(i, 1);
  }
}
