// Initialize Firebase
var config = {
    apiKey: "AIzaSyCH02lV8Gc-SVfc8qRgXJ38utghRU5qnNg",
    authDomain: "employeedata-24406.firebaseapp.com",
    databaseURL: "https://employeedata-24406.firebaseio.com",
    storageBucket: "employeedata-24406.appspot.com",
    messagingSenderId: "218223176307"
};

firebase.initializeApp(config);

var database = firebase.database();

//inital values - 

var employeeName = "";
var role = "";
var startDate = "";
var monthsWorked = "";
var monthlyRate = "";
var total = "";

$(document).ready(function() {
    function keyeffect () {
        $("#keysound")[0].play();
    }
    function fIntro() {
        $("#theme")[0].volume = 0.2;
        $("#theme")[0].play();
    }
    fIntro();
   $(document).on("keyup", keyeffect);


});

$("#submit").on("click", function(event) {
    event.preventDefault();
    employeeName = $("#employeeName").val();
    role = $("#role").val();
    startDate = ($("#startDate").val());
    monthlyRate = parseInt($("#monthlyRate").val());




    var a = moment();
    var b = moment(startDate);
    monthsWorked = a.diff(b, 'months');
    console.log(monthsWorked);

    total = (monthsWorked * monthlyRate);


    database.ref("/employeedirectory/employees").push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        monthlyRate: monthlyRate,
        total: total,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#employeeName").val("");
    $("#role").val("");
    $("#monthlyRate").val("");
    $("#startDate").val("");
});



database.ref("/employeedirectory/employees").on("child_added", function(childSnapshot) {
    addToTable(childSnapshot.val().employeeName, childSnapshot.val().role, childSnapshot.val().startDate, childSnapshot.val().monthlyRate, childSnapshot.val().monthsWorked, childSnapshot.val().total);

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});




function addToTable(employeeName, role, startDate, monthlyRate, monthsWorked, total) {
    var newTableRow = $("<tr>");
    var newTableEmployeeName = $("<td>" + employeeName + "</td>");
    var newTableRole = $("<td>" + role + "</td>");
    var newTableStartDate = $("<td>" + startDate + "</td>");
    var newTableMonthsWorked = $("<td>" + monthsWorked + "</td>");
    var newTableMonthlyRate = $("<td>" + "$" + monthlyRate + "</td>");

    var newTableTotal = $("<td>" + "$" + total + "</td>");

    newTableRow.append(newTableEmployeeName);
    newTableRow.append(newTableRole);
    newTableRow.append(newTableStartDate);
    newTableRow.append(newTableMonthlyRate);
    newTableRow.append(newTableTotal);

    $("#employeeTable").append(newTableRow);
    console.log(newTableRow);

}
