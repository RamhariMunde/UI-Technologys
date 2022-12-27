// this is in number array
const arr = [ 1,3,4,1,2];

arr.sort((a , b) => {
   // return a - b  // ascending 
    return b - a  // descending // -negative -> smaller,zero = equal, positive->bigger
})
console.log(arr);

//////////////////////////////////////////

// this is String array

const arr1 = [ 'adc','aaa','acb'];

arr.sort((a , b) => {
   // return (a<b) - (a>b)   // ascending 
    return (a>b) - (a<b)  // descending // -negative -> smaller,zero = equal, positive->bigger
})
console.log(arr1);