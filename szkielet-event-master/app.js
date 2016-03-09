//CCJS15 eventy

var colours = ['#F9A1A1', '#A5F9A1', '#B0A1F9'];
var howManyClicks = 0;
$('input').on('focus', function (){
    $(this).css( {background : '#F9A1A1'} );
    howManyClicks++; 
})

$('input').on('keypress', function (){
    $(this).css( {background : colours[howManyClicks %3]} );
    howManyClicks++; 
})

$('input').on('blur', function (){
    $(this).css( {background : 'white'} ); 
})

$('input').on('change', function (){
    checkLen($(this) ); 
})



var checkLen = function (content){
//check length of content
    var value = content.val();
    //console.log(value);
    if (value < 4){
        var p =  document.createElement('p');
        p.innerText('Za krotki tekst, wpisz co najmniej 4 znaki!');
        p.appendTo('body');
    }
    else{
        //var span = $('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        //span.appendTo('form');
        console.log('jest dobrze');
    }
}
