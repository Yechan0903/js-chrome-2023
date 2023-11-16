const quotes = [
    {
        quote: "Cake",
        author: "yeji"
    },
    {
        quote: "Dalla dalla",
        author: "yuna"
    },
    {
        quote: "wannabe",
        author: "ryujin"
    },
    {
        quote: "icy",
        author: "chereung"
    },
    {
        quote: "Not shy",
        author: "lia"
    },
    {
        quote: "In the morning",
        author: "yeThung"
    },
    {
        quote: "Loco",
        author: "ryuThang"
    },
    {
        quote: "Bet on me",
        author: "01s"
    },
    {
        quote: "None of my business",
        author: "ThangThung"
    },
    {
        quote: "Let it be summer",
        author: "YoungK"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;