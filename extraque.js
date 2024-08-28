//question-length without .length
// let arr=[1,3,2,4,5,7];
// let count=0;
// i=0;
// while(arr[i]!=undefined){
//     count+=1;
//     i++;
// }console.log(count,"is the length of the given array")


//question-missing element
// function findMissing(arr, N) {
//     let i;
//     let temp = new Array(N).fill(0);
//     for (i = 0; i < N; i++) {
//         temp[arr[i] - 1] = 1;
//     }
//     let ans = 0;
//     for (i = 0; i <= N; i++) {
//         if (temp[i] === 0)
//             ans = i + 1;
//     }
//     console.log(ans);
// }
// let arr = [1,3,2,4,5,7];
// let n = arr.length;
// findMissing(arr, n);


//question-sorting without sort function 
//type-1   --done
// const arr=[1,3,2,4,5,7];
// let temp;
// for(i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         temp=arr[i+1];
//         arr[i+1] = arr[i];
//         arr[i]=temp;
//         console.log(arr)
//     }
// } 

//type-2 using function  --done
// function sortarr(array) {
//     let temp;
//     for (i=0;i<array.length;i++) {
//         if(array[i]>array[i+1]) {
//             temp=array[i+1];
//             array[i+1]=array[i];
//             array[i]=temp;
//         }
//     }console.log(array)
// }
// sortarr([1,3,2,4,5,7]);



//question-sort arr given to 0,0,0,0,1,1

//type-1 --done
// array = [0, 0, 1, 0, 1, 0, 1]
// let arr4 = []
// cnt = 0;
// for (i = 0; i < array.length; i++) {
//     if (array[i] != 1) {
//         arr4.push(array[i])
//     }
//    else if (array[i] == 1)
//          cnt += 1
//  }
//  for (i = 0; i < cnt; i++) {
//    arr4.push(1)
// }
// console.log(arr4)

//type-2 --mistake
// const arr=[0,0,1,0,1,0,1];
// let temp;
// for(i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         temp=arr[i+1];
//         arr[i+1] = arr[i];
//         arr[i]=temp;
//         console.log(arr)
//     }
// }



//question-sort the array [0,0,2,1,1,2,0,0]  --done

//type-1
// let arr2=[0,0,2,1,1,2,0,0];
// let arr3=[];
// let count1=0;
// let count2=0;
// for(i=0;i<arr2.length;i++){
//     if(arr2[i]==0){
//         arr3.push(0)
//     }else if(arr2[i]==1){
//         count1+=1;
//     }else{
//         count2+=1;
//     }
// }
// for(i=0;i<count1;i++){
//     arr3.push(1)
// }
// for(i=0;i<count2;i++){
//     arr3.push(2)
// }
// console.log(arr3);

//type-2
// let arr = [0, 0, 2, 1, 1, 2, 0, 0];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }console.log(arr)
