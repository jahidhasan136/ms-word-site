document.getElementById('btn-bold').addEventListener('click', function(){
    document.getElementById('text-field').style.fontWeight = 'bold';
});


document.getElementById('btn-italic').addEventListener('click', function(){
    document.getElementById('text-field').style.fontStyle = 'italic';
});


document.getElementById('btn-underline').addEventListener('click', function(){
    document.getElementById('text-field').style.textDecoration = 'underline';
});


document.getElementById('btn-left').addEventListener('click', function(){
    document.getElementById('text-field').style.textAlign = 'left';
});


document.getElementById('btn-center').addEventListener('click', function(){
    document.getElementById('text-field').style.textAlign = 'center';
});


document.getElementById('btn-right').addEventListener('click', function(){
    document.getElementById('text-field').style.textAlign = 'right';
});


document.getElementById('btn-justify').addEventListener('click', function(){
    document.getElementById('text-field').style.textAlign = 'justify';
});


document.getElementById('btn-justify').addEventListener('click', function(){
    document.getElementById('text-field').style.textAlign = 'justify';
});


document.getElementById('color').addEventListener('change', function(){
    const color = document.getElementById('color');
    document.getElementById('text-field').style.color = color.value;
});


document.getElementById('text-size').addEventListener('change', function(){
    const size = document.getElementById('text-size');
    document.getElementById('text-field').style.fontSize = size.value + "px";
});

