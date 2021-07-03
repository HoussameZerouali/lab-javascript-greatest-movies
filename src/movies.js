


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(myArray){
  const directorsArray = myArray.map(function (myArray) {
    return myArray.director
    
  }
  )  
  return directorsArray;
}                             




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies (myArray){
  const filteredArray = myArray.filter(movie =>{
    return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") != -1;
  })
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(myArray) {
  
  const scoreArray = myArray.map(movie =>{
    return movie.score
  }) 
  const filteredScore = scoreArray.filter(element =>{
    if (typeof(element) === "number"){
      return element
    }
  })
  const sum = filteredScore.reduce((acc,currentValue) => {
    return acc + currentValue
  },0)
  if(sum === 0){
    return sum
  }else{
    return Math.round((sum/scoreArray.length) * 100) / 100
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(myArray) {
  const dramaArray = myArray.map(movie =>{
    if (movie.genre.indexOf('Drama') != -1 ){
      return movie.score;
    }
  })
  const filteredArray = dramaArray.filter(element => {
    if(typeof(element) === "number"){
      return element
    }
  })
  const sum = filteredArray.reduce((acc,currentValue) => {
    return acc + currentValue
  },0)
  if(sum === 0){
    return sum
  }else{
    return Math.round((sum/filteredArray.length) * 100) / 100
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(myArray) {
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
