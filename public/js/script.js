var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};

function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    
    messageElement.innerHTML = "<span> You: </span>"+
    "<span>" +userMessage+ "</span>";
    
    chatContainer.appendChild(messageElement);
}


sendBtn.addEventListener('click',function(e){

var userMessage = textbox.value;

if(userMessage == "") {
alert('Please type in a message');
}else{

let userMessageText = userMessage.trim();
user.message = userMessageText;
textbox.value = ""; //remove the textbox vulue after sending the msg


sendMessage(userMessageText);
}
})