// var arr = [16,32,-64,1];
// var newArr = [];

// for(let index = 0; index < arr.length; index++) {
//   var num;
//   for(var i = 2; i<=arr[index]; i++){
//     if(Number.isInteger(Math.pow(arr[index], 1/i))){
//       num = Math.pow(arr[index], 1/i);
//       newArr.push(arr[index]);
//       break;
//     }
//   }
  
// }
// console.log(newArr);

// B1.1

// var arr = ["BINH", "PHUOC", "HUNG", "CAO", "KHANH"]
// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//   let dodai = x[0].length;
//   let final = x.filter(y=>y.length == dodai);
//  return final; 
// }
// console.log(bubble_Sort(arr))



// B2
// var arr = [60, 40, 55, 75, 64]

// function alternatingSums(a) {
//   var sum1 = 0;
//   var sum2 = 0;
//   for(let i = 0; i < a.length; i+= 2) {
//     sum1 += a[i];
//   }
//   for(let j = 1;j < a.length; j+= 2) {
//     sum2 += a[j];
    
//   }
//   return [sum1, sum2]
// }

// console.log(alternatingSums(arr))






document.addEventListener('click', (e) => {
    const colorOption = e.target.closest('.color-option');
    if (!colorOption) return;
    const color = colorOption.dataset.color;
    let root = document.documentElement;
    root.style.setProperty('--primary-color', color);
  });