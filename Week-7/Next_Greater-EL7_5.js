function printNGE(arr, n)
{
    var s = [];
    var ans = [n];
    for (let i = 1; i < n; i++){
        ans[i]= -1; 
    }

    s.push(arr[0]);
  
    for (let i = 1; i < n; i++) 
    {
        if (s.length == 0) {
            s.push(arr[i]);
            continue;
        }

        while (s.length == 0 == false && arr[s.length-1] < arr[i]) 
        {
            ans[s.length-1] = arr[i];
            s.pop();
        }
  
        s.push(arr[i]);
    }

    while (s.length !=0) {
        s[s.length-1] =-1;
        s.pop();
    }

    return ans;
}
  
let arr = [11, 13, 21, 3];
let n = arr.length;
console.log(printNGE(arr, n));
