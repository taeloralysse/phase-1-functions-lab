// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
    let blocks;
    if(pickupLocation > hqLocation){blocks = pickupLocation - hqLocation}
        else{blocks = hqLocation - pickupLocation}
        return blocks
}
function distanceFromHqInFeet(pickupLocation){
    const feet = (distanceFromHqInBlocks(pickupLocation)) * 264;
    return feet
}
function distanceTravelledInFeet(start, destination){
    let distance;
    if(destination > start){distance = (destination - start) * 264}
        else {distance = (start - destination) * 264}
    return distance
}
function calculatesFarePrice(start, destination){
    let fare;
    if(distanceTravelledInFeet(start, destination) < 400){fare = 0;}
        else if(distanceTravelledInFeet(start, destination) >= 401){fare = (distanceTravelledInFeet(start, destination) - 400) * 0.02;}
            if(distanceTravelledInFeet(start, destination) >= 2000){fare = 25}
            if(distanceTravelledInFeet(start, destination) >= 2500){fare = `cannot travel that far`}
        return fare
}