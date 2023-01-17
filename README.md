# La-Capsule-Fullstack-Bootcamp
Solutions of the exercises passed during the Webdev fullstack training in La Capsule

10-Jan-2023 -----> EVENTS
1. Capture an evenet:
There are five bullets on the web page listing ingredients of a recepts (created with 'li' elements).
The task is to add an event listener on the element with id = 2 and change its text on mouse click.


2. Change the text of a particular element when mouse hovered over it.
Same list from exercise 1.
The task is to add an event listener to all of them that listens for 'mouseover' event and
converts the text into "DONE" when mouse if hovered over a bullet.

3. My mail
This task is based on simple mail site created during html/css training day. Now, we must add 
functionalities:
a) Create a new message by adding text in the field 'New message' and pressing the 'Add' button
b) Suppress an existing message by pressing the 'cross' button at the right side of the message
c) Filter the messages by author's name - introduce the name of the authori in the 'Search message' field and press the 'Search' button.

![My Mails](./_ScreenShots/MyMail.jpg)

4. Identical or not:
An array contains elements which, themselves, are arrays of different types.
A function must be created that will receive this array as parameter and for each array element inside that array 
must check if the elements inside are identical or not. If identical - value 'true' must be added to an output array,
if not identical - value 'false' must be added. The expected result is provided in the condition of the task.

console.log(checkDifferences([
    [true, true, true, true],
    ['test', 'test', 'test'],
    [1, 1, 1, 2],
    ['10', 10, 10, 10]
]));
**// Expected: true,true,false,false**

=========================================================================================================
17-Jan-2023 -----> EXPRESS FRAMEWORK   
=========================================================================================================
1. Orient Express
The challenge is to create webservice in javascript. An array containing trip objects is pre-defined.
I have to define routes to retrieve and manage the data in this array:
POST /trips : add a new trip
GET /trips : retrieve all the trips
GET /lastTrip : retrieve the last trip in the array
DELETE /trips : delete all the trips

2. Weather App - Part 1
The task is to create a webservice that manages weather data. The data are presented in an array of objects with fields about
the location, the temperatures, weather description.
It should support GET for all locations and per location, POST data for new location, DELETE location data,
with verification if location query is valid or not.

3. Score Calculator
The correct answers of a test are stored in array 'res' and the aswers given by
a candidate passing the test are stored in array 'ans'. An algorythm must compare the
provided answers with the correct ones, calculate the score and determine whether
test was successfully past.

4. Express Middleware
The app.js contains an array with two possible API keys. The task is to create
a middleware in app.js file that verifies the key provided in the headers and
either confirm or deny access. The result must be as indicated in the pic.

![API Key Validation](./_ScreenShots/API_Key.jpg)