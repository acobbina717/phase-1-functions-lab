// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    let hq = 42
    let distance = num - hq
    return Math.abs(distance)
}
// distanceFromHqInBlocks(43)

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let feet = Math.abs((start - destination) * 264)
    return feet
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let feet = distanceTravelledInFeet(start, destination)

    if (feet < 400) {
        return 0
    } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02
    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else if (feet > 2500) {
        return 'cannot travel that far'
    }
}