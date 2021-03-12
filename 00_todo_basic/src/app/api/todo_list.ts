export default class TodoList {
    private _tasks: any[] = [];

    constructor () {
      this._tasks = ["Learn Angular", "Finish this app"];
    }

    get tasks(): any[] {
      return this._tasks;
    }

    add(task: string) {
      this._tasks.push(task);
    }

    remove(index: number) {
      if (index >= 0 && index < this._tasks.length) {
        this._tasks.splice(index, 1);
      }
    }

    update(index: number, task) {
      if (index >= 0 && index < this._tasks.length) {
        this._tasks[index] = task;
      }
    }
}
