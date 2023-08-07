// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const userMessageElement = createMessageElement(message, 'user');
    chatMessages.appendChild(userMessageElement);

    // Simulate an automated reply after a short delay
    setTimeout(() => {
      const replyMessage = generateReply(message); // Implement your own reply generation logic here
      const replyMessageElement = createMessageElement(replyMessage, 'bot');
      chatMessages.appendChild(replyMessageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500); // Delay in milliseconds

    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Helper function to create a message element
function createMessageElement(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  return messageElement;
}


// Placeholder function to generate automated replies
function generateReply(userMessage) {
  userMessage = userMessage.toLowerCase(); // Convert user message to lowercase for easier comparison

  // Define rules and corresponding replies
  const rules = [
    { keyword: 'hello', reply: 'Hi there! How can I help you?' },
    { keyword: 'how are you', reply: "I'm just a bot, but thanks for asking!" },
    { keyword: 'bye', reply: 'Goodbye! Have a great day!😊' },
    // Add more rules as needed
  ];

  // Search for a matching rule based on keywords
  for (const rule of rules) {
    if (userMessage.includes(rule.keyword)) {
      return rule.reply;
    }
  }

  if (userMessage.includes('calculate')) {
    try {
      const expression = userMessage.replace('calculate', '').trim();
      const result = math.evaluate(expression);

      return `The result of ${expression} is ${result}`;
    } catch (error) {
      return "I'm sorry, I couldn't calculate that.";
    }
  }
  else{
  return "I'm not sure how to respond to that.";
}}

// Function to clear chat messages
// Function to clear chat messages with animation
function clearChat() {
  const chatMessages = document.querySelector('.chat-messages');
  
  // Add the black hole animation class
  chatMessages.classList.add('spiral');

  // Remove all child elements (chat messages) after the animation completes
  setTimeout(() => {
    chatMessages.innerHTML = '';
    // Remove the black hole animation class
    chatMessages.classList.remove('spiral');
  }, 1500); // Animation duration in milliseconds
}


// Event listener for the "Clear Chat" button




// Event listener
document.getElementById('clear-button').addEventListener('click', clearChat);
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
