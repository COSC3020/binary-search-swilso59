function binarySearch(list, element) {  

    let l= 0;
    let k = list.length-1;
    if(list.length<1) return -1;
    //if (list.length === 0){
        //return false;
   // }
    while (l <= k){
        
        var mid = Math.floor((k+l)/2);
    
        if (list[mid] === element){
            while (mid > 0 && list[mid - 1] === element) {
                mid--;
            }
            return mid;
        }
        else if (list[mid] < element){
            l = mid+1;
        }
        else{ 
            k = mid-1;
        }
    }
    return false;
}

console.log(binarySearch([2,4,5,6,7,8],4));
// Fixed the parentheses.

// I got help from the TA as well as reffering to binary-search-ziyuWang6666 repository. 
// I got the test to pass although do not really understand why it did not work with my implementation. 
