let arr=[]
console.log(arr);

// Access first and last Element

let arr1=[1,2,3,4,5]
let first=arr1[0];
let last=arr1[arr1.length -1];
console.log(first,last);

// Add  and remove an element to the end in new array

let arr2=[20,30,40,50];
arr2.push(60)
console.log(arr2);

let arr3=[20,30,40,50];
arr3.pop(50)
console.log(arr3);


// loop through an array in JavaScript

let arr4=[1,4,6,7,8]
for(let i=0; i<arr4.length;i++){
    console.log(arr4[i]);
}
let arr5=[1,4,6,7,8]

arr5.forEach(()=>{
    console.log(arr5);
})

// Output of this given code 

const arr6 = ['A', 'N', 'U'];
arr6[10] = 10;
console.log(arr6.length);


let obj4=[
    {
        name:"Sakhsi",
        age:"20",
        class:"5"
    },
    {
        name:"Anu",
        age:"20",
        class:"5"
    }
]
let r=obj4.reverse()
console.log(r,"r");

console.log(obj4.length);
for(let i=0;i<obj4.length;i++){
    console.log(obj4[i]);
}

// check if an element exists in an array?

let arr7=["for","you","force","drip"]
let ans=(arr7.includes("too"));
console.log(ans);

// remove an element from an array at a specific index?

let pets=['cats','dog','deer','rabbit','cauliflower', 'cabbage', 'kale', 'tomato']
console.log(pets.splice(4,5,6));

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join('+'));


let data=["w3Resources","w3"];
let input=(Array.isArray(data));
console.log(input);

// let arr9 = 32243;
// let output =(arr9.reverse());
// console.log(output);




