/**Classes 
 defining classes: "Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations."

you are creating an object that stems from the Class
every class has a constructor, its ran once and when its being created.
*/

class Info {
    constructor(name, age, favColor, favNum) {
        this.name = name;
        this.age = age;
        this.favColor = favColor;
        this.favNum = favNum;
    }
    sentence() {
        console.log(`${this.name} is ${this.age} and his favorite color is ${this.favColor}`);
    }
    ageMinusFavNum() {
        const currYear = new Date().getFullYear() - this.age;
        console.log(`${this.name} was born in ${currYear}`);
    }
    // this works as well
    // ageMinusFavNum = function() {
    //     const currYear = new Date().getFullYear() - this.age;
    //     console.log(`${this.name} was born in ${currYear}`);
    // }
}

const user = new Info('joe', '20', 'green');
const user2 = new Info('jack', '22', 'red');
const math1 = new Info('Genis', '24', 'blue');
user.sentence();
user2.sentence();
math1.ageMinusFavNum();
