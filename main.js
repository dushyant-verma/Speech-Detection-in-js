//  Check for browser support

if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support speech recognition. Please use google Chrome');
    // It will check if browser supports or not 
} else {

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false; // if true, the recognition continues even when the user pauses
    recognition.interimResults = false; // It true, it returns interim results
    recognition.lang = 'en-US';  // Language of the recognition


    // Get references to HTML elements
    const startButton = document.getElementById('startButton');
    const resultParagraph = document.getElementById('result');



    //  Event Listener for the start button 

    startButton.addEventListener('click', () => {

        recognition.start();
    });

    // Event fired when the recognition service return a result 

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;   //  main logic is here 
        resultParagraph.textContent = `You said${speechResult}`;

    };

    //  Event fired when the recognition service starts listening

    recognition.onstart = () => {
        resultParagraph.textContent = "Listening...";


    };

    //  Event fired when the recognition service encounters an error
    recognition.onerror = (event) => {

        resultParagraph.textContent = `Error occurred in recognition: ${event.error}`;
    };

    // Event fired when the recognition service stops listening

    recognition.onend = () => {
        resultParagraph.textContent += `(End of Speech)`;
    };

}