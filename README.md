# Alisters Work Day Scheduler

## Description

To begin this project I was given starter code that uses the Day.js library to work with date and time. 
The project is to use the starter code to build a simple Daily Work Schedule calendar application that allows a user to save events for each hour of the day. 
The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Built Using

1. HTML
2. CSS
3. JavaScript
3. jQuery
4. Day.js

## Live Deployment

Link to my live project site: https://porteous89.github.io/alisters-workday-scheduler/

## Usage

#### Link to video of Work Day Scheduler Working
https://drive.google.com/file/d/1qRlM3R4jB9aLqoc9dKmbKf2PhEL6XION/view

#### screenshot of working project
<img src="Assets\full-screenshot.png" width= 45% >

#### Console displaying no errors while running Work Day Scheduler
<img src="Assets\console-no-errors.png" width= 45% >



## Credits

#### Day.js 
(https://day.js.org/en/)

#### Project Starter Code
(https://github.com/coding-boot-camp/crispy-octo-meme)

#### Eloquent JavaScript
(https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf)


## License

MIT License - License in Repo

---

## Features

1. Time blocks are set for Business Hours - 9-5.
2. Time blocks are color coded depending on whether the time of day is current, past or future.
3. User can input events in the text area for each hour of the scheduler.
4. User can click save button to save events to local storage.
5. User gets notified with a "file saved" message so they know the save was successful.


## Tests

Test Functionality of each link:

1. Color of time blocks will match time of day. At 12pm all previous time blocks are grey, the 12pm (current) time block is red and all future time blocks are green.
2. When a user enters text and clicks save button, their event will stay in local storage and still appear after page has been refreshed.
3. User gets notified of successful save with "File Saved!" message which disappears after 1 second.
