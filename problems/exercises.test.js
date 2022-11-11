const exercises = require('./exercises');

// Question 1
test('Question 1: shoutout', () => {
  global.console = { log: jest.fn() };
  exercises.shoutout(['Ann', 1, true]);
  expect(global.console.log).toHaveBeenCalledWith('Ann');
  expect(global.console.log).toHaveBeenCalledWith(1);
  expect(global.console.log).toHaveBeenCalledWith(true);

  exercises.shoutout(['a', 'b', 'c']);
  expect(global.console.log).toHaveBeenCalledWith('a');
  expect(global.console.log).toHaveBeenCalledWith('b');
  expect(global.console.log).toHaveBeenCalledWith('c');
});

// Question 2
test('Question 2: push', () => {
  let newLength;
  const testArr = [true, '41', 'steph'];
  newLength = exercises.push(testArr, 'maya');
  expect(newLength).toBe(4);
  expect(testArr).toEqual([true, '41', 'steph', 'maya']);

  const testArr2 = [10, 20, 30, 40];
  newLength = exercises.push(testArr2, 50);
  expect(newLength).toBe(5);
  expect(testArr).toEqual([10, 20, 30, 40, 50]);
});

// Question 3
test('Question 3: pop', () => {
  let removed;

  const letters = ['a', 'b', 'c', 'd'];
  removed = exercises.pop(letters);
  expect(removed).toBe('d');
  expect(letters).toEqual(['a', 'b', 'c']);

  const numbers = [1,2,3,4,5];
  removed = exercises.pop(numbers);
  expect(removed).toBe(5);
  expect(numbers).toEqual([1,2,3,4]);
});

// Question 4
test('Question 4: reverseArray reverses array', () => {
  const testArr = [1, 2, 3, 4];
  let reversed = exercises.reverseArray(testArr);
  expect(reversed).toEqual([4, 3, 2, 1]);

  const testArr2 = ['a', 'b', 'c'];
  reversed = exercises.reverseArray(testArr2);
  expect(reversed).toEqual(['c', 'b', 'a']);
});

// Question 4
test('Question 4: reverseArray leaves original array unchanged', () => {
  const testArr = [1, 2, 3, 4];
  exercises.reverseArray(testArr);
  expect(testArr).toEqual([1, 2, 3, 4]);
});

// Question 5
test(`Question 5: indexOf`, () => {
  const friends = ['carmen', 'anne', 'steph', 'mark'];
  expect(exercises.indexOf(friends, 'carmen')).toBe(0);
  expect(exercises.indexOf(friends, 'steph')).toBe(2);
  expect(exercises.indexOf(friends, 'reuben')).toBe(-1);

  const fruit = ['apple', 'banana', 'cherry', 'date'];
  expect(exercises.indexOf(fruit, 'apple')).toBe(0);
  expect(exercises.indexOf(fruit, 'date')).toBe(3);
  expect(exercises.indexOf(fruit, 'maya')).toBe(-1);
});

// Question 6
test('Question 6: join', () => {
  const testArr = [true, 'reuben', 'maya', 21];
  let joined = exercises.join(testArr, '+');
  expect(joined).toBe('true+reuben+maya+21');

  const testArr2 = ['javascript', 'html', 'css']
  joined = exercises.join(testArr2);
  expect(joined).toBe('javascript,html,css');
});

// Question 7
test('Question 7: unshift', () => {
  const numbers = [0, 1, 2, 3, 4];
  let newLength = exercises.unshift(numbers, -1);
  expect(newLength).toBe(6);
  expect(numbers).toEqual([-1, 0, 1, 2, 3, 4]);

  const fruit = ['banana', 'cherry', 'date']
  newLength = exercises.unshift(fruit, 'apple');
  expect(newLength).toBe(4);
  expect(fruit).toEqual(['apple', 'banana', 'cherry', 'date']);
});


// Question 8
test('Question 8: shift', () => {
  const friends = ['maya', 'reuben', 'juan pablo'];
  let removed = exercises.shift(friends);
  expect(removed).toBe('maya');
  expect(friends).toEqual(['reuben', 'juan pablo']);

  const fruit = ['apple', 'banana', 'cherry', 'date'];
  removed = exercises.shift(fruit);
  expect(removed).toBe('apple');
  expect(fruit).toEqual(['banana', 'cherry', 'date']);
});

// Question 9
test('Question 9: lastIndexOf', () => {
  const responses = ["good", "best", "bad", "good", "better"];
  expect(exercises.lastIndexOf(responses, "good")).toBe(3);
  expect(exercises.lastIndexOf(responses, "outstanding!")).toBe(-1);

  const nums = [1,2,3,2,3,2,3,1];
  expect(exercises.lastIndexOf(nums, 2)).toBe(5);
  expect(exercises.lastIndexOf(nums, "outstanding!")).toBe(-1);
});

// Question 10
test('Question 10: slice', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  expect(exercises.slice(languages, 2, 4)).toEqual(['javascript', 'java']);
  expect(exercises.slice(languages, 1)).toEqual(['ruby', 'javascript', 'java', 'c++']);
  expect(exercises.slice(languages)).toEqual(['python', 'ruby', 'javascript', 'java', 'c++']);

  const fruit = ['apple', 'banana', 'cherry', 'date'];
  expect(exercises.slice(fruit, 1, 3)).toEqual(['banana', 'cherry']);
  expect(exercises.slice(fruit, 2)).toEqual(['cherry', 'date']);
  expect(exercises.slice(fruit)).toEqual(['apple', 'banana', 'cherry', 'date']);
});

// Question 10
test('Question 10: expect slice not to mutate original array', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  exercises.slice(languages, 1);
  expect(languages).toEqual(['python', 'ruby', 'javascript', 'java', 'c++']);
});
