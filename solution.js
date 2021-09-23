function absentVowel(x){
    var vowel = 'aeiou';
    for (var i in vowels) {
        if (x.toLowerCase().indexOf(vowels[i]) == -1) {
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