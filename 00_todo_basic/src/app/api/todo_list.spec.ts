import TodoList from './todo_list';
import Task from '../models/task';

describe('TodoList', () => {
    let todoList: TodoList;
    const initial: any[] = [];
    const task1: Task = new Task(1, "Test the app", "High", false);
    const task2: Task = new Task(2, "Finish the app", "Low", false);

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
        expect(todoList.tasks).toEqual(initial);

        todoList.add(task1);

        expect(todoList.tasks).toEqual([...initial, task1]);

        todoList.add(task2);

        expect(todoList.tasks).toEqual([...initial, task1, task2]);
    });

    describe("remove", ()=> {
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

    describe("update", ()=> {
      it('should update element', () => {
          todoList.add(task1);
          todoList.add(task2);
          expect(todoList.tasks.length).toEqual(2);

          const task3: Task = new Task(3, "Call mom", "High", false);

          todoList.update(1, task3);

          expect(todoList.tasks).toEqual([task1, task3]);
          expect(todoList.tasks.length).toEqual(2);
      });

      it('should not remove elements with wrong index', () => {
          todoList.add(task1);
          todoList.add(task2);
          expect(todoList.tasks.length).toEqual(2);

          const task3: Task = new Task(3, "Call mom", "High", false);

          todoList.update(10, task3);

          expect(todoList.tasks).toEqual([task1, task2]);

          todoList.update(-1, task3);

          expect(todoList.tasks).toEqual([task1, task2]);
      });
    });
});
