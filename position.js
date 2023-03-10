const {removeEmpty} = require("./reg");

function findPosition(positions) {
  const arr = positions.split(";");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // remove empty string
    const newItem = removeEmpty(arr[i]);
    newArr.push(newItem);
  }
}
findPosition("A10; S10;   W20");
