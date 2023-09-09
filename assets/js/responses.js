function getBotResponse(input) {
    //try to respones
    
    if (input == "sale now item") {
        return "Go and check the expertise",window.location.href = "file:///C:/krupa/application/ule/website/new%20website/100%25/html/Expertise.html";;
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Our team is committed to providing you with 24/7 support and will respond to your question as soon as possible. Thank you.! ";
    }
}