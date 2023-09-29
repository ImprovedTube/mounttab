
const connectToSocket = () => {
    const socket = new WebSocket("ws://localhost:3030/hello/tyler"); 
    socket.onopen = () => { 
        console.log("Connected to socket");
    }
    socket.onclose = () => {
        console.log("Disconnected from socket");
    }
    socket.onmessage = (event) => {
        console.log("Message received", event.data);
    }

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log("Message received", message);
    });
}

connectToSocket();
