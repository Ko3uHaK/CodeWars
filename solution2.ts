    //Grasshopper - Basic Function Fixer
    // export const addFive = (num : number) : number => {
    //     let total = num + 5
    //     return total;;
    //   }
    //Grasshopper - Variable Assignment Debug
    //     export const a : string = "dev"
    // export const b : string = "Lab"
    // export const name : string = a + b

    //Фибоначи
    function* fibonacci(): IterableIterator<number> {
        let [a, b] = [0, 1];
      
        while (true) {
          yield a;
          [a, b] = [b, a + b];
        }
      }
      
      function print(n: number) {
        let i = 0;
        for (const fib of fibonacci()) {
          if (i++ === n) break;  
          console.log(fib);
        }  
      }
      
      // Print first 10 Fibonacci numbers.
      print(10);