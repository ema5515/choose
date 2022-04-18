var options = [];
var result;
var nextOption;
var optionLayout;

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

$(document).on('click', 'img.delete-button',function(){
    $(this).closest('li').remove();

    var removeItems = $(this).closest('li').text();

    var index = options.indexOf(removeItems);

    options.splice(index, 1);
    console.log(options);
    
    noOption();
});

$(document).on('keypress', function(event){
    if (event.keyCode == 13){
        addOption();
        nextOption = $(".new-option").val('');
    }
});

function addOption(){
    nextOption = $(".new-option").val();
    optionLayout = "<li>" + nextOption + "<img class='delete-button' src='file/svg/delete.svg' alt=''></li>"
    options.push(nextOption);

    $("ul").append(optionLayout);

    noOption();
}

function startChoose(){
    if (options.length === 0){
        $(".result-option").text("No options added");
    };
    result = Math.floor(Math.random() * options.length);
    console.log(result);
    $(".result-option").text(options[result]);

}

function noOption() {
    if (options.length > 0){
        $(".no-option").addClass("display-no");
    } else {
        $(".no-option").removeClass("display-no");
    }
}