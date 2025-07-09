
 //--- Q1 ----
const array=[2,1,3,2,7,2,8,4,3,6,10,9,12];

const q1_1= array.sort((a, b) => a - b);
const q1_2 = array.slice().sort((a, b) => b - a);

console.log(q1_1);
console.log(q1_2); 


const q2=array.filter(num => num > 5);
console.log(q2); 

const q3=array.map(num => num * 5);
console.log(q3); 


const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray)


const count = {};
array.forEach((x) =>{ count[x]= (count[x] || 0) +1;});

 console.log(count); 
 


 

/* --- Q2 ---- */

/*


const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(array2){
    
for (let i = array2.length - 1; i >0; i--) {
    const j=Math.floor(Math.random() * (i+1));

    const temp = array2[i];
    array2[i] = array2[j];
    array2[j] = temp;
    }
    return array2;
}

console.log(shuffle(array2));





*/



/* ---Q3--- */

/*


const arr = [
    [85, 90, 100, 95, 85], 
    [85, 95, 75, 70, 80], 
    [90, 85, 80, 70, 75], 
    [95, 100, 85, 90, 88]   
]


function avg(arr){
    let grade=0;
    for(let i=0; i <arr.length;i++){
        for(let j=0; j <arr[i].length;j++){
            grade += arr[i][j];
        }       
    }
console.log(grade);
return Math.floor(grade / arr.length)
}


*/






/*
function getAvg(grade){

let sum = 0;

for (let i = 0; i < grade.length; i++) {
    for (let j = 0; j < grade[i].length; j++) {

sum += grade[i][j];}}

console.log(sum);

return Math.floor(sum / grade.length);

}

let arr =getAvg([

    [85, 90, 100, 95, 85], 
    [85, 95, 75, 70, 80], 
    [90, 85, 80, 70, 75], 
    [95, 100, 85, 90, 88]  
]);


console.log(arr); 


*/