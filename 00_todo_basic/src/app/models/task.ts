export default class Task {
  constructor(
    public name: string,
    public priority: string,
    public done: boolean,
    public id?: number
  ) {  }

}
