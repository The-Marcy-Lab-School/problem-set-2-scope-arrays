# Problem Set - Scope and Arrays

## Instructions

For all the exercises below, you **may not** use any of the built-in [`Array.prototype` methods](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods). For example, you may not use the `Array.prototype.reverse()` method in your implementation of `reverseArray()`. Once you create an array method, you are encouraged to use it in the other functions you write! For example, you cannot use `Array.prototype.push()`, but you can use the `push()` method that you created in Question 2 for any of the other coding questions. 

### Tools you can/should use for the following coding questions are:
* `for` loops
* `if` statements
* [`Array.prototype.length`](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
* [`Array.isArray()`](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
* [Spread syntax](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Destructring assignment](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

**You should test and lint after every exercise** by running:
 * `npm test` to test. You will need to run `npm install` first to install dependencies.
 * `eslint problems/exercises.js` to lint. If you get an error `eslint: command not found`, run `npm install -g eslint` first.

## Exercises

1. Create a function named `shoutOut` that takes an array of items as an argument and logs all the items to the console.

2. **Recreate `Array.prototype.push`**: Write a function named `push` that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

    Ex:
    ```javascript
    const randoArray = [true, '41', 'steph'];
    push(randoArray, 'maya'); // 4
    randoArray; // [true, '41', 'steph', 'maya']
    ```

3. **Recreate `Array.prototype.pop`**: Write a function named `pop` that accepts one argument: an Array. The function should remove the last element from the array and return it.

    Ex:
    ```javascript
    const letters = ['a', 'b', 'c', 'd'];
    pop(letters); // 'd'
    letters; // ['a', 'b', 'c'];
    ```

4. **Recreate `Array.prototype.reverse`**: Create a function named `reverseArray` that accepts one argument: an Array. The function should return the contents of the array, but with the values in reversed order. This should be a _non-mutating_ function (the original array should not be changed).
    > **Note:** `Array.prototype.reverse` _is_ actually mutating but to make this particular problem easier, we will allow you to reverse a _copy_ of the array. As a challenge, try to reverse the array "in place."

5. **Recreate `Array.prototype.indexOf`**: Create a function called `indexOf` that accepts two arguments: an Array and a value to search for. It should find the first instance of a value in an array and return the index position of the value, or `-1` if the value is not in the array. 

    > **Hint:** _You can use the `break` keyword to exit the loop immediately when you find the first instance of the value. But this isn't the only way to solve the problem!_

    Ex:
    ```javascript
    const friends = ['carmen', 'anne', 'steph', 'mark'];
    indexOf(friends, 'carmen'); // 0
    indexOf(friends, 'steph'); // 2
    indexOf(friends, 'reuben'); // -1
    ```
6. **Recreate `Array.prototype.join`**: Create a function called `join` that takes two arguments, an array and a _separator_. This function should return a string with all the elements of the array coerced to strings and concatenated together, separated by the _separator_. If no separator is given, the default separator should be a comma (`,`). 

    > **Hint**: You will have to use a default argument.

    Ex:
    ```javascript
    join([true, "reuben", "maya", 21], "+"); // "true+reuben+maya+21"
    join(['peter', 'paul', 'cielo'], "💪🏽"); // "peter💪🏽paul💪🏽cielo"
    join(['javascript', 'html', 'css']); // "javascript,html,css"
    ```

7. **Recreate `Array.prototype.unshift`**: Write a function named `unshift` that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array.

    Ex:
    ```javascript
    const numbers = [0, 1, 2, 3, 4];
    unshift(numbers, -1); // 6
    numbers; // [-1, 0, 1, 2, 3, 4];
    ```

8. **Recreate `Array.prototype.shift`**: Write a function named `shift` that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

    Ex:
    ```javascript
    const friends = ['maya', 'reuben', 'juan pablo'];
    shift(friends); // 'maya'
    friends; // ['reuben', 'juan pablo']
    ```

9. **Recreate `Array.prototype.lastIndexOf`**: Write a function `lastIndexOf` that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or -1 if the value is not present.

    Ex:
    ```javascript
    const responses = ["good", "best", "bad", "good", "better"];
    lastIndexOf(responses, "good"); // 3
    ```

10. **Recreate `Array.prototype.slice`**: Write a function named `slice` that accepts three arguments: an Array, a start index, and an end index. The function should return a **new** Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index.
    **Note**: The second and third arguments are _optional_. If the third argument is missing, the function should return a copy from the starting index to the end of the array. If only an array argument is passed, it should return a copy of the array argument.


    Ex:
    ```javascript
    const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
    slice(languages, 2, 4); // ['javascript', 'java']
    slice(languages, 1); // ['ruby', 'javascript', 'java', 'c++']
    slice(languages); // ['python', 'ruby', 'javascript', 'java', 'c++']
    languages; // ['python', 'ruby', 'javascript', 'java', 'c++']
    ```
