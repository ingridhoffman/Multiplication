# Multiiplication Flashcards

When I told my kids that I was going back to school to learn web and software development, my son got very excited that I would soon be able to build video games for him. So I created this application for him to practice his multiplication facts. Yes, his response was somewhat underwhelming.

## Development Notes

The goal of this application is to help my son practice his multiplication in a similar format to how he is tested on it in school. Tests at school are timed and the goal is to complete as many questions accurately as possible before time is up. Typically tests are on single number mulitplier with occasional tests on numbers practiced to date.

### Goals

1. Provide choice of practicing a single number multiplier or all numbers up to a certain maximum.
2. Numbers should be provided randomly and single number multipliers should appear in both positions of the equation.
3. Feedback should be given for correct and incorrect answers and correct equations should be shown if a question is answered incorrectly.
4. Encouragement should be provided to keep practicing.
5. Interface should be simple, clean, and easy to use.

### Script Logic

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

### Application URL
https://ingridhoffman.github.io/Multiplication-Flashcards/
