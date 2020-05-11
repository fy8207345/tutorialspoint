var myname:string = "John";
var score1: number = 50
var score2: number = 42.50
var sum = score1 + score2

console.log(myname, sum)

// var num: number = 'hello' //error

var str = '1'
var str2: number = <number><any>str
console.log(str2)
console.log(typeof(str2))

var num2 = 2
console.log('value of num : ' + num2);

var global_num = 12
class Numbers{
    num_val = 13
    static sval = 10
    storeNum(): void{
        var local_num = 14
    }
}
console.log('global' + global_num)
console.log(Numbers.sval)
var obj = new Numbers()
console.log('obj ' + obj.num_val)