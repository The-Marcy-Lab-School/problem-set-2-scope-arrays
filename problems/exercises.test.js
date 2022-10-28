const exercises = require('./exercises');

// Question 1
test('Question 1: shoutout', () => {
  global.console = { log: jest.fn() };
  exercises.shoutout(['Ann', 1, true]);
  expect(global.console.log).toHaveBeenCalledWith('Ann');
  expect(global.console.log).toHaveBeenCalledWith(1);
  expect(global.console.log).toHaveBeenCalledWith(true);
});

// Question 2
test('Question 2: push', () => {
  const testArr = [true, '41', 'steph'];
  expect(exercises.push(testArr, 'maya')).toBe(4);
  expect(testArr).toEqual([true, '41', 'steph', 'maya']);
});

// Question 3
test('Question 3: pop', () => {
  const letters = ['a', 'b', 'c', 'd'];
  expect(exercises.pop(letters)).toBe('d');
  expect(letters).toEqual(['a', 'b', 'c']);
});

// Question 4
test('Question 4: reverseArray reverses array', () => {
  const testArr = [1, 2, 3, 4];
  expect(exercises.reverseArray(testArr)).toEqual([4, 3, 2, 1]);
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
});

// Question 6
test('Question 6: join', () => {
  expect(exercises.join([true, 'reuben', 'maya', 21], '+')).toBe('true+reuben+maya+21');
  expect(exercises.join(['javascript', 'html', 'css'])).toBe('javascript,html,css');
});

// Question 7
test('Question 7: unshift', () => {
  const numbers = [0, 1, 2, 3, 4];
  expect(exercises.unshift(numbers, -1)).toBe(6);
  expect(numbers).toEqual([-1, 0, 1, 2, 3, 4]);
});


// Question 8
test('Question 8: shift', () => {
  const friends = ['maya', 'reuben', 'juan pablo'];
  expect(exercises.shift(friends)).toBe('maya');
  expect(friends).toEqual(['reuben', 'juan pablo']);
});

// Question 9
test('Question 9: lastIndexOf', () => {
  const responses = ["good", "best", "bad", "good", "better"];
  expect(exercises.lastIndexOf(responses, "good")).toBe(3);
  expect(exercises.lastIndexOf(responses, "outstanding!")).toBe(-1);
});

// Question 10
test('Question 10: slice', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  expect(exercises.slice(languages, 2, 4)).toEqual(['javascript', 'java']);
  expect(exercises.slice(languages, 1)).toEqual(['ruby', 'javascript', 'java', 'c++']);
  expect(exercises.slice(languages)).toEqual(['python', 'ruby', 'javascript', 'java', 'c++']);
});

// Question 10
test('Question 10: expect slice not to mutate original array', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  exercises.slice(languages, 1);
  expect(languages).toEqual(['python', 'ruby', 'javascript', 'java', 'c++']);
});
