// chatbot.js - AI Assistant for Global Music Official

document.addEventListener('DOMContentLoaded', function() {
    // Chatbot elements
    const chatbotLauncher = document.getElementById('chatbotLauncher');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotHeader = document.getElementById('chatbotHeader');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    // Toggle chatbot visibility
    function toggleChatbot() {
        chatbotContainer.classList.toggle('chatbot-closed');
    }
    
    // Event listeners for chatbot UI
    chatbotLauncher.addEventListener('click', toggleChatbot);
    chatbotHeader.addEventListener('click', toggleChatbot);
    chatbotClose.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChatbot();
    });
    
    // Add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Show typing indicator
    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Hide typing indicator
    function hideTyping() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Music-specific AI responses
    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        // Music-related responses
        if (userMessage.includes('hello') || userMessage.includes('hi')) {
            return "Hello! Welcome to Global Music Official. How can I assist you with music today?";
        } else if (userMessage.includes('artist') || userMessage.includes('musician')) {
            return "We feature talented artists from around the world! Check out our 'Participant' section to discover new musicians.";
        } else if (userMessage.includes('video') || userMessage.includes('song')) {
            return "You can watch our latest music videos in the 'Video' section. Is there a particular genre you're interested in?";
        } else if (userMessage.includes('winner') || userMessage.includes('contest')) {
            return "Our current winners are displayed in the 'Winner' section. Would you like to participate in our next music competition?";
        } else if (userMessage.includes('genre') || userMessage.includes('type of music')) {
            return "We cover all genres from classical to pop, and traditional world music to contemporary fusion. What's your favorite?";
        } else if (userMessage.includes('subscribe') || userMessage.includes('follow')) {
            return "You can subscribe to our YouTube channel or follow us on social media using the links in the footer!";
        } else if (userMessage.includes('contact') || userMessage.includes('help')) {
            return "For direct assistance, please visit our 'Contact' section and send us a message.";
        } else if (userMessage.includes('about') || userMessage.includes('team')) {
            return "Learn about our team and mission in the 'About' section of our website.";
        } else if (userMessage.includes('thank')) {
            return "You're welcome! Let me know if you need anything else about music.";
        } else {
            return "I'm here to help with anything related to Global Music Official. You can ask about artists, videos, competitions, or our team!";
        }
    }
    
    // Handle user input
    function handleUserInput() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;
        
        addMessage(userMessage, true);
        chatbotInput.value = '';
        
        // Show typing indicator
        showTyping();
        
        // Simulate bot thinking time
        setTimeout(() => {
            hideTyping();
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse);
        }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    }
    
    // Event listeners for user input
    chatbotSend.addEventListener('click', handleUserInput);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Initial greeting
    setTimeout(() => {
        addMessage("Hello! I'm your Global Music Assistant. Ask me about artists, videos, or competitions!");
    }, 1500);

    // Multilingual support for chatbot
    function updateChatbotLanguage(lang) {
        const greetings = {
            'en': "Hello! I'm your Global Music Assistant. Ask me about artists, videos, or competitions!",
            'hi': "नमस्ते! मैं आपका ग्लोबल म्यूजिक सहायक हूँ। कलाकारों, वीडियो या प्रतियोगिताओं के बारे में पूछें!",
            'es': "¡Hola! Soy tu Asistente de Música Global. ¡Pregúntame sobre artistas, videos o competencias!",
            'fr': "Bonjour! Je suis votre Assistant Musical Global. Demandez-moi des informations sur les artistes, vidéos ou concours!"
        };
        
        // Update the initial message if it exists
        const initialMessage = chatbotMessages.querySelector('.bot-message');
        if (initialMessage) {
            initialMessage.textContent = greetings[lang] || greetings['en'];
        }
    }
    
    // Listen for language changes
    document.getElementById('language-select')?.addEventListener('change', function() {
        updateChatbotLanguage(this.value);
    });
});