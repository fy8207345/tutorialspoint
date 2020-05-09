var p = {
    f: 'a',
    l: 'b',
    say: function () {
    }
}
p.say = function() {return 'A'};
console.log(p.f)
console.log(p.l)