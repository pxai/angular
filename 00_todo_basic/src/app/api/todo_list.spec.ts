import TodoList from './todo_list';

describe('TodoList', () => {
    let todoList: TodoList;
    const initial: any[] = ["Learn Angular", "Finish this app"];

    beforeEach(()=> {
      todoList = new TodoList();
    });

    it('should create', () => {
        expect(todoList).toBeTruthy();
    });

    it('should return 2 elements', () => {
        expect(todoList.tasks).toEqual(initial);
    });

    it('should add elements', () => {
        const task: string = "Test the app";

        expect(todoList.tasks).toEqual(initial);

        todoList.add(task);

        expect(todoList.tasks).toEqual([...initial, task]);
    });

    describe("remove", ()=> {
      it('should remove elements', () => {
          expect(todoList.tasks).toEqual(initial);

          todoList.remove(1);

          expect(todoList.tasks).toEqual(["Learn Angular"]);
      });

      it('should not remove elements with wrong index', () => {
          expect(todoList.tasks).toEqual(initial);

          todoList.remove(10);

          expect(todoList.tasks).toEqual(initial);

          todoList.remove(-1);

          expect(todoList.tasks).toEqual(initial);
      });
    });

    describe("update", ()=> {
      it('should update element', () => {
          expect(todoList.tasks).toEqual(initial);
          expect(todoList.tasks.length).toEqual(2);

          todoList.update(1, "It works");

          expect(todoList.tasks[1]).toEqual("It works");
          expect(todoList.tasks.length).toEqual(2);
      });

      it('should not remove elements with wrong index', () => {
          expect(todoList.tasks).toEqual(initial);

          todoList.update(10, "It works?");

          expect(todoList.tasks).toEqual(initial);

          todoList.update(-1, "It works?");

          expect(todoList.tasks).toEqual(initial);
      });
    });
});
