var turn=0;
var win1=false;
var win2=false;
$('document').ready(function()// Starts only when page is finished loading
{
    $('#start').click(function(){$('#start').fadeOut(0);$('.gameItself').fadeIn(1500);});
    var winner;
    $('.tile').click(function () // When clicking any of the game tiles
        {
            if(winner==undefined)
            {
                if($(this).hasClass("last"))
                {
                    if($(this).hasClass("user1")){
                        $('.GM').text('TURN: USER 1');
                        $(this).removeClass("user1");
                        $(this).removeClass("last");
                    }
                    else{
                        $('.GM').text('TURN: USER 2');
                        $(this).removeClass("user2");
                        $(this).removeClass("last");
                    }
                    turn--;
                }
                else if(turn%2!=0&&(!$(this).hasClass("user1"))&&(!$(this).hasClass("user2")))
                {
                    $( this ).addClass("user2");
                    if(check2()==true){
                        $('.GM').addClass("user2");
                        $('.GM').text('USER 2 WON!');
                        winner=true;
                    }
                    else{
                    $('.GM').text('TURN: USER 1');
                    $('.tile').removeClass("last");
                    $(this).addClass("last");
                    turn++;
                    }
                }
                else if(turn%2==0&&(!$(this).hasClass("user1"))&&(!$(this).hasClass("user2")))                                               
                {
                    $( this ).addClass("user1");
                    if(check1()==true){
                        $('.GM').addClass("user1");
                        $('.GM').text('USER 2 WON!');
                        winner=true;
                    }
                    else{
                    $('.GM').text('TURN: USER 2');
                    $('.tile').removeClass("last");
                    $(this).addClass("last");
                    turn++;
                    }
                }  
            }

            $('#newGame').click(function (){
                $('.tile').removeClass("user1");
                $('.tile').removeClass("user2");
                turn=0;
                $('.GM').text('TURN: USER 1');
                winner=undefined; 
                $('.GM').removeClass("user1");
                $('.GM').removeClass("user2");
            })
        })
        function check1(){
            if($('#00').hasClass("user1")&&$('#01').hasClass("user1")&&$('#02').hasClass("user1"))
                return true;
            else if($('#10').hasClass("user1")&&$('#11').hasClass("user1")&&$('#12').hasClass("user1"))
                return true;
            else if($('#20').hasClass("user1")&&$('#21').hasClass("user1")&&$('#22').hasClass("user1"))
                return true;
            else if($('#00').hasClass("user1")&&$('#10').hasClass("user1")&&$('#20').hasClass("user1"))
                return true;
            else if($('#01').hasClass("user1")&&$('#11').hasClass("user1")&&$('#21').hasClass("user1"))
                return true;
            else if($('#02').hasClass("user1")&&$('#12').hasClass("user1")&&$('#22').hasClass("user1"))
                return true;
            else if($('#00').hasClass("user1")&&$('#11').hasClass("user1")&&$('#22').hasClass("user1"))
                return true;
            else if($('#02').hasClass("user1")&&$('#11').hasClass("user1")&&$('#20').hasClass("user1"))
                return true;
        }

        function check2(){
            if($('#00').hasClass("user2")&&$('#01').hasClass("user2")&&$('#02').hasClass("user2"))
                return true;
            else if($('#10').hasClass("user2")&&$('#11').hasClass("user2")&&$('#12').hasClass("user2"))
                return true;
            else if($('#20').hasClass("user2")&&$('#21').hasClass("user2")&&$('#22').hasClass("user2"))
                return true;
            else if($('#00').hasClass("user2")&&$('#10').hasClass("user2")&&$('#20').hasClass("user2"))
                return true;
            else if($('#01').hasClass("user2")&&$('#11').hasClass("user2")&&$('#21').hasClass("user2"))
                return true;
            else if($('#02').hasClass("user2")&&$('#12').hasClass("user2")&&$('#22').hasClass("user2"))
                return true;
            else if($('#00').hasClass("user2")&&$('#11').hasClass("user2")&&$('#22').hasClass("user2"))
                return true;
            else if($('#02').hasClass("user2")&&$('#11').hasClass("user2")&&$('#20').hasClass("user2"))
                return true;
        }
});
