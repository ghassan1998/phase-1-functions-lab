// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue<42){
        return (42-someValue)
    }else{
        return (42-someValue)*-1
    }
  }

  function distanceFromHqInFeet(someValue) {
    let x=distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    let y=x*264
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
   if (y<0){
    return y*-1
   }else{
    return y
   }
      // the return value of distanceFromHqInBlocks can then be used to calculate feet
    
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if ((destination-start)<0){
        return (destination-start)*-264
    }else {
        return (destination-start)*264
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceInFeet=distanceTravelledInFeet(start,destination)
    if (distanceInFeet<400){
        return 0
    }else if(distanceInFeet>400&&distanceInFeet<2000){
        return (distanceInFeet-400)*0.02
    }else if (distanceInFeet>2000&&distanceInFeet<2500){
        return 25
    }else if (distanceInFeet>2500){
        return 'cannot travel that far'
    }
  }