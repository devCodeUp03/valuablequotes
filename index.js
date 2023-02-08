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
     "The anger that arises on seeing injustice becomes a cause of injustice, unless it is regulated with intelligence and guided towards transcendence.",
     "Desire may never end, but it can have a perfect end - when directed toward that One whose desirability has no end, the very endlessness of the desire fuels the endlessness of delightful love.",
     "Disciplined life is a sure way to almost zero defect life.",
     "If we keep doing whatever we like, we end up disliking ourselves - select a worthy like and stick to it so that we can do something worthwhile and thereby become someone we like.",
     "To be shortsighted is bad; to be shortsighted when we have the responsibility to be farsighted is worse; to be shortsighted when we have the ablility to be farsighted is the worst.",
     "Humility means that one should not be anxious to have the satisfaction of being honoured by others.",
     "We generate fear while we sit. We overcome them by action.",
     "Humility means to focus on how we can serve, no on what we deserve.",
     "Do no place limits in your bhakti because you are serving to one who has no limits.",
     "To live a good life, worry not about its longevity; work on its quality by perceiving and pursuing spiritual purpose.",
     "It is better to understand a little than to misunderstand a lot.",
     "Suffering is sent to remind us to turn our thoughts towards God, who will give us solace.",
     "Riches are not from abundance of worldly good but from a contented mind.",
     "Yesterday is a history. Tomorrow is a mystery. And Today? It is a gift. That is why we call it the present.",
     "Quality is never an accident, it is always the result of intelligent effort.",
     "One cannot have divine vision without becoming divine.",
     "Seeking news of the outer world makes us better-informed; seeking news of the inner world makes us better.",
     "We don't let our phone determine our purpose - we determine our pupose and use our phone to pursue that purpose; similarly, we can't let our mind determine our purpose - we need to determine our purpose and then use our mind to pursue that purpose.",
     "The more we present our consciousness to krishna in the present, the more we realise how he is present in our consciousness.",
     "We are not made for material comfort and pleasure; rather we are unmade by material comfort and pleasure - the more we desire them, the more they divert us from our deeper values and higher purposes.",
     "Humilition is different from humility just as starving is different from fasting. Humilition is imposed and painful,  where humility is chosen and purposeful.",
     "Just because something catches our mind's attention doesn't mean it has to catch our attention - strengthen our intelligence to focus on what matters to us, not on what matters to our mind.",
     "We are limited in the amount of help we can give to others. It is far better to help a soul come closer to God, than all help received.",
     "Humility doesn't mean downplaying or denying our abilities; it means acknowledging that our abilities come from source beyond us and are meant for a purpose bigger than us.",
     "Amid problems, the ungodly forget God and seek solutions solely through their mundane skills; the godly turn to God for guidance and then seek solutions by using their God-given gifts in a devotional mood.",
     "To live spiritually as the Gita recommends, we need to stand apart from those who devaluse spirituality and stay aligned with those who value spirituality.",
     "To better manage our emotions, use our intelligence to remember and realize that we are the sky within which emotions come and go.",


]

button.addEventListener("click", ()=>{
    randomNumber = Math.floor(Math.random() * arrayOfQuotes.length);

    quotes.innerHTML = arrayOfQuotes[randomNumber];
});


noOfQuotes.innerHTML = arrayOfQuotes.length;
