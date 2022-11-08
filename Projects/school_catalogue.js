




class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;

        
    };


    get name(){
        return this._name;
    };

    get level(){
        return this._level;
    };

    get numberOfStudents(){
        return this._numberOfStudents;
    };

    set numberOfStudents(value){
        // Error validation 
        if(value.isNaN()){
            console.log("Number of students must be a number")
        }else{
            this._numberOfStudents = value;
        }
        
    };

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level`)
    };

    // Static method (Only accesible by the class school itself. It will randomly select a teacher)
    static pickSubstituteTeacher(substituteTeachers){
        let randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacher]; 
    };



};

class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickUpPolicy){
        // Parent class has 3 arguments, we are inhereting name and number of students getters and passing primary as the second argument of the parent
       super(name, 'primary', numberOfStudents);
       this._pickUpPolicy = pickUpPolicy;

       SchoolCatalog._primarySchools.push(this._name);
    }

    get pickUpPolicy(){
        return this._pickUpPolicy
    }
}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
       
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;

        SchoolCatalog._highSchools.push(this._name);

    };

    get sportsTeams(){
        return this._sportsTeams;
    }
};

class MiddleSchool extends School{
    constructor(name, numberOfStudents){
        super(name, 'middle', numberOfStudents);
        SchoolCatalog._middleSchools.push(this._name);

    };
};

// Extra

const SchoolCatalog = new class{
    constructor(name){
        this._middleSchools = [];
        this._highSchools = [];
        this._primarySchools = [];
    }

    get middleSchools(){
        return this._middleSchools;
    };

    get highSchools(){
        return this._highSchools;
    };

    get primarySchools(){
        return this._primarySchools;
    };
};


const lorraineHansbury = new PrimarySchool('Lorraine Hasbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' )


// lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])




// console.log(alSmith.sportsTeams);



const alSmith = new HighSchool('Al E.Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);


console.log(SchoolCatalog.highSchools)