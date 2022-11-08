

// Parent class 

class Media{
    constructor(title){
       
       this._title = title;
       this._isCheckedOut = false;
       this._ratings = [];
       
    };

    // Getters

    get title(){
        return this._title;
    };

    get isCheckedOut(){
        return this._isCheckedOut;
    };

    get ratings(){
        return this._ratings;
    };

    set isCheckedOut(value){
        this._isCheckedOut = value;
    };

    toggleCheckOutStatus(){
        // If _checkedOut status is true, turn it false, if it's true, turn it false.
        this.isCheckedOut = !this.isCheckedOut;
    };

    getAverageRating(){
        // Get the average value of the given array (Ratings)
        return this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length;
    };

    addRating(value){
        // Extra
        if(value >= 1 && value <= 5){
            this.ratings.push(value);
        }else{
            console.log("Rating must be a number between 1 and 5");
        };

        
    };
};


// Book class, inherit from Media.

class Book extends Media{
    constructor(author,title,pages){
        // With super we call the constructor method of it's parent
        super(title);
        this._author = author;
        this._pages = pages;

        // Fill catalog 

        Catalog._books.push(`${this._title}, ${this._author}`);
    };

    get author(){
        return this._author;
    };

    get pages(){
        return this._pages;
    };

};


class Movie extends Media{
    constructor(director,title,runTime){
        // With super we call the constructor method of it's parent
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = []

        Catalog._movies.push(`${this._title}, ${this._director}`);
    };

    get director(){
        return this._director;
    };

    get runTime(){
        return this._runTime;
    };

    addCast(name){
        return this._movieCast.push(name);
    }

};

// Extra building

class CD extends Media{
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = []

        Catalog._cds.push(`${this._title}, ${this._artist}`);

    };

    get artist(){
        return this._artist;
    };

    get songs(){
        return this._songs;
    };

    addSongs(songs){
        this._songs.push(songs)
    };

    shuffle(){
        
        // Randomly sort the songs of the album
        return this._songs.sort((a, b) => 0.5 - Math.random());
    }

};

const Catalog = new class {
    constructor(){
        this._books = [];
        this._movies = [];
        this._cds = []
    }

    get books(){
        return this._books;
    };

    get movies(){
        return this._movies;
    };

    get cds(){
        return this._cds;
    }

    addBook(book){
        this._books.push(book)   
    };
    
    addMovies(movie){
        this._movies.push(movie)
    };
    
    addCds(cd){
        this._cds.push(cd)
    };
};



//Creating an instance of the Book

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//Checking out true

historyOfEverything.toggleCheckOutStatus();


historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// console.log(historyOfEverything.getAverageRating());

// Creating an instance of Movie

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());


// Creating an instance of CD

const nevermind = new CD("Nirvana", "Nevermind");

//Adding songs

let neverMindSongs = ['Smells Like Teen Spirit', 'In Bloom', 'Come as you are', 'Breed', 'Lithium', 'Polly', 'Territorial  Pissings', 'Drain You', 'Lounge Act', 'Stay Away', 'On a Plain', 'Somehting in The Way']

for(let i = 0; i < neverMindSongs.length; i++){
    nevermind.addSongs(neverMindSongs[i]);
}

// console.log(nevermind.shuffle());


// Logging catalog:

console.log(Catalog.cds);
console.log(Catalog.movies);
console.log(Catalog.books);