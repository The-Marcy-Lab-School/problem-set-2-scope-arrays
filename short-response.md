# Problem Set - Scope and Arrays

## Short Response Section

**Directions:**
Write your responses to the questions below directly in this document. When you commit and push your changes, you will be able to see your rendered markdown on GitHub.

### Scope

1. How do variables declared with `let`, `const`, and `var` differ? Be sure to touch on _scope_, _reassignment_, and _hoisting_ for each.

2. What will the following code log? Why?
    ```javascript
    let a = 'outer';

    function testScope() {
      let a = 'inner';
      console.log(a);
    }

    console.log(a);
    testScope();
    console.log(a);
    ```

3. What will the following code log? Why?
    ```javascript
    function hello() {
      let a = 'hello';
    }

    hello();
    console.log(a);
    ```

4. What does the following code log? Why?
    ```javascript
    console.log(a);

    var a = 1;
    ```

5. Why does this code throw an error? 
    ```javascript
    const isSunny = true;

    if (isSunny) {
      let advice = 'Wear your sunshades!';
    }

    console.log(advice);
    ```


6. So... why does this code work as intended?
    ```javascript
    const isRainy = true;

    if (isRainy) {
      var advice = 'Pack your umbrella.';
    }

    console.log(advice);
    ```
    
### Arrays

7. What does it mean for arrays to be _passed by reference_ in JavaScript? Be sure to include a code snippet to illustrate your response.


8. What does it mean to _destructure_ a JavaScript array? How do we use the _spread operator_ for destructuring. Be sure to include a code snippet to illustrate your response.


9. What is the purpose of _rest parameters_? How do we use them? Use a code snippet to illustrate your response. Lastly, explain how do they differ from the `arguments` object?

