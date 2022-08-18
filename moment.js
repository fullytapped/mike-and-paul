var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".details").val();
        var time = $(this).siblings().attr("id");
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        var timeNow = moment().hours();
        $(".time").each(function () {
            var time = parseInt($(this).attr("id"));
            if (time < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (time === timeNow) {
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
    $("#8 .details").val(localStorage.getItem("08:00"));
    $("#9 .details").val(localStorage.getItem("09:00"));
    $("#10 .details").val(localStorage.getItem("10:00"));
    $("#11 .details").val(localStorage.getItem("11:00"));
    $("#12 .details").val(localStorage.getItem("12:00"));
    $("#13 .details").val(localStorage.getItem("13:00"));
    $("#14 .details").val(localStorage.getItem("14:00"));
    $("#15 .details").val(localStorage.getItem("15:00"));
    $("#16 .details").val(localStorage.getItem("16:00"));
    $("#17 .details").val(localStorage.getItem("17:00"));

    timeTracker();
})