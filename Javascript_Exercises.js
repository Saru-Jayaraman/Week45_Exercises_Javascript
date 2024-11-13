/*
Write a JavaScript program to display the current day and time in the following format. 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
function dateFormat() {
    let today = new Date();
    let formattedDate1 = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
    let formattedDate2 = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
    let formattedDate3 = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    console.log("mm-dd-yyyy:",formattedDate1);
    console.log("mm/dd/yyyy:",formattedDate2);
    console.log("dd-mm-yyyy:",formattedDate3);
    console.log("dd/mm/yyyy:",today.toLocaleDateString());
}
dateFormat();

/*
Write a JavaScript program to determine whether a given year is a leap year.
*/
function leapYear(yr) {
    if(yr % 4 === 0)
        console.log(yr,": Leap year...");
    else
        console.log(yr,": Not Leap year...");
}
leapYear(2000);
leapYear(2001);

/*
Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/
function newYearIsSunday(startYear, EndYear) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(let i = startYear; i <= EndYear; i++) {
        let date = new Date();
        date.setFullYear(i, 0, 1);
        let weekDay = date.getDay();
        if(weekDays[weekDay] === "Sunday")
            console.log(date.getFullYear());
    }
}
newYearIsSunday(2014, 2050);

/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
*/
function multiplyDivide(event) {
    let first = document.getElementById("firstNumber").value;
    let second = document.getElementById("secondNumber").value;
    let spanElement = document.getElementById("resultSpan");
    if(event.srcElement.id === "multiply-btn")
        spanElement.innerText = first*second;
    if(event.srcElement.id === "divide-btn")
        spanElement.innerText = first/second;
}

/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C
*/
function convertToCelsius(fareheit) {
    const celsius = ((fareheit-32)*5)/9;
    console.log(fareheit,"\u2109"," is",celsius,"\u2103.");
}
function convertToFareheit(celsius) {
    const fareheit = ((celsius*9)/5)+32;
    console.log(celsius,"\u2103"," is",fareheit,"\u2109.");
}
convertToCelsius(45);
convertToFareheit(60);

//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeCharacter(beforeModifying, index) {
    let afterModifying = beforeModifying.slice(0, index).concat(beforeModifying.slice(index+1));
    return afterModifying;
}
let beforeModifying = "Helllo Java!";
let removeAt = 2;
let afterModifying = removeCharacter(beforeModifying, 2);
console.log("After removing character at the index",removeAt,"in the string",beforeModifying,":",afterModifying);

//Write a JavaScript program to reverse a given string.
function stringReverse(string) {
    let reversedString = "";
    for(let i=string.length-1; i>=0; i--) {
        reversedString = reversedString + string[i];
    }
    console.log("Reversed string of",string,":",reversedString);
}
stringReverse("qwerty");

// Write a function that calculates the sum of all elements in an array.
function sumOfArray(originalArray) {
    let result = 0;
    originalArray.forEach(each => {
        result += each;
    });
    return result;
}
let originalArray = [100,200,300,20,40,10];
const sum = sumOfArray(originalArray);
console.log("Sum of the array",originalArray,":",sum);

// Write a function that finds the largest element in an array.
function largestElementInArray(originalArray) {
    let largestElement = 0;
    for(let i in originalArray) {
        if(originalArray[i] > largestElement)
            largestElement = originalArray[i];
    }
    return largestElement;
}
const largest = largestElementInArray(originalArray);
console.log("Largest element of the array",originalArray,":",largest);

// Write a function that filters out even numbers from an array.
function evenNumbersArray(originalArray) {
    const evenNumbersArray = originalArray.filter((each) => each % 2 === 0);
    return evenNumbersArray;
}
const evenArray = evenNumbersArray(originalArray);
console.log("Even numbers of the array",originalArray,":",evenArray);

// Use the map function to square each element of an array.
function squaredNumbersArray(originalArray) {
    const evenNumbersArray = originalArray.map((each) => each * each);
    return evenNumbersArray;
}
const squaredArray = squaredNumbersArray(originalArray);
console.log("Squared numbers of the array",originalArray,":",squaredArray);

// Create an object representing a person with properties like name, age, and address.
function personObjectCreation(name, age) {
    const person = {
        name: name,
        age: age
    }
    return person;
}
const personObject = personObjectCreation("Test", 20);
console.log(personObject);

// Write a function that takes an object and a property name and returns the value of that property.
function returnByPropertyName(person, propertyName) {
    return person[propertyName];
}
let propertyName1 = "age";
const propertyValue1 = returnByPropertyName(personObject, propertyName1);
console.log(propertyName1,":",propertyValue1);
let propertyName2 = "name";
const propertyValue2 = returnByPropertyName(personObject, propertyName2);
console.log(propertyName2,":",propertyValue2);

// Write a function that adds a new property to an object and another function that deletes a property.
function addProperty(person, propertyName, propertyValue) {
    person[propertyName] = propertyValue;
    return person;
}
function removeProperty(person, propertyName) {
    delete person[propertyName];
    return person;
}
let propertyName3 = "email";
let propertyValue3 = "test@gmail.com";
const objectWithNewProperty = addProperty(personObject, propertyName3, propertyValue3);
console.log("After adding",propertyName3,":",objectWithNewProperty);

let propertyName4 = "age";
const objectWithDeletedProperty = removeProperty(personObject, propertyName4);
console.log("After removing",propertyName4,":",objectWithDeletedProperty);

// Create an object with nested objects representing different levels of information (e.g., a person with an address object).
function personNestedObjectCreation(name, age, city, country) {
    const person = {
        name: name,
        age: age,
        address: {
            city: city,
            country: country
        }
    }
    return person;
}
const personNestedObject = personNestedObjectCreation("Test", 20, "Almhult", "Sweden");
console.log(personNestedObject);

// Write a function that filters an object based on a condition.
function filterObjectByCondition(person, findValues) {
    console.log(person);
    let filteredObject = Object.keys(person).reduce((result, key) => {
        if(findValues.includes(person[key]))
            result[key] = person[key];
        return result;
    }, {});
    return filteredObject;
}
let findValues = ["Test", 20];
const newPerson = filterObjectByCondition(objectWithNewProperty, findValues);
console.log(newPerson);

// Write a function that merges two objects, combining their properties.
function mergeObjects(student, course) {
    let studentEnrolledInCourse = {};
    for(let property in student) {
        studentEnrolledInCourse[property] = student[property];
    }
    for(let property in course) {
        studentEnrolledInCourse[property] = course[property];
    }
    // Object.assign(student, course) --> Merges two objects
    return studentEnrolledInCourse;
}
let student = {
    name: "Student1",
    age: 18,
    nationality: "Sweden"
};
let course = {
    courseName: "Java",
    typeOfSession: "Online"
};
const studentEnrolledInCourse = mergeObjects(student, course);
console.log("Student with Enrolled Course:",studentEnrolledInCourse);


// Write a JavaScript function to get the values of First and Last names of the following form.
function getFormValue() {
    let fname = document.getElementsByTagName("input")[2].value;
    let lname = document.getElementsByTagName("input")[3].value;
    console.log("Firstname: ",fname);
    console.log("Lastname: ",lname);
}

// Write a JavaScript program to set paragraph background color.
function set_background() {
    let divElement = document.getElementById("setBgColorDiv");
    let pElements = divElement.querySelectorAll("p");
    for(let i=0; i<pElements.length; i++)
        pElements[i].style.backgroundColor = "yellow";
}

// Write a JavaScript function to add rows to a table.
function insert_row() {
    let trElement1 = document.createElement("tr");
    let tdElement1_1 = document.createElement("td");
    tdElement1_1.textContent = "Row1 cell1";
    let tdElement1_2 = document.createElement("td");
    tdElement1_2.textContent = "Row1 cell2";
    trElement1.appendChild(tdElement1_1);
    trElement1.appendChild(tdElement1_2);

    let trElement2 = document.createElement("tr");
    let tdElement2_1 = document.createElement("td");
    tdElement2_1.textContent = "Row2 cell1";
    let tdElement2_2 = document.createElement("td");
    tdElement2_2.textContent = "Row2 cell2";
    trElement2.appendChild(tdElement2_1);
    trElement2.appendChild(tdElement2_2);

    let tableElement = document.getElementById("sampleTable");
    tableElement.appendChild(trElement1);
    tableElement.appendChild(trElement2);
}