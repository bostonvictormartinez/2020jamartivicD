const years=[1990,1980,1970]

const ages=years.map((el, index)=>`${2020-el} and ${index+1}`)
console.log(ages)


const now=new Date().getFullYear();
console.log(now)

const agess=now - 1975;
console.log(agess)

//date get full year and index +1


var ages6d=years.map((el,index)=>{

    const now=new Date().getFullYear();

    const agey=now-el
    console.log(agey)
    console.log(index+1)

})


var box6={
    color:'green',
    position:1,
    clickMe:function(){
        document.querySelector('.green').addEventListener('click', function(){
            //        document.querySelector('.blue').addEventListener('click', ()=>{
            console.log('clicked green')
        })
    }
}
box6.clickMe()

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

var friends=['stan', 'dave', 'smarts']

function Person(name){
    this.name=name
}
//es5 bind map array
Person.prototype.myFriends5=function(friends){
    var arr=friends.map(function(el){
        console.log(this.name + el)
        return this.name +el
    }.bind(this))
    console.log(arr + "es5")
}

new Person('david').myFriends5(friends)

//es6 bind and map array and index arrow to parse the value

Person.prototype.myFriends6=function(friends){
    var arr=friends.map(el=>`${this.name} is friends with ${el}`);
    console.log(arr)
}

new Person('vic').myFriends6(friends)

//deconstruct

const obj={
    firstName:'john',
    lastName:'smith'
}

console.log(obj)

const {firstName:first_name, lastName:last_name}=obj
console.log(first_name, last_name)


function calcAgeRetirement(year){
    const age=new Date().getFullYear()-year
    console.log(age, 65-age)
    return[age, 65-age]

}
calcAgeRetirement(2000)



//const retirement=[65-age]

const [age, retirement]=calcAgeRetirement(1990)

console.log(age, retirement+ 'hih')


//es5 
/*
const boxes=document.querySelectorAll('.box')

let boxarr5=Array.prototype.slice.call(boxes);

boxarr5.foreach(function(cur){
    cur.style.backgroundColor='blue'
})
*/

//array es6
const boxes=document.querySelectorAll('.box');

const boxArr6=Array.from(boxes)

boxArr6.forEach(cur=>{
    cur.style.backgroundColor='blue'
})


for(const cur of boxArr6){
    if(cur.className==='box blue'){ //or includes.blue
        continue
    }
    cur.textContent='change to blueeee'
}





function addAges(a,b,c,d){
    return a+b+c+d
}
var sum1=addAges(1,2,3,4)
console.log(sum1)



var agesss=[19, 20, 21, 14]


var full=agesss.map(function(cur){ //es5
    return cur>=18
})
console.log(full)

console.log(full.indexOf(true)); //index the array //find index method pass the callback function and return true where indexOfArray is true


agesss.findIndex(cur=>{ //es6
    cur>=18
})

console.log(agesss.findIndex(cur=>{
    cur>=18
}))


//array all the elements //es6 index the array also

const famSmilth=['john','mike', 'lisa']
const famMartin=['stan', 'geo', 'leo']

console.log([...famSmilth, ...famMartin])


const h=document.querySelector('h1');
const boxesss=document.querySelectorAll('.box');

//create array out of both 

const allArray=[h, ...boxesss]

console.log(allArray)

Array.from(allArray).forEach(cur=>{
    cur.style.backgroundColor='pink'
})


//es5 array like list

function isFullAge5(){

    console.log(arguments) //argument structures the list 

}
isFullAge5(1990, 1980, 2014) //index the array like list array type

//rest params es5

function isFullAge5a(){
    var arrayArg=Array.prototype.slice.call(arguments)
    console.log(arrayArg)

    arrayArg.forEach(function(cur){
        const answers=(2021-cur)>=18
        console.log(answers)
    })
}
isFullAge5a(1990,2010, 2014) 





//rest params es6 type array in a list

var yearsList=(1990, 1980, 2015)

function isFullAge6(...yearsList){
    console.log(yearsList +'this list')
}
isFullAge6(2010,2014,1990)

function isFullAge6a(...yearsList){ //spread operator used in function call
    console.log(yearsList)
    yearsList.forEach(cur=>{  //rest operator used in function declaration
        (2021-cur)>=18

        console.log((2021-cur)>=18 +'here go')

    })
}

isFullAge6a(14, 2010, 21, 1990)


function SmithFamily(firstName, lastName, yearBirth, nationality){ //default params set value 
    this.firstName=firstName
    this.lastName=lastName
    this.yearBirth=yearBirth
    this.nationality=nationality

    if(firstName===undefined){
        firstName='Mike'
    }else{
        firstName=firstName
    }

}

var john=new SmithFamily('dave', 'martin' ,1990, 'US'); //set default(firstName='smith')



console.log(john)


//map element , set , get, remove, has, delete, clear, key and value using question example

const question=new Map()
    question.set('question','This is question 1?');
    question.set(1, 'choice 1')
    question.set(2, 'choice 2')
    question.set(3, 'choice 3')
    question.set('correct', 3)
    question.set(true, 'correct choice')
    question.set(false, 'wrong choice')
    console.log(question)

    question.get('question')
    console.log(question.get('question'))
    console.log(question.size)

    //question.delete(2)


    if(question.has(2)){
        question.delete(2)
    }

    //question.clear()

    question.forEach((value,key)=>{
        console.log(`this is key ${key}, this is value ${value}`)
    })



for(let [key,value] of question.entries()){
    console.log(` key is ${key}, value is ${value}`)

    //add set answer to quiz
    console.log(typeof key)
    if(typeof (key)==='number'){
        console.log(`typeof key is ${key}, value is ${value}`)
    }

}

const answer=parseInt(prompt('what answer?'))

answer===question.get('answer')
console.log(question.get(answer===question.get('correct')))








