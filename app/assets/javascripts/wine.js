$(document).ready(function () {
    $.getJSON("http://daretodiscover.net/wine", function (data) {
        console.log("wine data", data);
    });
});
