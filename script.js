
var years=[1990, 1980, 1970]

var ages6=years.map(el=>2020-el);

console.log(ages6)


const firstName='vic'
const lastName='martin'

const person=`${firstName} and ${lastName}`;
console.log(person);

console.log(person.startsWith('v'));
console.log(person.endsWith('n'))

console.log(person.includes(' '))

console.log(person.repeat(firstName));

const ages6a=years.map((el,index)=>`${index+1}+1 and ${2020-el}`)  //map array
console.log(ages6a)

const now=new Date().getFullYear()

const ages6b=now-46;
console.log(ages6b)



//date get full year
var yearsArr=[1990,1980,1970]

var ages6d=years.map((el,index)=>{
    const now=new Date().getFullYear();
    const agey=now-el
    return `here ${index+1} and ${agey}`
    
}) 
console.log(ages6d)



//map to array

/*var box5={
    color:'green',
    position:1,
    clickMe:function(){
        var self=this;

        document.querySelector('.green').addEventListener('click',()=>{
            var str='hi'+self.color+self.position;
            alert(str)
        })
    }
}
box5.clickMe()

var box6={
    color:'green',
    position:1,
    clickme1:function(){
        document.querySelector('.blue').addEventListener('click', ()=>{
            console.log('clicked blue')
            
        })
    }

}
box6.clickme1();
*/

function Person(name){
    this.name=name
}

Person.prototype.myFriends5=function(friends){
    var arr=friends.map(function(el){

        return this.name+ 'is friends' + el

    }.bind(this))
    console.log(arr)
}
var friends=['dave', 'mike', 'phil']

new Person('dave').myFriends5(friends)



function SmithPerson(firstName, lastName, yearBirth, nationality){

    if(lastName===undefined){
        lastName='Smith'
    }else{
        lastName=lastName
    }

    this.firstName=firstName
    this.lastName=lastName
    this.yearBirth=yearBirth
    this.nationality=nationality
}

let john=new SmithPerson('john',this.lastName,  1990, 'US')

console.log(john)

//es6
function smithFam(firstName,lastName='Smith', yearBirth, nationality){

    this.firstName=firstName
    this.lastName=lastName
    this.yearBirth=yearBirth
    this.nationality=nationality

    
}
let john2=new SmithPerson('john2',this.lastName,  1990, 'US')

console.log(john2)


//classes es5

var person5=function(name,yearBirth, job){
    this.name=name
    this.yearBirth=yearBirth
    this.job=job
}

person5.prototype.calcAge=function(){
    var age=new Date().getFullYear-this.yearBirth
    console.log(age)
    
}

let john5=new person5('john', 1990, 'teacher')

console.log(john5)


//es6

class Person6{  //constructor binds initial properties
    constructor(name, yearBirth, job){
        this.name=name
    this.yearBirth=yearBirth
    this.job=job


    }
    calcAge(){
        var age=new Date().getFullYear-this.yearBirth
    console.log(age)

    }
}

const john6=new Person6('hon', 1990, 'teahcer')
console.log(john6)


var Person5=function(name,yearBirth,job){
    this.name=name
    this.yearBirth=yearBirth
    this.job=job

}

Person5.prototype.calcAge=function(){
    var age=new Date().getFullYear()-this.yearBirth
    console.log(age)
}

var Athlete5=function(name, yearBirth, job, olympicGames, medals){

    Person5.call(this,name,yearBirth,job)
    this.olympicGames=olympicGames
    this.medals=medals

}

Athlete5.prototype=Object.create(Person5.prototype)

Athlete5.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals)
}

var johnAthlete5=new Athlete5("stan", 1990, 'swim', 3,10)

console.log(johnAthlete5)

console.log(johnAthlete5.calcAge())

/*Athlete5.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals)
}*/

//add above


console.log(johnAthlete5.wonMedal())




class Person6a{
    constructor(name,yearBirth,job){
        this.name=name
        this.yearBirth=yearBirth
        this.job=job
    }
    calcAge(){
        var age=new Date().getFullYear()-this.yearBirth;
        console.log(age)
    }
}
//subclass person

class Athlete6 extends Person6a{
    constructor(name,yearBirth, job, olympicGames, medals){

        super(name, yearBirth,job)
        this.olympicGames=olympicGames
        this.medals=medals


    }
    wonMedal(){
        this.medals++;
        console.log(this.medals)
    }
}

const johnAthlete6a=new Athlete6('stan', 1980, 'run', 3, 10)
 
console.log(johnAthlete6a)
console.log(johnAthlete6a.wonMedal())