# JavaScript: Password Generator

I created an application that generates a random password based on user-selected criteria.

The app runs in the browser and features dynamically updated HTML and CSS powered by Javascript.

#
## What I Included:
```
- If I click the "generate" button to generate a password
-> Then I am presented with a series of prompts for password criteria

- If prompted for the length
-> Then I choose a length of at least 8 characters and no more than 128 characters

- If prompted for character types
-> Then I can choose lowercase, uppercase, numeric, and/or special characters

- If all prompts are anwered and at least one character type is selected
-> Then a password is generated and displayed

- If I click the "copy" button
-> Then the password generated is copied to the clipboard

```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-hw-demo.png)

#
## How it generates a password:
There is a nested array that holds character-type arrays (ex. numeric = [0,1,2,..]) based on what the user wants in the password.

In generateRandomType(), I randomly generate a number that represents one of these valid arrays. Then in generateRandomChar(), I randomly generate a number for the index of that type. 

This is done for each letter generated in the password such that all options the user requested are available but not necessaily guaranteed.

```
// Generates the type of digit - "lowerCase"
function generateRandomType() {
  // Generate a number between 0 and validChar length
  return Math.floor(Math.random() * validChar.length);
}


// Generates the char in type array - "k"
function generateRandomChar(typeIdx) {
  // Generate a number between 0 and typeIdx array length
  return Math.floor(Math.random() * validChar[typeIdx].length);
}
```


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - adds dynamic features
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

### Author links
[LinkedIn](https://www.linkedin.com/in/nadine-bundschuh-731233b9)
|
[GitHub](https://github.com/nadineb1160)

### Author Names
- Nadine Bundschuh