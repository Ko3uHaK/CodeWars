// function absentVowel(x){
//     var vowel = 'aeiou';
//     for (var i in vowel) {
//         if (x.toLowerCase().indexOf(vowel[i]) == -1) {
//           return Number(i);
//         }
//       }
//     }
//     describe("Tests", () => {
//         it("test", () => {
//       Test.assertEquals(absentVowel("John Doe hs seven red pples under his bsket"), 0);
//       Test.assertEquals(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
//         });
//       });

      //
      //
      //
      //
    //   Get the Middle Character
    // function getMiddle(s){
    //     var position;
    //            var length;
       
    //            if(s.length % 2 == 1) {
    //                position = s.length / 2;
    //                length = 1;
    //            } else {
    //                position = s.length / 2 - 1;
    //                length = 2;
    //            }
       
    //            return s.substring(position, position + length)
    //    }
       //Convert a Number to a String!
      //  function numberToString(num) {
      //   // Return a string of the number here!
      //  num = String(num);
      //  return num;
      // }
      // numberToString(1);
      //
      //Convert a String to a Number!
      // var stringToNumber = function(str){
      //   str = parseInt(str);
      //   return(str);
      //   }
        
      //Find the odd int
      
    //   function findOdd(A) {
    //     let count = 0;
    //     let last;
    
    //     A.sort();
    
    //     for (let i = 0; i < A.length; i++) {
    //         if (A[i] === last) {
    //             count++;
    //             continue;
    //         } 
    //         if (count % 2) return last;
    //         last = A[i];
    //         count = 1;
    //     }
    //     return last;
    // }

    //Double Char
    // function doubleChar(str){
    //   let s1 = "";
    //   for(let i=0; i<str.length; i++){
    //     s1 = s1 + (str[i] + str[i]);
    //   }
    //   return s1;
      
    // }
    //!!!!!!!!!!!!!!!Return Two Highest Values in List !!!!!!!!!!!!!!
    // function twoHighest(arr) {
    //   let arr1;
    //   for(let i=0;i<=arr.length-1; i++){
    //     if ( i >= i- 1) return arr1; {
    //       arr1 = arr[i];
    //     }
    //   }
    // }
    // console.log(twoHighest(1, 1,4));

    //Grasshopper - Variable Assignment Debug
    //  let a = "dev";
    //  let b ="Lab";
    //  let name = a + b;
    //  console.log(name);

    //Grasshopper - Basic Function Fixer
    // function addFive(num) {
    //   var total = num + 5;
    //   return total;
    // }

    //Abbreviate a Two Word Name
    // function abbrevName(name) {
    //   [first, last] = name.toUpperCase().split(' ');
    //   return first[0] + '.' + last[0];
    // }
    // console.log(abbrevName('Sam Mitchel'));
     
    //The highest profit wins!
    // const minMax = arr => [Math.min(...arr), Math.max(...arr)];
    //String repeat
    // function repeatStr (n, s) {
    // let a =s.repeat(n);
    // return a;
    // }
    // console.log(repeatStr(5,"as"));
    //Convert to Binary
    // function ToBinary(n){
    //   let s = n.toString(2);
    //   return +s;
    // }
    // console.log(ToBinary(2));
    //Highest and Lowest
    numbers = [1, 2, 3, 4, 5];
    function highAndLow(numbers){
      let a = numbers.split(' ');
      let sorted = a.sort(function (a, b) {
        return Number(a) - Number(b);
      });
      return sorted[0] + " " + sorted[sorted.length - 1];
    }

