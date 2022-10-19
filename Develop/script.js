// Display date and time
var todayDate = moment().format('dddd, MMM Do YYYY, LT');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function scheduler() {
        //Variable for current hour
        var currentTime = moment().hour();

        // Loop for hour blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Local storage
    $("#hour8 .description").val(localStorage.getItem("8am"));
    $("#hour9 .description").val(localStorage.getItem("9am"));
    $("#hour10 .description").val(localStorage.getItem("10am"));
    $("#hour11 .description").val(localStorage.getItem("11am"));
    $("#hour12 .description").val(localStorage.getItem("12pm"));
    $("#hour13 .description").val(localStorage.getItem("1pm"));
    $("#hour14 .description").val(localStorage.getItem("2pm"));
    $("#hour15 .description").val(localStorage.getItem("3pm"));
    $("#hour16 .description").val(localStorage.getItem("4pm"));
    $("#hour17 .description").val(localStorage.getItem("5pm"));

    scheduler();
})