// Code your solution here
function findMatching (drivers, searchName) {
    return drivers.filter(driver => driver.toLowerCase().includes(searchName.toLowerCase()));
  }
  function fuzzyMatch(drivers, searchName) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchName.toLowerCase()));
  }
  
    function matchName(drivers, searchName) {
        return drivers.filter(driver => driver.name.toLowerCase() === searchName.toLowerCase());
      }
      

    