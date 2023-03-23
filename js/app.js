// Function 1
function multiplyByFive(figure1, figure2) {
    let number = figure1 + figure2;
    let result = number * 5;
    return result;
  }
  
  // Function 2
  function GreaterThanTen(string) {
    if (string.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log(multiplyByFive(2, 3)); // should log 25 since (5 * (2 + 3) = 25);
  console.log(multiplyByFive(10, 20)); // should log 150 since(5 * (10 + 20) = 150);
  console.log(multiplyByFive(-5, 7)); // should log 10 since (5 * (-5 + 7) = 10);

console.log(GreaterThanTen("hello world")); // should log true because 11 is greater than 10 (11 => 10);
console.log(GreaterThanTen("hi")); // should log false because 2 is lesser than 10 (2 <= 10);
console.log(GreaterThanTen("alex")); // should log false because 10 is not greater than 10  (4 <= 10);
