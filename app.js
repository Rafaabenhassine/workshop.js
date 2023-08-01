console.log("gomycode")
//alert("hello")
//prompt("enter your age")
//confirm("enter your age")
//to comment just one line 
//after comment you can return to right normally
/* to comment
more 
then 
one line
*/


var array =[10,13,15,88,78,4,9]
function min(array){
    var min=array[0]
    for ( i= 1 ; i < array.length; i++){
        if( array[i]<min){
            min=array[i]
        }
    }
    return min
}  
console.log(min(array))
function max(array){


var maxi=array[0]
for ( i=1; i< array.length; i++) {
    if (array[i]>maxi) {
        maxi=array[i]
    }
    return maxi  
}}
console.log(max(array))
