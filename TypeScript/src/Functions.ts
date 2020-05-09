function print(id, name, mail_id) {
    console.log(id, name, mail_id)
}
function addNumbers(...nums: number[]) : number {
    var sum = 0
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    return sum;
}

var myFunction = new Function("a", "b", "return a*b")
var x = myFunction(4,3)
console.log(x)

var foo = (x:number) => x + 10
console.log(foo(1))

var display = x => console.log(x)
display(1)

function disp(n:number):void {
    console.log(n)
}

// function disp(n:number, s:string):void {
//     console.log(n)
// }