# Multiplication Flashcards

When I told my kids that I was going back to school to learn web and software development, my son got very excited that I would soon be able to build video games for him. So, I created this application for him to practice his multiplication facts.... Yes, his response was somewhat underwhelming.

<img src="https://github.com/ingridhoffman/Multiplication-Flashcards/blob/master/Assets/ingridhoffman.github.io_Multiplication-Flashcards_.png" width=90% />

### About

The goal of this application is to help my son (and now my nephews and nieces as well) practice multiplication in a similar format to how it is tested on in school. Tests at school are timed and the goal is to complete as many questions accurately as possible before time is up. Typically tests are on single number mulitplier with occasional tests on numbers practiced to date.

### Goals

1. Provide choice of practicing a single number multiplier or all numbers up to a certain maximum.
2. Numbers should be provided randomly and single number multipliers should appear in both positions of the equation.
3. Feedback should be given for correct and incorrect answers and correct equations should be shown if a question is answered incorrectly.
4. Encouragement should be provided to keep practicing.
5. Interface should be simple, clean, and easy to use.

# Application

### Usage

This is a web based application that has been tested to run in Chrome. It can be run on mobile devices but is not optimized for the mobile environment because it requires keyboard input. Future development would include mobile features such as button inputs and interactions.

### Demonstration

https://ingridhoffman.github.io/Multiplication-Flashcards/

# Build Logic

```
-> Define global variables to be held and used for multiple functions
EVENT: Click start button
Inititate Quiz
-> Set quiz parameters
-> Set score to zero
-> Set timer to 60 seconds
-> Set timer to active
Start Quiz
-> Show timer and start count down
-> LOOP
|	-> Ask question
|	EVENT: User answers question
|	-> Get user answer
|	-> Check if correct
|	-> Show feedback (pause timer during feedback)
|	-> Update score
EVENT: Time runs out
-> Clear timer
-> Show final score
-> Show feedback
-> Try again?
-> New quiz?
IF EVENT: Click try again button
-> Go back to Initiate with same quiz parameters
IF EVENT: Click new quiz button
-> Reload page to start over
```

# License
MIT © Ingrid Hoffman
