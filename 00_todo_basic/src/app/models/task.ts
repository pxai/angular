export default class Task {
  constructor(
    public name: string = "",
    public priority: string = "low",
    public done: boolean = false,
    public id?: number
  ) {  }

}
