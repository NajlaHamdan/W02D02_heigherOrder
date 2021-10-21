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
  let result = Object.keys(obj).find((item) => obj[item] === value);
  return result == null ? false : true;
}
function getCourseKeys(courseInfo) {
  let result = Object.keys(courseInfo);
  return result;
}
function updateNumbers(object) {
  let res = [];
  for (const key in object) {
    res.push(key);
    res.push(+object[key]);
  }
  return res;
}

function PassedOrFailed(grades) {
  for (const key in grades) {
    if (grades.grade >= 50) {
      return "The student have passed";
    } else {
      return "The student have failed";
    }
  }
}

function totalCharacters(array) {
  return array.reduce(function (previousValue, currValue) {
    return (previousValue += currValue.length);
  }, 0);
}

function houseSize(array) {
  const newArray = [];
  for (i = 0; i < array.length; i += 2) {
    const obj = {};
    obj.house = array[i];
    obj.size = array[i + 1];
    newArray.push(obj);
  }
  return newArray;
}

function createDog(name, dogBreed, furColor) {
  const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  for (let dogName in uniqueDogs) {
    if (dogName == name) {
      return "the dog is not unique";
    }
    name: {
      breed: dogBreed;
      color: furColor;
    }
  }
  return "Added the dog successfully";
}
