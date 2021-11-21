let tomoe_div = document.createElement('div');
tomoe_div.innerHTML = ',';
tomoe_div.classList.add('tomoe');
let eye = document.querySelector('.eye');

let tomoes = [];
function get_tomoe(){
    tomoes = document.querySelectorAll('.tomoe');
}

function add_tomoe(){
    eye.appendChild(tomoe_div.cloneNode(true));
    get_tomoe();
    set_tomoe_rotation();
    if(tomoes.length > 0)
        eye.classList.add('sharingan');
}

function remove_tomoe(){
    eye.removeChild(tomoes[tomoes.length - 1]);
    get_tomoe();
    if(tomoes.length > 0)
        set_tomoe_rotation();
    else
        eye.classList.remove('sharingan');
}

function set_tomoe_rotation(){
    for(let i = 0; i < tomoes.length; i++)
        tomoes[i].style.transform = `rotate(${i / tomoes.length}turn)`;
}

function update(){
    switch(tomoes.length){
        case 3:
            remove_tomoe();
            remove_tomoe();
            remove_tomoe();
            break;
        default:
            add_tomoe();
    }
}

document.addEventListener('keydown', event=>{
    switch (event.key) {
        case ' ':
            add_tomoe();
            break;
        case 'Backspace':
            remove_tomoe();
            break;
        default:
            console.log(event.key);
            console.log(event);
    }
});
