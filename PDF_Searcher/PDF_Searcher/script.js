$(document).ready(function() {

    $('#datepicker-1-0').datepicker({
        changeMonth: true,
        changeYear: true,
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        beforeShow: function(textbox, instance) {
            console.log("ADSADSAD");
            $('.easychat-calendar-div-wrapper').append($('#ui-datepicker-div'));
            $("#timepicker-container-1-1 .custom-timepicker").hide();
            $("#timepicker-container-1-0 .custom-timepicker").hide();
        }
    });
});

$(document).ready(function() {

    $('#datepicker-1-1').datepicker({

        changeMonth: true,
        changeYear: true,
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        beforeShow: function(textbox, instance) {
            $('.easychat-calendar-div-wrapper').append($('#ui-datepicker-div'));
            $("#timepicker-container-1-1 .custom-timepicker").hide();
            $("#timepicker-container-1-0 .custom-timepicker").hide();
        }
    });
});

var ansHr = "",
    ansMin = "",
    ansAmpm = "";

function handle_click_time(id) {

    let allHrs = document.querySelectorAll("#timepicker-container-" + id + " .hr-clock ul li");
    let allMins = document.querySelectorAll("#timepicker-container-" + id + " .min-clock ul li");
    let allAmpm = document.querySelectorAll("#timepicker-container-" + id + " .ampm-clock ul li");
    allHrs.forEach(eachHr => {
        if (eachHr.childNodes[1].checked === true) {
            eachHr.childNodes[0].classList.add("datetimepicker-selected-time");
            ansHr = eachHr.childNodes[0].innerText;
        } else
            eachHr.childNodes[0].classList.remove("datetimepicker-selected-time");
    })
    allMins.forEach(eachMin => {
        if (eachMin.childNodes[1].checked === true) {
            eachMin.childNodes[0].classList.add("datetimepicker-selected-time");
            ansMin = eachMin.childNodes[0].innerText;
        } else
            eachMin.childNodes[0].classList.remove("datetimepicker-selected-time");
    })
    allAmpm.forEach(eachAmpm => {
        if (eachAmpm.childNodes[1].checked === true) {
            eachAmpm.childNodes[0].classList.add("datetimepicker-selected-time");
            ansAmpm = eachAmpm.childNodes[0].innerText;
        } else
            eachAmpm.childNodes[0].classList.remove("datetimepicker-selected-time");
    })
}

function handle_time_picker_click(id) {
    if (id === "1-0")
        document.querySelector("#timepicker-container-1-1 .custom-timepicker").style.display = "none";

    if (id === "1-1")
        document.querySelector("#timepicker-container-1-0 .custom-timepicker").style.display = "none";

    document.querySelector("#timepicker-container-" + id + " .custom-timepicker").style.display = "block";

}

function close_time_modal(id) {
    document.querySelector("#timepicker-container-" + id + " .custom-timepicker").style.display = "none";
}

function handle_save_time(id) {
    document.querySelector("#timepicker-container-" + id + " .custom-timepicker").style.display = "none";
    if (ansHr && ansAmpm && ansMin)
        document.querySelector("#time-picker-btn-" + id).value = ansHr + " : " + ansMin + " " + ansAmpm;
}

function changed_date(id, type, event) {
    var dayArr = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(document.querySelector("#datepicker-" + id).value);
    var datenum = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDay();
    document.querySelector("#date-displayer-" + id + " .date").innerHTML = datenum;
    document.querySelector("#date-displayer-" + id + " .month-year").innerHTML = monthArr[month] + " " + year;
    document.querySelector("#date-displayer-" + id + " .day").innerHTML = dayArr[day];
    document.querySelector("#datepicker-" + id).style.opacity = "0";
    document.querySelector("#date-displayer-" + id + " .row").style.display = "flex";
}

function handle_close() {
    document.querySelector(".btns-sections").style.display = "none";
}