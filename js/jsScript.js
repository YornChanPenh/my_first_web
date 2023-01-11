$(document).ready(function(){

    // get curren time
    const date=new Date();
    const hour = date.getHours();
    console.log(hour);

    $('#headtext').empty();
    if(hour<12)
    {
        $('#headtext').append('Good Moning Form ChanPenh!');
    }
    if(hour>12&&hour<17)
    {
        $('#headtext').append('Good afternoon Form ChanPenh!');
    }
    if(hour>17)
    {
        $('#headtext').append('Good Everning Form ChanPenh!');
    }
})