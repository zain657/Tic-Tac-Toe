let title = document.querySelector('.title');
let player = 'x';
let square=[];
function one(num1,num2,num3){
    title.innerHTML=`${square[num1]} winer`;
    document.getElementById('item'+num1).style.background='rgba(118, 5, 248, 0.623)';
    document.getElementById('item'+num2).style.background='rgba(118, 5, 248, 0.623)';
    document.getElementById('item'+num3).style.background='rgba(118, 5, 248, 0.623)';
    setInterval(function(){title.innerHTML+='.';},1000);
    setTimeout(function(){location.reload();},4000);
}
function win(){
    for(let i=1;i<10;i++){
        square[i] = document.getElementById('item' + i).innerHTML;
    }
    if(square[1]==square[2]&&square[2]==square[3]&&square[1]!=''){
        one(1,2,3);
    }
    else if(square[4]==square[5]&&square[5]==square[6]&&square[4]!=''){
        one(4,5,6);
    }
    else if(square[7]==square[8]&&square[8]==square[9]&&square[9]!=''){
        one(7,8,9);
    }
    else if(square[1]==square[4]&&square[4]==square[7]&&square[7]!=''){
        one(1,4,7);
    }
    else if(square[2]==square[5]&&square[5]==square[8]&&square[8]!=''){
        one(2,5,8);
    }
    else if(square[3]==square[6]&&square[6]==square[9]&&square[9]!=''){
        one(3,6,9);
    }
    else if(square[1]==square[5]&&square[5]==square[9]&&square[9]!=''){
        one(1,5,9);
    }
    else if(square[3]==square[5]&&square[5]==square[7]&&square[7]!=''){
        one(3,5,7);
    }
}

function setplay(id) {
    let f = document.getElementById(id);
    if (player === 'x' && f.innerHTML == '') {
        f.innerHTML = 'x';
        player = 'o';
        title.innerHTML = 'o';
    } else if (player === 'o' && f.innerHTML == '') {
        f.innerHTML = 'o';
        player = 'x';
        title.innerHTML = 'x';
    }
    win();
}


let re=document.getElementById('re');
re.onclick=function(){
    setInterval(function(){title.innerHTML+='.';},500);
    setTimeout(function(){location.reload();},500);
}