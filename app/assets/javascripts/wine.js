$(document).ready(function () {
    $.getJSON("http://daretodiscover.net/wine", function (data) {
        var template = HandlebarsTemplates["wine"];
        var html = template({wines: data});
        $("#winelist").append(html);
    });
});
