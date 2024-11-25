const quotes = [
    {
        quote: "There is nothing either good or bad, but thinking makes it so",
        authorName: "William Shakespear, Hamlet",
        authorImg: "./imgs/shakespear.jpg"
    },
    {
        quote: "It is hard enough to remember my opinions, without also remembering my reasons for them!",
        authorName: "Friedrich Nietzsche",
        authorImg: "./imgs/nietzche.jpg"
    },
    {
        quote: "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
        authorName: "Bertrand Russell",
        authorImg: "./imgs/russell.jpg"
    },
    {
        quote: "Music expresses that which cannot be put into words and that which cannot remain silent",
        authorName: "Victor Hugo",
        authorImg: "./imgs/hugo.jpg"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        authorName: "Albert Einstein",
        authorImg: "./imgs/albert-einstein.avif"
    },
    {
        quote: "Somewhere, something incredible is waiting to be known.",
        authorName: "Carl Sagan",
        authorImg: "./imgs/sagan.jpg"
    },
    {
        quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        authorName: "Marie Curie",
        authorImg: "./imgs/marie.webp"
    },
    {
        quote: "All you need is love. But a little chocolate now and then doesn't hurt",
        authorName: "Charles M. Schulz",
        authorImg: "./imgs/charles-shulz.png"
    },
    {
        quote: "No matter how much suffering you went through, you never wanted to let go of those memories.",
        authorName: "haruki murakami",
        authorImg: "./imgs/murakami.webp"
    },
    {
        quote: "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind",
        authorName: " Virginia Woolf",
        authorImg: "./imgs/Virginia_Woolf.png"
    }
];

const quoteContent = document.querySelector('.quote-content');
const generateBtn = document.querySelector('.btn');
generateBtn.addEventListener('click', getRandomQuote);

let previousIndex = 0;
function getRandomQuote() {
    let imgIndex = Math.floor(Math.random() * 10);
    if (imgIndex === previousIndex) {
        getRandomQuote();
    } else {
        previousIndex = imgIndex;
        let content = `
            <div class="quote mb-5">
                <i class="fa-solid fa-quote-left fs-1"></i>
                ${quotes[imgIndex].quote}
                <i class="fa-solid fa-quote-right fs-1"></i>
            </div>
            <div class="image rounded-circle mx-auto mb-3" style="background-image: url(${quotes[imgIndex].authorImg})"></div>
            <div class="author">- ${quotes[imgIndex].authorName}</div>
        `
        quoteContent.innerHTML = content;
    };
}