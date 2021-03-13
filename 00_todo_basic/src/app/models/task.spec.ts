import Task from './task';

describe('Task model', ()=> {
  let task: Task;
  const id: number = 555;
  const name: string = "Do stuff";
  const priority: string = "High";
  const done: boolean = false;

  beforeEach(()=> {
      task = new Task(id, name, priority, done);
  });

  it('can create a Task instance', () => {
      expect(task).toBeTruthy();
  });

  it('sets id field', () => {
      expect(task.id).toEqual(id);
  });

  it('sets name field', () => {
      expect(task.name).toEqual(name);
  });

  it('sets priority field', () => {
      expect(task.priority).toEqual(priority);
  });

  it('sets done field', () => {
      expect(task.done).toEqual(done);
  });
});
