function setup() {
  createCanvas(800, 800);

  /* for(var i=0; i < 100 ; i= i+1 )
  {
    if(i % 5 == 0)
    {
      console.log (i)
    }
  
  }
  var arr = [10,23,21,12,14]
  var score = 0
  for (var i = 0; i<arr.length; i=i+1){
    score = score + arr[i]
  }
  console.log(score)  */

  checkEven()
  problem2()
  problem3()
  //checkSquare()
}


function draw() {
  background("black");
}

function checkEven() {
  var arr = [23, 42, 23, 12, 31, 43, 13, 42, 25]
  var score = 0
  for (var i = 0; i < arr.length; i = i + 1) {
    if (i % 2 == 1 && arr[i] % 2 == 0) {
      score = score + arr[i]
    }
  }
  console.log(score)
}

function problem2() {
  var arrA = [10, 20, 30, 40, 50]
  var arrB = [1, 2, 3, 4, 5]
  var arrC = []
  var score = 0
  for (var i = 0; i < arrA.length; i = i + 1) {
    score = arrA[i] + arrB[i]
    arrC.push(score)
  }
  console.log(arrC)
}

function problem3() {
  var arrA = [4, 5, 3, 6, 7, -2, -6, 3, -5]
  var arrP = []
  var arrN = []

  for (var i = 0; i < arrA.length; i = i + 1) {
    if (arrA[i] % 2 == 0 && arrA[i] > 0) {
      arrP.push(arrA[i])
    }
    if (arrA[i] % 2 == -1) {
      arrN.push(arrA[i])
    }
  }
  console.log(arrP)
  console.log(arrN)
}

/* function checkSquare() {
  var arr = [2, 4, 2, 1, 3, 4, 1, 4, 2]
  var arr2 = []
  var score = 0
  for (var i = 0; i < arr.length; i = i + 1) {
    arr2.push(arr[i]*arr[i])
  }
  console.log(arr2)
} */