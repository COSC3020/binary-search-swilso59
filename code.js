function binarySearch(list, element) {  
    list.sort();
    let l= 0;
    let k = list.length-1;
while (l <= k){
        var mid = Math.floor((k+l)/2);
        if (list[mid] === element){
            return mid;
        }
        else if (list[mid] < element){
            k = mid+1;
        }
        else{ 
            l = mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],3));
// Fixed the parentheses. 
