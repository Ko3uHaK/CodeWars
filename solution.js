function absentVowel(x){
    var vowel = 'aeiou';
    for (var i in vowel) {
        if (x.toLowerCase().indexOf(vowel[i]) == -1) {
          return Number(i);
        }
      }
    }
    describe("Tests", () => {
        it("test", () => {
      Test.assertEquals(absentVowel("John Doe hs seven red pples under his bsket"), 0);
      Test.assertEquals(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
        });
      });

      //
      //
      //
      //
    //   Get the Middle Character
    function getMiddle(s){
        var position;
               var length;
       
               if(s.length % 2 == 1) {
                   position = s.length / 2;
                   length = 1;
               } else {
                   position = s.length / 2 - 1;
                   length = 2;
               }
       
               return s.substring(position, position + length)
       }