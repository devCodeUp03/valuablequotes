let quotes = document.querySelector(".quotes");
let button = document.querySelector(".next-quote");
let noOfQuotes = document.querySelector("#no-of-quotes");

const arrayOfQuotes = [
     "Learning to evalutate activity is essential to morality, learning to not equate activity with identity is essential to spirituality.", 
     "If we disobey our mind, it goes crazy; if we obey our mind, we go crazy.",
     "To protect ourselves from self-destructive indulgence, we need to define boundaries clearly so that we can defend them competently.",
     "No matter how dangerous the future may be, it can't hurt us in the present, unless we let it - just stay spiritually educated and devotionally connected in the present.",
     "The ropes that bind physically don't trap us as much as the attachments that bind mentally.",
     "The best way to come close to divine is to help others come close to divine - our compassion towards others attracts God's compassion towards us.",
     "Seek not to be the one at the center, seek to be with the one at the center.",
     "Love of God makes you love all the mankind and hate none. Love of one individual makes you love only one and hate many.",
     "When emotions fog our inner world, invoke the sun of spiritual wisdom.",
     "Only persons who are joining this movement, they are intelligent, and others are not intelligent?_ that is our challenge. Now you can defend on behalf of those who do not accept this proposal. This is my challenge. This is a fact.",
     "The purpose of karma is not retribution, but reformation - when facing adversities, ask not, "+" What did I do to deserve this situation?" + "; ask, "+ "What can I learn from this situation about my identity and purpose?",
     "The things we think we own are just on loan - use it to attain an enriched consciousness that will forever be our own.",
     "Don't struggle to be remembered by those who will soon forget you; strive to remember the One who never forgets you.",
     "Words shape worlds - watch your words.",
     "We can't be entirely anxiety-free, but we can make anxiety worthwhile by taking up meaningful responsibility.",
     

]

button.addEventListener("click", ()=>{
    randomNumber = Math.floor(Math.random() * arrayOfQuotes.length);

    quotes.innerHTML = arrayOfQuotes[randomNumber];
});


noOfQuotes.innerHTML = arrayOfQuotes.length;
