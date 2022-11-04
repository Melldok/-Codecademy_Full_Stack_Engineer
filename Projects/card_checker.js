// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];



const invalidAll = [invalid1, invalid2, invalid3, invalid4, invalid5]
const validAll = [valid1, valid2, valid3, valid4, valid5]


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const arrayCheck = [4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8]

// Add your functions below:

//Returns true when array contains digits of a valid credit card, false when invalid.
const validateCred = (array) => { 


    function getEveryNth(arr, nth) {
        const result = [];
      
        for (let i = 0; i < arr.length; i += nth) {
          result.push(arr[i]);
        }
      
        return result;
      }

    //Filters every checker number so i can be summed to the multiplied ones
    let checkerNumbers = getEveryNth(array.reverse(), 2);
   

    //Filters every other element in the array so it can be multiplied
    let secondNumbers = array.filter((element, index) => {
        return index % 2 !== 0;
        
      })
    
    secondNumbers.reverse()
    
    // Array with all the numbers that need processing (Every number that is not a checker number)
    let processed = []

    for(let i = 0; i < secondNumbers.length; i++){
        
        processed.push(secondNumbers[i] * 2)
       
        for(let j = 0; j < processed.length; j++)
        if(processed[j] > 9){
            processed[j] = processed[j] - 9;
        }
        
    }

    //Concatenate the two final arrays

    let finalArray = processed.concat(checkerNumbers);
    // Sum all the numbers
    finalArray = finalArray.reduce( (x,y) => x+y, 0);
    if(finalArray % 10 == 0){
        return true;
    }else{
        return false;
    }

    

    
}


// Iterate through a given array and returns invalid cards
const findInvalidCards = (nestedArray) => {
    
    let invalid = []

    for(let i = 0; i < nestedArray.length; i++){
      if(validateCred(nestedArray[i]) === false){
        invalid.push(nestedArray[i].reverse())
      }
    }

    return invalid
} 

const invalidCards = findInvalidCards(batch)



//Iterate through all invalid cards and returns companies names

const idInvalidCardCompanies = (nestedArray) => {
    
    
    let companies = []
    
    for(let i = 0; i < nestedArray.length; i++){
        if(nestedArray[i][0] === 3){
            companies.push("Amex (American Express)");
        }else if(nestedArray[i][0] === 4){
            companies.push("Visa");
        }else if(nestedArray[i][0] === 5){
            companies.push("Mastercard");
        }else if(nestedArray[i][0] === 6){
            companies.push("Discover");
        }else{
            console.log("Company not found")
        }
       
    }
    
    return companies
    
}

const companies = [...new Set(idInvalidCardCompanies(invalidCards))];

console.log(companies)


