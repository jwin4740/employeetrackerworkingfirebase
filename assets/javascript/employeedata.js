
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCH02lV8Gc-SVfc8qRgXJ38utghRU5qnNg",
    authDomain: "employeedata-24406.firebaseapp.com",
    databaseURL: "https://employeedata-24406.firebaseio.com",
    storageBucket: "employeedata-24406.appspot.com",
    messagingSenderId: "218223176307"
  };
  firebase.initializeApp(config);
var employeeName = "";
var role = "";
var startDate = "";
var monthlyRate = "";


  database.ref(("/employees/ " + fireTrainNumber)).set({
        eName: employeeName,
        eRole: role,
        eStartDate: startDate,
        eMonthlyRate: monthlyRate
        
    });

  var locazione = database.ref("/trainschedule");
locazione.once("value", function(snapshot) {

                var novoTableDsix = $("<td class='trainrow'>" + fireTrainNumber + "</td>");
                var novoTableDone = $("<td class='trainrow'>" + fireName + "</td>");
                var novoTableDfour = $("<td class='trainrow'>" + fireNextArrival + "</td>");
                var novoTableDtwo = $("<td class='trainrow'>" + fireDestination + "</td>");
                var novoTableDthree = $("<td class='trainrow'>" + fireFreqDisplay + "</td>");
                var novoTableDfive = $("<td class='trainrow'>" + fireMinutesAwayDisplay + "</td>");