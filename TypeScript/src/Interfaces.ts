interface IPerson {
    firstName: string,
    lastName: string,
    say: () => string
}
var customer: IPerson = {
    firstName : '1',
    lastName: '2',
    say: () => "3"
}

console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.say())

interface RunOptions {
    program: string;
    commandline: string[] | string | (() => string)
}
var options: RunOptions = {program: "test", commandline: "hello"}
console.log(options.commandline)

interface namelist {
    [index: number] : string
}
var list: namelist = ["a", "b"]
list["a"] = 12
console.log(list[0])
console.log(list["a"])
console.log(list)