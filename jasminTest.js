<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.css" link rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine-html.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/boot.js"></script>
</head>
<body>
/*
 Question 1. 
 Write a function called replaceWith that takes in a string,
 a character to replace and a character to replace it with and
 returns the string with the replacements. Write tests to make 
 sure this is case sensitive.
*/

describe("replaceWith",function(){
    it("is a string replacement",  function(){
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz")
    });
    it('is case sensitive', function(){
        expect(replaceWith("Foo", "F", "B")).toEqual("Boo")
    });
})

function replaceWith(str,char1,char2){
    var replace=''
    for(var i=0; i<str.length; i++){
        if(str[i]===char1){
        replace+=char2
        continue;
        }
    replace+=str[i]
    }
     return replace
};     


/*
Question 2.
Write a function called expand which takes an array
and a number and returns a copy of the array with
as many numbers as specified.
/*
describe("expand",function(){
    it("if second argument is 1",function(){
        expect(expand(["foo", "test"],1)).toEqual(["foo","test"])
    });
})

function expand(arr,val){
    var emptyArr=[];
    for(var i=0;i<arr.length; i++){
        for(var j=0; j<val; j++){
            emptyArr.push(arr[i])
        }
    }
    return emptyArr;
};

/*
Question 3.
Write a function called acceptNumbersOnly which takes in any number of
arguments and returns true if all of them are numbers. Watch out for NaN - it is
a typeof "number" !
acceptNumbersOnly ( 1 , "foo" ) // false
acceptNumbersOnly ( 1 , 2 , 3 , 4 , 5 , 6 , 7 ) // true
*/
describe("acceptNumbersOnly",function(){
    it("true if all arguments are numbers",function()
    {
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(true)
    });
    it("false if NaN is passed",function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toEqual(false)
    });
    it("false if string is passed",function(){
        expect(acceptNumbersOnly(1,"foo")).toEqual(false)
    });
    })

function acceptNumbersOnly() {
    for (var i=0; i <arguments.length; i++) {
        if (typeof(arguments[i]) !== 'number' || Number.isNaN(arguments[i])) {
            return false
        }
    }
    return true
}

/*
Question 4.
Write a function called mergeArrays which takes in two arrays
and returns one array with the values sorted
mergeArrays ([ 2 , 1 ],[ 3 , 4 ]) // [1,2,3,4]
*/

describe("mergeArrays",function(){
    it("sorted combined arrays",function(){
        expect(mergeArrays([ 2 , 1 ],[ 3 , 4 ])).toEqual([1,2,3,4])
    });
}) 


function mergeArrays(arr1,arr2){
    var combinedArr=arr1.concat(arr2)
    return combinedArr.sort()
};

/*
Question 5.
Write a function called mergeObjects which takes in two objects and return an
object with the keys and values combined. If the second parameter has the
same key - it should override first one. There is a built in function called
Object.assign - research it, but do not use it, try to do this on your own!
var obj1 = {
name : "Foo" ,
num : 33
}
var obj2 = {
test : "thing" ,
num : 55
}
mergeObjects (obj1, obj2)
{
name: "Foo",
test: "thing",
num: 55
}
*/

describe("mergeObjects",function(){
    it("returns two merged objects",function(){
        var obj1= {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        }   
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        })

    })
});


function mergeObjects(obj1,obj2){
    var obj3={...obj1,...obj2}
    return obj3;
};
</body>
</html>