numbers = [1, 2, 3, 4];
// const addOne=numbers.map(function(item){
//     return item+1;
// })
function addOne(numbers) {
  const newArray = [];
  numbers.forEach(function (item) {
    newArray.push(item + 1);
  });
  return newArray;
  //return numbers.map(item=>item+1)
}

function addExclamation(numbers) {
  const newArray = [];
  numbers.forEach(function (item) {
    newArray.push(item + "!");
  });
  return newArray;
  //return numbers.map(item=>item+1)
}

function addOneByMap(numbers) {
  return numbers.map((item) => item + 1);
}

function addQuestion(strings) {
  return strings.map((item) => item + "?");
}

function forLoopTwoToThe(integers) {
  const newArray = [];
  integers.forEach(function (item) {
    newArray.push(Math.pow(item, 2));
  });
  return newArray;
  //return integers.map(item=>Math.pow(item,2))
}

function typeNum(array) {
  return array.filter((item) => typeof item === "number");
}

function containsAnd(strings) {
  return strings.filter((item) => item.includes("and"));
}

function oddValues(array) {
  return array.filter((item) => item % 2 == 1);
}

function addValues(array) {
  let sum = 0;
  return array.reduce(function (
    previousValue,
    currentValue,
    currentIndex,
    array
  ) {
    return (sum += currentValue);
  },
  " ");
}

function countNumberOfElements(array) {
  return array.reduce(function (
    previousValue,
    currentValue,
    currentIndex,
    array
  ) {
    return currentIndex + 1;
  },
  " ");
}

//---------------object---------------

function checkValues(obj, value) {
  let result= Object.keys(obj).find(item=>obj[item]===value);
  return result==null ? false:true;
}
 function getCourseKeys(courseInfo){
    let result= Object.keys(courseInfo);
    return result;
 }
 function updateNumbers(object){
    let res = []
    for (const key in object) {
       res.push(key);
       res.push(+object[key])
    }
    return res;
 }

function PassedOrFailed(grades){
    for (const key in grades) {
        if(grades.grade>=50) {
            return "The student have passed";
        }else {
            return "The student have failed"
        }
    }
}

function totalCharacters(array){
    return array.reduce(function (previousValue,currValue){
      return previousValue+=currValue.length;
    } , 0)
}

function houseSize(array){
  let obj={house};
  array.forEach(function(item){
    obj.house=item;
  })
  return obj;
}

function createDog(name,dogBreed,furColor){
  let uniqueDogs=new set(); 
  uniqueDogs.name=name;
  uniqueDogs.breed=dogBreed;
  uniqueDogs.color=furColor;
  return uniqueDogs;
}