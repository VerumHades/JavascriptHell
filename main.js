let map = {}

map["1"]= "+!![]"
map["0"] = "+![]"

const number = n => {``
    let out = "+([]"
    n.toString().split("").forEach(chr => {
        out += "+(" + map["0"]
        for(let i = 0;i < parseInt(chr);i++){
            out += map["1"]
        }
        out += ")"
    });
    return out + ")"
}

const fromString = s => {
    let out = "([]"
    s.split("").forEach(ch => {
        if(!(ch in map)){
            let code = ch.charCodeAt(0)
            out += `+(([]+[])[${fromString("constructor")}][${fromString("fromCharCode")}](${number(code)}))`
        }else{
        out += "+("+map[ch]+")"
        }
    })
    return out + ")"
}

map.f = `(![]+[])[${number(0)}]`
map.a = `(![]+[])[${number(1)}]`
map.l = `(![]+[])[${number(2)}]`
map.s = `(![]+[])[${number(3)}]`
map.e = `(![]+[])[${number(4)}]`
map.t = `(!![]+[])[${number(0)}]`
map.r = `(!![]+[])[${number(1)}]`
map.u = `(!![]+[])[${number(2)}]`

map.o = `({}+[])[${number(1)}]`
map.b = `({}+[])[${number(2)}]`
map.j = `({}+[])[${number(3)}]`
map.c = `({}+[])[${number(5)}]`
map[" "] = `({}+[])[${number(7)}]`

map.n = `([]+([][${number(0)}]))[${number(1)}]`

map.S = `([]+(([]+[])[${fromString("constructor")}]))[${number(9)}]`
map.i = `([]+(([]+[])[${fromString("constructor")}]))[${number(12)}]`
map.g = `([]+(([]+[])[${fromString("constructor")}]))[${number(14)}]`

map.p = `([]+(/-/)[${fromString("constructor")}])[${number(14)}]`
map["\\"] = `(/\\\\/+[])[${number(1)}]`

map.d = `(${number(13)})[${fromString("toString")}](${number(36)})`
map.h = `(${number(17)})[${fromString("toString")}](${number(36)})`
map.m = `(${number(22)})[${fromString("toString")}](${number(36)})`

map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`

const compile = code => {return `(() => {})[${fromString("constructor")}](${fromString(code)})()`};

