/**
 * Created by martinmckeaveney on 13/09/2014.
 */
$(document).ready(function(){
    $('#app-row').fadeIn(2000);
    $('#details-row').fadeIn(2000);
    $('.navbar-default').fadeIn(2000);
    $(".table").hide();

});

$(document).ready(function(){
    $(".wards li").hide();
    $(".wards").click(function(){
        $(".wards").animate({
            height: "40em"
        });
        $(".wards li").each(function() {
            $(this).fadeIn(1000);
        });
        $(".beds").animate({
        });
        $(".beds li").each(function() {
            $(this).fadeIn(1000);
        });
    });
});

$(document).ready(function() {
    $(".ward").click(function () {
        console.log("hello");
        $(this).animate({
            backgroundColor: "#66C266"
        }, 1000);
        $(this).animate({
            backgroundColor: "#ccc"
        }, 1000);
    });
});

$(document).ready(function() {
    $(".bed").click(function () {
        console.log("hello");
        $(this).animate({
            backgroundColor: "green"
        }, 1000);
        $(this).animate({
            backgroundColor: "#ccc"
        }, 1000);
    });
});

$(document).ready(function() {
    $(".ward").click(function () {
        $('#table-bordered').append('<tr><td>my data</td><td>more data</td></tr>');

    });
});



$(document).ready(function(){
    $(".bed li").hide();
    $('.gallery').show();

    $(".wards").click(function(){
        $(".wards li").each(function() {
            $(this).fadeIn(1000);
        });
        $(".beds").animate({
        });
        $(".beds li").each(function() {
            $(this).fadeIn(1000);
        });
    });
});


$(document).ready(function() {
    $(".clickable").click(function () {

        $('.gallery').fadeOut(1000);
        $('.table').fadeIn(1000);
        $(this).load("../views/patientlist.scala.html");
    });
});

$(document).ready(function(){
    $(".wards li").hide();
    $(".wards").click(function(){
        $('.table').fadeOut(1000);
        $('.gallery').fadeIn(1000);

    });
});

function loadBed(id) {
    var filter = [];
    $.get("/mobile/allBeds", function (data) {
        data.forEach(function (item) {
            if (item.id == id) {
                filter.push(item);
            }
            console.log(filter.length);
        });
    });
}

