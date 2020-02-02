var currentDayEl = document.getElementById("currentDay");
var myInput1El = document.getElementById("myInput1");
var myInput2El = document.getElementById("myInput2");
var myInput3El = document.getElementById("myInput3");
var myInput4El = document.getElementById("myInput4");
var myInput5El = document.getElementById("myInput5");
var myInput6El = document.getElementById("myInput6");
var myInput7El = document.getElementById("myInput7");
var myInput8El = document.getElementById("myInput8");
var myInput9El = document.getElementById("myInput9");



var messageText = document.getElementById('currentDay');
currentDayEl = moment().format('dddd, MMMM Do, YYYY');
messageText.innerHTML = (currentDayEl);

$("#save1").on("click", function() {
    var toDoEvent = {
        "messageText" : myInput1El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("9:00a", JSON.stringify(toDoEvent));

      
    
        });
        if(localStorage.getItem("9:00a") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("9:00a"));
        myInput1El.value = toDoEvent["messageText"];
    }



$("#save2").on('click', function() {
var toDoEvent = {
    "messageText" : myInput2El.value,
    "timeSave" : moment().format('hh:mm a')
    };
    console.log(toDoEvent);
    localStorage.setItem("10:00a", JSON.stringify(toDoEvent));
    });

    if(localStorage.getItem("10:00a") != null) {
    var toDoEvent = JSON.parse(localStorage.getItem("10:00a"));
    myInput2El.value = toDoEvent["messageText"];
    }

$("#save3").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput3El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("11:00a", JSON.stringify(toDoEvent));
        });
        if(localStorage.getItem("11:00a") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("11:00a"));
        myInput3El.value = toDoEvent["messageText"];
        }

$("#save4").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput4El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("12:00", JSON.stringify(toDoEvent));
        });

        if(localStorage.getItem("12:00") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("12:00"));
        myInput4El.value = toDoEvent["messageText"];
        }
$("#save5").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput5El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("1:00p", JSON.stringify(toDoEvent));
        });

        if(localStorage.getItem("1:00p") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("1:00p"));
        myInput5El.value = toDoEvent["messageText"];
        }

$("#save6").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput6El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("2:00p", JSON.stringify(toDoEvent));
        });

        if(localStorage.getItem("2:00p") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("2:00p"));
        myInput6El.value = toDoEvent["messageText"];
        }

$("#save7").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput7El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("3:00p", JSON.stringify(toDoEvent));
        });

        if(localStorage.getItem("3:00p") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("3:00p"));
        myInput7El.value = toDoEvent["messageText"];
        }

$("#save8").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput8El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("4:00p", JSON.stringify(toDoEvent));
        });

        if(localStorage.getItem("4:00p") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("4:00p"));
        myInput8El.value = toDoEvent["messageText"];
        }

$("#save9").on('click', function() {
    var toDoEvent = {
        "messageText" : myInput9El.value,
        "timeSave" : moment().format('hh:mm a')
        };
        console.log(toDoEvent);
        localStorage.setItem("5:00p", JSON.stringify(toDoEvent));
        });

        if(localStorage.getItem("5:00p") != null) {
        var toDoEvent = JSON.parse(localStorage.getItem("5:00p"));
        myInput9El.value = toDoEvent["messageText"];
        }
            var currentHour = parseInt(moment().format('HH'));
            var hoursInDay = [9, 10, 11, 12, 13, 14, 15, 16, 17]
            
            for(var i= 0; i < currentHour.length; i++) {
                var newRow = $("<div>").addClass("row r" + i);}

            if(parseInt(currentHour) > parseInt(hoursInDay[i])) {
                hour.addClass("pastTime");
            }
            if(parseInt(currentHour) < parseInt(hoursInDay[i])) {
                inputField.addClass("futureTime");}

            console.log(currentHour);                
            hoursInDay.forEach(function(hour) {
                var hourBadge = hour-8;
                if (currentHour < hour) {
                    document.getElementById("myInput" + hour.toString());
                    
                } else if (currentHour === hour) {
                    document.getElementById("myInput" + hour.toString());

                } else {
                    document.getElementById("myInput" + hour.toString());

                }
            })  