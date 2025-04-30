export default class Task {
    id;
    name;
    completed = false;
  
    constructor(id, name, completed = false) {
      this.id = id;
      this.name = name;
      this.completed = completed;
    }
  
    taskcompleted() {
      this.completed = true;
    }
  
    taskIncompleted() {
      this.completed = false;
    }
  }
  