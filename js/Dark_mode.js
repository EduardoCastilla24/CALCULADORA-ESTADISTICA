const btn_Icon_Moon = document.getElementById('Moon');
const btn_Icon_Sun = document.getElementById('Sun');
const dark = document.getElementById('body');

function toggle(){
    
    dark.classList.toggle('dark_mode');
    btn_Icon_Moon.classList.toggle('dark_mode');
    btn_Icon_Sun.classList.toggle('dark_mode');

    //Guradamos el modo 
    if(dark.classList.contains('dark_mode')){
        localStorage.setItem('dark_mode', 'true');
    }else{
        localStorage.setItem('dark_mode', 'false');
    }
}

btn_Icon_Moon.addEventListener('click' , toggle);
btn_Icon_Sun.addEventListener('click' , toggle);

// Obtenemos el modo actual.
if(localStorage.getItem('dark_mode') === 'true'){
	dark.classList.add('dark_mode');
	btn_Icon_Moon.classList.add('dark_mode');
    btn_Icon_Sun.classList.add('dark_mode');
} else {
    dark.classList.remove('dark_mode');
	btn_Icon_Moon.classList.remove('dark_mode');
    btn_Icon_Sun.classList.remove('dark_mode');
}