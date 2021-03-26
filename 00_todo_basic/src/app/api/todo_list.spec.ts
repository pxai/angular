import TodoList from './todo_list';
import Task from '../models/task';

describe('TodoList', () => {
    let todoList: TodoList;
    const initial: Task[] = [];
    const task1: Task = new Task('Test the app', 'High', false, 1);
    const task2: Task = new Task('Finish the app', 'Low', false, 2);

    beforeEach(()=> {
      todoList = new TodoList();
    });

    it('should create', () => {
        expect(todoList).toBeTruthy();
    });

    it('should return 0 elements', () => {
        expect(todoList.tasks.length).toEqual(0);
    });

    it('should add elements', () => {
        todoList.add(task1);

        expect(todoList.tasks).toEqual([...initial, task1]);

        todoList.add(task2);

        expect(todoList.tasks).toEqual([...initial, task1, task2]);
    });

    it('should add elements with id if it is missing', () => {
        const task3: Task = new Task('Make it work', 'Low', false);
        expect(todoList.tasks).toEqual(initial);

        todoList.add(task3);

        expect(todoList.tasks).toEqual([...initial, task3]);

        expect(task3.id).toBeTruthy();
    });

    describe('task', ()=> {
      it('should return specific element', () => {
          todoList.add(task1);
          todoList.add(task2);

          expect(todoList.task(2)).toEqual(task2);
      });

      it('should return undefined if id not found', () => {
          todoList.add(task1);
          todoList.add(task2);

          expect(todoList.task(3)).toEqual(undefined);
      });
    });

    describe('remove', ()=> {
      it('should remove elements', () => {
          todoList.add(task1);
          todoList.add(task2);

          expect(todoList.tasks).toEqual([task1, task2]);

          todoList.remove(1);

          expect(todoList.tasks).toEqual([task2]);
      });

      it('should not remove elements with unexistent ids', () => {
          todoList.add(task1);
          todoList.add(task2);

          expect(todoList.tasks).toEqual([task1, task2]);

          todoList.remove(10);

          expect(todoList.tasks).toEqual([task1, task2]);
      });
    });

    describe('update', ()=> {
      it('should update element', () => {
          todoList.add(task1);
          todoList.add(task2);
          expect(todoList.tasks.length).toEqual(2);

          const task3: Task = new Task('Call mom', 'High', false, 2);

          todoList.update(1, task3);

          expect(todoList.tasks).toEqual([task1, task3]);
          expect(todoList.tasks.length).toEqual(2);
      });

      it('should not remove elements with wrong index', () => {
          todoList.add(task1);
          todoList.add(task2);
          expect(todoList.tasks.length).toEqual(2);

          const task3: Task = new Task('Call mom', 'High', false, 3);

          todoList.update(10, task3);

          expect(todoList.tasks).toEqual([task1, task2]);

          todoList.update(-1, task3);

          expect(todoList.tasks).toEqual([task1, task2]);
      });
    });
});
