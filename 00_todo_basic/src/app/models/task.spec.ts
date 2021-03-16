import Task from './task';

describe('Task model', ()=> {
  let task: Task;
  const id: number = 555;
  const name: string = "Do stuff";
  const priority: string = "High";
  const done: boolean = false;

  describe('Default values', () => {
    beforeEach(()=> {
        task = new Task();
    });

    it('can create a Task instance', () => {
        expect(task).toBeTruthy();
    });

    it('will have default values', () => {
        expect(task.name).toEqual("");
        expect(task.priority).toEqual("low");
        expect(task.done).toEqual(false);
    });
  });

  describe('All params', () => {
    beforeEach(()=> {
        task = new Task(name, priority, done, id);
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

  describe('Missing id', () => {
    beforeEach(()=> {
        task = new Task(name, priority, done);
    });

    it('can create a Task instance', () => {
        expect(task).toBeTruthy();
    });
  });
});
