# Problem Solving Skills

 ### The Process Involved.

- Understand the problem
- Explore concrete Examples
- Break it Down
- Solve/ Simplify
- Look Back and refactor the code

Before you start typing, There are very many deliberate questions you can ask that will help you to solve the problem.

 ### Understand the Problem

 How do you test the understanding of the question.

 1. Can I restate the problem in my own words?
 2. What are the inputs that go into the problem?
 3. What are the output that should come from the solution to the problem?
 4. Can the outputs be determined from the inputs? In other words , do I have enough information to solve the problem? (you may not be able to answer this question until you set about solving the problem. That's okay its still worth considering the question at this early stage.)
 5. How should I label the important piece of data that are a part of problem?.

### A very simple example

> Write a function which takes two numbers and returns their sum.


### 1. Can I restate the problem in my own words?

Write a function that adds two numbers or "implement addition"


### 2. What are the inputs that go into the problem?

Are we taking about **integer** , **floating points numbers**. What are the data types?
Is the function always going to add two numbers. What if the users want to add more numbers.

There are distinction between the inputs.


### 3. what are the outputs from the problem ?

Are we taking about **integers** , **floating points numbers**. What are the data types?


### 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem.?

What happens when the users gives only one problem?

### Explore Examples

Coming up with examples can help you understand the problem better.
Examples also provides sanity checks that your eventual solution works how it should.

   User Stories are examples.
   Unit tests.

- Start with simple Examples
- Progress to more Complex Examples.
- Explore Examples with Empty Inputs.
- Explore Example with invalid inputs.

**Example**

> Write a function which takes in a string and returns counts of each character in the string.

```javascript
charCount("aaa")       ///  {a:3}
charCount("hello")     //   {h: 1, e: 1, l:2, o:1}

// complex examples
"my phones number is 232323"
"Hello hi"
charCount("")  // {}  edge cases
```

Possible questions?
1. Are the input always lowercase or Uppercase.
2. Should be consider spaces, brackets

### Break It Down

Take the actual step of the problem and write them down. You can get some hint. Explicitly write out the step you need to take.

This forces you to think about the code you'll write before you write it and help you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details. Language syntax as well.

### Example

```javascript
function charCount() {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string
}

function charCount(){
    // make object to return at end
    // loop over string, for each character
        // if the char is number/letter AND a key in object, add one to count
        // if the char is number/Letter AND not a key in the object, add it and set value to 1
        // if character is something else (space, period, etc) don't do anthing
        
    // return object at end
}
```

### Solve the Problem. If you can't. Solve A simpler Problem.

- Find the core difficulty in what you're trying to do.
- Temporarily ignore that difficulty.
- Write a simplified solution
- Then incorporate that difficulty back in.

```javascript
// You may be comforble with uppercase or lowercase
// you may not rember the exact way to check for alphanumerics.
```

I don't remember the exact way to check for alphanumerics, I will ignore that part and I come back later to deal with it. If I had my computer I could just bing that first.

```javascript
function charCount(str){
    // make object to return at end
    var result = {}
    // loop over string, for each character
    for(var i =0; i < str.length; i++){
        var char = str[i].toLowerCase()
        // if the char is number/letter AND a key in object, add one to count
        if(/a-z0-9/.test(char)){
        if(result[char] > 0){
            result[char]++
        } else {
            result[char] = 1;
        }
        }
    }
        // if the char is number/Letter AND not a key in the object, add it and set value to 1
        // if character is something else (space, period, etc) don't do anthing
    // return object at end
    return result;
}
```

### Look Back & Refactoring question

- Can you check the result?
- Can you derive the result differently?
- Can you use the result or method for some other problem?
- can you improve the performance of your solution?
- Can you think of other ways to Re factor?
- How have other people solved the problem?

At least you acknowledge your solution is not neat and you would want to re factor the code to be more neat. 
Also ask them for other ways of solving the problem. You can learn a lot by seeing how others have solved.


```javascript
function charCount(str){
    // make object to return at end
    var result = {}
    // loop over string, for each character
    for(var char of str){
        char = char.toLowerCase()
        // if the char is number/letter AND a key in object, add one to count
        if(/a-z0-9/.test(char)){
           result[char] = ++result[char] || 1
       }
    }
        // if the char is number/Letter AND not a key in the object, add it and set value to 1
        // if character is something else (space, period, etc) don't do anthing
    // return object at end
    return result;
}
```

Checking if the char is an alphanumerics with a regular expression. In my opinion may not be the most efficient solution to check if a character is number or a letter. I have heard that the performance varies depending on what you are doing , the browser you are in. I read that chrome had issues with regular expression.

From something I read on ASCII character. The character are usually in a range of characters and with that we can use mathematical comparison to check if its a valid character.

```javascript
// a- 97 z-122
function isAphanumeric(char){
  code = char.charCodeAt()
  if( 
      !(code >= 97 && code <= 122 ) &&  // numeric
      !(code >= 65 && code <= 90)  &&  // uppercase alph
      !(code >= 47 && code <= 58)){  // numerics
      return false
  }
  return true
}
```















