 class Generator{
    minimum    
    maximum
    maximumWordLength
    vowels = ['a', 'e', 'i', 'o', 'u'];
    unwanted = ['x','w']
    word = '';
    constructor(){
        this.maximum = 122;
        this.minimum = 97;
        this.maximumWordLength = 10;
    }
    
    // Generate a random number between 97 and 122
    RandomNumber(min, max){
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (max-min) + min);
    }
    //Generate a random length of the word
    RandomLength(){
        const min = 3;
        return Math.floor(Math.random() * (this.maximumWordLength - min) + min) + 1;
    }
    GenerateWord(){
        const length = this.RandomLength();
        Math.floor(Math.random()* 2) ? this.VowelFirstLetter(length) : this.NonVowelFirstLetter(length);
        this.CapitalizeFirstLetter();
        return  this.word;
    }
    GenerateListOfWords(number){
        let words = [];
        for(let i = 0; i < number; i++){
            words.push(this.GenerateWord());
            this.word = '';
        }
        return words;
    }
    CapitalizeFirstLetter(){
        
        this.word =  this.word[0].toUpperCase() + this.word.slice(1);
    }
    RandomVowel(){
        this.word += this.vowels[this.RandomNumber(0, this.vowels.length)]; 
    }
    NonVowelFirstLetter(length){
        for(let i = 0; i< length; i++){
            if(i% 2 == 0){
                let nextLetter = this.RandomNumber(this.minimum, this.maximum);
                while(this.vowels.includes(String.fromCharCode(nextLetter)) || this.unwanted.includes(String.fromCharCode(nextLetter))){
                    nextLetter = this.RandomNumber(this.minimum, this.maximum);
                }
                this.word += String.fromCharCode(nextLetter);
            }else{
                this.RandomVowel();
            }
            
        }
        return this.word;
    }
    VowelFirstLetter(length){
        for(let i = 0; i< length; i++){
            if(i % 2 == 0){
                this.RandomVowel();
            }else{
                let nextLetter = this.RandomNumber(this.minimum, this.maximum);
                while(this.vowels.includes(String.fromCharCode(nextLetter)) || this.unwanted.includes(String.fromCharCode(nextLetter))){
                    nextLetter = this.RandomNumber(this.minimum, this.maximum);
                }
                this.word += String.fromCharCode(nextLetter);
            }
            
        }
        return this.word;
    }
}
module.exports = Generator;