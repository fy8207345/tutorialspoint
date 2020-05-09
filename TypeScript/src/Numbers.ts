console.log('max:' + Number.MAX_VALUE)
console.log('min:' + Number.MIN_VALUE)
console.log('NEGATIVE_INFINITY:' + Number.NEGATIVE_INFINITY)
console.log('POSITIVE_INFINITY:' + Number.POSITIVE_INFINITY)
console.log('Nan:' + Number.NaN)

function employee(id:number, name: string) {
    this.id = id;
    this.name = name;
}

var emp = new employee(123,"smith")
employee.prototype.email = "smith@abc.com"
console.log("id" + emp.id)
console.log("name" + emp.name)
console.log("email" + emp.email)

var n : number = 1.23;
console.log(n.toExponential())
console.log(n.toFixed())
console.log(n.toLocaleString())
console.log(n.toPrecision())
console.log(n.toString())
console.log(n.valueOf())