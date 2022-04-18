var options = ["a", "b"];
var result;
var nextOption;
const optionLayout = "<li>" + nextOption + "<img src='file/svg/delete.svg' alt=''></li>";

$(".start").click(function(){
    console.log("button start clicked");
    $(".index").fadeOut();
        setTimeout(function(){ 
            $(".results").fadeIn();
        }, 500);
    
    startChoose();

    $(".start").addClass("display-no");
    $(".back").removeClass("display-no");
});

$(".back").click(function(){
    console.log("button back clicked");
    $(".results").fadeOut();
        setTimeout(function(){
            $(".index").fadeIn();
        }, 500);
    

    $(".back").addClass("display-no");
    $(".start").removeClass("display-no");
});

$(".add-button").click(function(){
    addOption();
});


function addOption(){
    nextOption = $(".new-option").val();
    options.push(nextOption);

    $("ul").append(optionLayout);

}


function startChoose(){
    result = Math.floor(Math.random() * options.length);
    console.log(result);
    $(".result-option").text(options[result]);

}