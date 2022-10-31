
function randomNumber(num) {
    // Generates a random number from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }





const famousQuotes = [
    // Array of nested objects that represent quote categories, authors and quotes
    {
        // Each object has a category, several authors and quotes from those authors
        category : motivational,
        authors : [
            // Authors is formed by an array of objects 
            {
                author: "Walt Disney",
                quote: "If you can dream it, you can do it"
            },
            {
                author: "H.G. Wells",
                quote: "If you fell down yesterday, stand up today."
            },
            {
                author: "Lao Tzu",
                quote: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step."
            },
            {
                author: "Winston Churchill",
                quote: "If you're going through hell, keep going."
            },
            {
                author: "Nelson Mandela",
                quote: "It always seems impossible until it's done."
            },
            {
                author: "Life is 10% what happens to you and 90% how you react to it.",
                quote: "Charles R.Swindoll"
            },
            {
                author: "Aristotle",
                quote: "Quality is not an act, it is a habit."
            },
            {
                author: "George S.Patton",
                quote: "A good plan violently executed now is better than a perfect plan executed next week."
            },
            {
                author: "Og Mandino",
                quote: "Always do your best. What you plant now, you will harvest later."
            },
            {
                author: "Theodore Roosevelt",
                quote: "Keep your eyes on the stars, and your feet on the ground."
            },
            {
                author: "Benjamin Franklin",
                quote: "Well done is better than well said."
            },
            {
                author: "Walter Elliot",
                quote: "Perseverance is not a long race; it is many short races one after the other."
            },
            {
                author: "Johann Wolfgang von Goethe",
                quote: "Knowing is not enough; we must apply. Willing is not enough; we must do."
            },
            {
                author: "W. Clement Stone",
                quote: "Aim for the moon. If you miss, you may hit a star."
            },
            {
                author: "Zig Ziglar",
                quote: "What you get by achieving your goals is not as important as what you become by achieving your goals"
            },
            {
                author: "Ayn Rand",
                quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others."
            },
            {
                author: "Kyle Chandler",
                quote: "Opportunity does not knock, it presents itself when you beat down the door."
            },
            {
                author: "Robert H. Schuller",
                quote: "Problems are not stop signs, they are guidelines."
            }

        ],
    },
    {
        category : inspirational,
        authors : [
            {
                author: "Francis of Assisi",
                quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
            },
            {
                author: "Milton Berle",
                quote: "If opportunity doesn't knock, build a door."
            },
            {
                author: "Theodore Roosevelt",
                quote: "Believe you can and you're halfway there."
            },
            {
                author: "Jimmy Dean",
                quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination."
            },
            {
                author: "Warren Buffett",
                quote: "Someone is sitting in the shade today because someone planted a tree a long time ago."
            },
            {
                author: "Maya Angelou",
                quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."
            },
            {
                author: "Muhammad Ali",
                quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'"
            },
            {
                author: "George Eliot",
                quote: "It is never too late to be what you might have been."
            },
            {
                author: "Joseph Campbell",
                quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us."
            },
            {
                author: "Bear Bryant",
                quote: "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards."
            },
            {
                author: "Henry David Thoreau",
                quote: "If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away."
            },
            {
                author: "Robert Frost",
                quote: "Two roads diverged in a wood and I - I took the one less traveled by, and that has made all the difference."
            },
            {
                author: "Ralph Waldo Emerson",
                quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."
            },
            {
                author: "Isaac Newton",
                quote: "If I have seen further than others, it is by standing upon the shoulders of giants."
            },
            {
                author: "Jack Dempsey",
                quote: "A champion is someone who gets up when he can't."
            },
            {
                author: "Buddha",
                quote: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
            },
            {
                author: "Lao Tzu",
                quote: "To the mind that is still, the whole universe surrenders."
            },
            {
                author: "Robin Williams",
                quote: "No matter what people tell you, words and ideas can change the world."
            }
        ],
    },
    {
        category : hard_pills,
        authors : [
            {
                author: "Seneca",
                quote: "We suffer more often in imagination than in reality"
            },
            {
                author: "Seneca",
                quote: "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful."
            },
            {
                author: "Seneca",
                quote: "If a man knows not to which port he sails, no wind is favorable."
            },
            {
                author: "Seneca",
                quote: "It is not the man who has too little, but the man who craves more, that is poor."
            },
            {
                author: "Seneca",
                quote: "If you live in harmony with nature you will never be poor; if you live according what others think, you will never be rich."
            },
            {
                author: "Socrates",
                quote: "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable"
            },
            {
                author: "Benjamin Franklin",
                quote: "Look before, or you'll find yourself behind."
            },
            {
                author: "Benjamin Franklin",
                quote: "Remember not only to say the right thing in the right place, but far more difficult still, to leave unsaid the wrong thing at the tempting moment."
            },
            {
                author: "Friedrich Nietzsche",
                quote: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you."
            },
            {
                author: "Friedrich Nietzsche",
                quote: "When we are tired, we are attacked by ideas we conquered long ago."
            },
            {
                author: "Friedrich Nietzsche",
                quote: "The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind."
            },
            {
                author: "Friedrich Nietzsche",
                quote: "No one can construct for you the bridge upon which precisely you must cross the stream of life, no one but you yourself alone."
            },
            {
                author: "Friedrich Neitzsche",
                quote: "Every deep thinker is more afraid of being understood than of being misunderstood."
            },
            {
                author: "Socrates",
                quote: "He who is not contented with what he has, would not be contented with what he would like to have."
            },
            {
                author: "Socrates",
                quote: "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down."
            },
            {
                author: "Socrates",
                quote: "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."
            },
            {
                author: "Socrates",
                quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
            },
            {
                author: "Socrates",
                quote: "If you want to be a good saddler, saddle the worst horse; for if you can tame one, you can tame all."
            },
            {
                author: "Descartes",
                quote: "To know what people really think, pay attention to what they do, rather than what they say."
            },
            {
                author: "Descartes",
                quote: "Nothing is more fairly distributed than common sense: no one thinks he needs more of it than he already has."
            }
        ],
    }
]















 