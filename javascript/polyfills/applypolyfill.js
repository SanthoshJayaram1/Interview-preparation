/*  
apply method and Its Polyfill:-
apply method allows us to use the methods of another object or outside methods, apply method is used for function borrowing.

apply method takes first argument as object, and rest arguments as array.
Note - apply method executes the borrowed function immediately unlike bind ().
*/

getPlayerInfo = function (role, country) {
    return `${this.firstName} ${this.lastName}, ${role} from ${country}`;
  };
  
  const player1 = {
    firstName: "Virat",
    lastName: "Kohli",
  };
  
  const player2 = {
    firstName: "Hardik",
    lastName: "Pandya",
  };
  
  console.log(getPlayerInfo.apply(player1, ["Batsman", "India"]));
  console.log(getPlayerInfo.apply(player2, ["All-Rounder", "India"]));
  
  Function.prototype.customApply = function (context, args = []) {
    if (!Array.isArray(args)) {
      throw new Error(
        "Reminder, apply method takes array of arguments (2nd to nth)"
      );
    }
    let currentContext = context || globalThis;
    
    const uniqueID = 'fn_' + Date.now(); // Generate a unique property name.
    currentContext[uniqueID] = this; // Add the function to the 'context' object.

    let result = currentContext[uniqueID](...args);
    delete currentContext[uniqueID];
    return result;
  };
  
  console.log(getPlayerInfo.customApply(player1, ["Batsman", "India"]));
  console.log(getPlayerInfo.customApply(player2, ["All-Rounder", "India"]));