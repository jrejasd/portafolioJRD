document.querySelector('#f1').addEventListener('mouseover', function(){
    document.getElementById('fotojr').style.display='none';
    document.getElementById('fotojr_color').style.display='block';
    document.getElementById('fotojr_color').classList.toggle('zoom');
});

document.querySelector('#f1').addEventListener('mouseout', function(){
    document.getElementById('fotojr').style.display='block';
    document.getElementById('fotojr_color').style.display='none';
    document.getElementById('fotojr_color').classList.toggle('zoom');
});

document.querySelector('#f2').addEventListener('mouseover', function(){
    document.getElementById('fotopry').style.display='none';
    document.getElementById('fotopry_color').style.display='block';
    document.getElementById('fotopry_color').classList.toggle('zoom');
});

document.querySelector('#f2').addEventListener('mouseout', function(){
    document.getElementById('fotopry').style.display='block';
    document.getElementById('fotopry_color').style.display='none';
    document.getElementById('fotopry_color').classList.toggle('zoom');
});

document.querySelector('#f3').addEventListener('mouseover', function(){
    document.getElementById('fotocont').style.display='none';
    document.getElementById('fotocont_color').style.display='block';
    document.getElementById('fotocont_color').classList.toggle('zoom');
});

document.querySelector('#f3').addEventListener('mouseout', function(){
    document.getElementById('fotocont').style.display='block';
    document.getElementById('fotocont_color').style.display='none';
    document.getElementById('fotocont_color').classList.toggle('zoom');
});


