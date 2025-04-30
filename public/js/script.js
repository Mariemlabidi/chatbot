var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};


var TableOfPossibelMsg = [
    { keywords: ["hi", "hello", "hey"], response: "Hello! How can I assist you today?" },
    { keywords: ["eye", "eye care", "ophthalmologist", "doctors for eye"], response: "Here is a list of available eye care specialists." },
    
    { keywords: ["book appointment", "make appointment", "how to book", "appointment booking","appointement"], response: "You can book an appointment by selecting a specialty, choosing a doctor, and picking an available time slot." },
    
    { keywords: ["find cardiologist", "cardiologist", "heart doctor"], response: "You can search by specialty and location to find a cardiologist near you on our page." },
    
    { keywords: ["neurologist", "psychiatrist", "difference between"], response: "A neurologist treats physical disorders of the nervous system, while a psychiatrist specializes in mental health." },
    
    { keywords: ["insurance", "can i pay with insurance", "insurance accepted"], response: "Yes, we accept various health insurances. You can add your insurance in your profile settings." },
    
    { keywords: ["consult online", "online doctor", "talk to doctor online","online"], response: "Yes, many doctors offer online consultations. Just click on 'Consult Online' to begin." },
    
    { keywords: ["cancel appointment", "delete appointment", "remove appointment"], response: "Go to 'My Appointments', select the one you want to cancel, and click on 'Cancel'." },
    
    { keywords: ["edit availability", "change schedule", "update availability"], response: "You can manage your availability in the 'Schedule' section of your dashboard." },
    
    { keywords: ["enable online consultation", "activate online consult"], response: "Go to your settings and enable the 'Online Consultation' option." },
    
    { keywords: ["see patient history", "access patient data", "medical history"], response: "Yes, if the patient has granted permission, their medical history will be accessible from their profile." },
    
    { keywords: ["appointment reminders", "will i get reminders", "notify me about appointment","reminder","notification"], response: "Yes, you will receive notifications via email and on the platform before each appointment." },
    
    { keywords: ["get paid", "receive payment", "how do i get paid"], response: "Payments are transferred automatically to your bank account every week." }
];



function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.classList.add('user-message');
    messageElement.style.textAlign="right";
    messageElement.style.margin="10px";
    
    messageElement.innerHTML = "<span> You: </span>"+
    "<span>" +userMessage+ "</span>";
    
    chatContainer.appendChild(messageElement);
}
function chatbotResponse(userMessage) {
    var chatbotmessage = findClosestResponse(userMessage);

    // Créer le message du chatbot
    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span><span>" + chatbotmessage + "</span>";

    // Ajouter le "Chatbot is typing..."
    var typingIndicator = document.createElement('div');
    typingIndicator.innerHTML = "<em>Chatbot is typing...</em>";
    typingIndicator.style.fontStyle = "italic";
    typingIndicator.style.color = "gray";
    typingIndicator.style.margin = "10px";
    chatContainer.appendChild(typingIndicator);

    // Remplacer par la vraie réponse après délai
    setTimeout(() => {
        chatContainer.removeChild(typingIndicator);
        messageElement.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}


function findClosestResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    for (let item of TableOfPossibelMsg) {
        for (let keyword of item.keywords) {
            if (userMessage.includes(keyword)) {
                return item.response;
            }
        }
    }
    return "I'm sorry, I didn't understand that. Could you rephrase?";
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
});
textbox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});