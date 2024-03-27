// Code your solution in this file!

//return first two drivers()
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  
  //return last two drivers()
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  };
  
  //selecting drivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  //creating a fare multiplier()
  const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    }
  };
  
  //fare doubler()
  const fareDoubler = createFareMultiplier(2);

  //fare tripler()
  const fareTripler = createFareMultiplier(3);
  

  //selecting different drivers
  const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
  };
