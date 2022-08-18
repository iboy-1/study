function escape(str) {
    return str.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case "<":
                return "&lt"
            case ">":
                return "&rt"
            case "\"":
                return "&quot"
            case "&":
                return "&amp"
        }
    })
}

function reduction(str) {
    return str.replace(/&lt|&rt|&quot|&amp/g, (match) => {
        switch (match) {
            case "&lt":
                return "<"
            case "&rt":
                return ">"
            case "&quot":
                return "\""
            case "&amp":
                return "&"
        }
    })
}

module.exports = {
    escape,
    reduction
}