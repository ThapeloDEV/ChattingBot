// =======================THIS ARE THE VARIABLE DECLEARATIONS======================//
let logo_msg = document.querySelector('#logo');
let logo2_msg = document.querySelector('#logo2');
let Btn_send = document.querySelector('#Btn_send');
let Btn_send2 = document.querySelector('#Btn_send2');
let text_boxONe = document.querySelector('#txt_textbox');
let text_boxTwo = document.querySelector('#txt2_textbox');
// ========================THEY END HERE ==========================================//


//=====================CODE FOR THE APP STARTS HERE ==============================//

logo_msg.addEventListener('click',(event)=>{
    alert('Hello Welcome to the chat App stimulation called CHATUP. This is a really simple app helps one understand how Messages are sent over a two Bots that i have created. This Project covers the  DOM contant.  ');
        
});

logo2_msg.addEventListener('click',(event)=>{
    alert('Hello Welcome to the chat App stimulation called CHATUP. This is a really simple app helps one understand how Messages are sent over a two Bots that i have created. This Project covers the  DOM contant.  ');
        
});


let Radio_button =document.querySelector('#Rad_status');

Radio_button.addEventListener('click',(event)=>{

        
        alert('Bot One is now online!!! ');


    });

let Radio_button2 =document.querySelector('#Rad2_status');

Radio_button2.addEventListener('click',(event)=>{

    
    alert('This Bot two is now online!!! ');

});

// ----------------------ALGORITHIM FOR THE SEND BUTTON----------------------//
Btn_send.addEventListener('click', (event)=>{

    const txt_Msg = document.querySelector('#txt_textbox').value;
    const txt_box1 = document.querySelector('#txt_textbox');

    if (txt_Msg ==""){
        
        alert('ERROR, Never send an Empty Message!!!');
        txt_box1.style.borderColor='red'
    }else{
        
        const txt_box = document.createElement('dd');
        const Msg =document.createElement('u');
        const Container = document.querySelector('#Main_container2');
        const txt_box1 = document.querySelector('#txt_textbox');

        Msg.textContent = txt_Msg;
        txt_box1.style.borderColor=''

        txt_box.appendChild(Msg);
        Container.appendChild(txt_box);
        alert('Message sent to bot Two');
        event.preventDefault();
        
    }; 
    

});

Btn_send2.addEventListener('click', (event)=>{

    const txt_Msg = document.querySelector('#txt2_textbox').value;
    const txt_box1 = document.querySelector('#txt2_textbox');
    if (txt_Msg ==""){
        
        alert('ERROR, Never send an Empty Message!!!');
        txt_box1.style.borderColor='red'
    }else{

        const txt_box = document.createElement('li');
        const Msg =document.createElement('b');
        const Container = document.querySelector('#Main_container');
        const txt_box1 = document.querySelector('#txt2_textbox');

        Msg.textContent = txt_Msg;
        
        txt_box1.style.borderColor=''
        txt_box.appendChild(Msg);
        Container.appendChild(txt_box);
        event.preventDefault();

        alert('Message sent to bot One')
    }; 
    


});

// this code is for disabling a text input 
/*
document.getElementById('submit').onclick = function() {
    var disabled = document.getElementById("name").disabled;
    if (disabled) {
        document.getElementById("name").disabled = false;
    }
    else {
        document.getElementById("name").disabled = true;
    }
}

*/