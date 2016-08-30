  // Initializes Firebase
  var config = {
    apiKey: "AIzaSyBmj1wWoKwMqfE-iC6IuiJ1cIGHSJScHK4",
    authDomain: "my-first-project-173fe.firebaseapp.com",
    databaseURL: "https://my-first-project-173fe.firebaseio.com",
    storageBucket: "my-first-project-173fe.appspot.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();


//variables set to empty strings which will take user inputs for the trains and additional information.
  var trainName = "";
  var destination = "";
  var firstTraintime = "";
  var frequency = "";


//on click function which obtains user input value and pushes the information to the firebase database
$("#searchButton").on('click', function(){

//stores the inputs into the variables.
trainName = $('#trainInput').val().trim();
destination = $('#destinationInput').val().trim();
firstTraintime = $('#firstTrainInput').val().trim();
frequency = $('#frequencyInput').val().trim();




database.ref().push({
	trainName: trainName,
	destination: destination,
	firstTraintime: firstTraintime,
	frequency: frequency,
	dateAdded: firebase.database.ServerValue.TIMESTAMP



});

return false;

});

// var currentTime = moment();
// 		console.log("CURRENT TIME: " + moment().format("hh:mm"));


		
// 		// Time apart (remainder)
// 		var tRemainder = diffTime % frequency;
// 		console.log(tRemainder);


// 		// Minute Until Train
// 		var tMinutesTillTrain = frequency - tRemainder;
// 		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// 		// Next Train
// 		var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// 		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

// 		// Difference between the times
// 		var diffTime = moment().diff(moment(nextTrain), "minutes");
// 		console.log("DIFFERENCE IN TIME: " + diffTime);


//function to console.log the children added in the database.
database.ref().on("child_added", function(childSnapshot) {
	// Log everything that's coming out of snapshot
	 console.log(childSnapshot.val().trainName);
	 console.log(childSnapshot.val().destination);
	 console.log(childSnapshot.val().firstTraintime);
	 console.log(childSnapshot.val().frequency);
	 

	// appends the snapshots of each variable into a table with rows and dedicated cells.

 		$('table').append("<tr><td id='name'> "+childSnapshot.val().trainName+" </td><td id='dest'> "+childSnapshot.val().destination+" </td><td id='freq'> "
 			+childSnapshot.val().frequency+" </td><td id='firstTrain'> "+childSnapshot.val().firstTraintime+" </td></tr>");


// // Handle the errors
 }, function(errorObject){
console.log("Errors handled: " + errorObject.code)
 });






