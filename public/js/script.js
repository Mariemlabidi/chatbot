var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};

var TableOfPossibelMsg = [
    { message: "hi", response: "Hello! How can I assist you today?" },
    { message: "any doctors for eye care", response: "Here is a list of available eye care specialists." },
    
    { message: "how can i book an appointment", response: "You can book an appointment by selecting a specialty, choosing a doctor, and picking an available time slot." },
    { message: "how to find a cardiologist", response: "You can search by specialty and location to find a cardiologist near you on our page." },
    { message: "difference between neurologist and psychiatrist", response: "A neurologist treats physical disorders of the nervous system, while a psychiatrist specializes in mental health." },
    { message: "can i pay with insurance", response: "Yes, we accept various health insurances. You can add your insurance in your profile settings." },
    { message: "can i consult a doctor online", response: "Yes, many doctors offer online consultations. Just click on 'Consult Online' to begin." },
    { message: "how to cancel my appointment", response: "Go to 'My Appointments', select the one you want to cancel, and click on 'Cancel'." },
    
    { message: "how can i edit my availability", response: "You can manage your availability in the 'Schedule' section of your dashboard." },
    { message: "how to enable online consultation", response: "Go to your settings and enable the 'Online Consultation' option." },
    { message: "can i see patient history", response: "Yes, if the patient has granted permission, their medical history will be accessible from their profile." },
    { message: "do i get appointment reminders", response: "Yes, you will receive notifications via email and on the platform before each appointment." },
    { message: "how do i get paid", response: "Payments are transferred automatically to your bank account every week." }
];


function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.style.textAlign="right";
    messageElement.style.margin="10px";
    
    messageElement.innerHTML = "<span> You: </span>"+
    "<span>" +userMessage+ "</span>";
    
    chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage){

var chatbotmessage = "";

if(userMessage == "hi"){
chatbotmessage = "hello";

}else if(userMessage.length >5){
    var result =TableOfPossibelMsg.filter(val => val.message.includes(userMessage.toLowerCase()
    ));
    if(result.length > 0){
        var response = result[0].response;
        chatbotmessage = response;
    }else{
        chatbotmessage="please send another message"
    }
}


var messageElement = document. createElement('div');

messageElement. innerHTML = "<span>Chatbot: </span>"+
                    "<span>"+chatbotmessage+"</span>";


setTimeout(()=>{
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
    chatContainer.appendChild(messageElement);},1000);
    chatContainer.scrollTop = chatContainer.scrollHeight;

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
chatbotResponse(userMessage);
}
})