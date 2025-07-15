// require is used to import module 
// you can import builtin and user defined modules
// it help you to reuse the code

// module.export is used to export function and variable and let them available for the other scripts
// means you can easily use one file function and variable into other

const user = "Faizan";

function makeChai(type) {
    console.log(`Ye le bhai teri  ${type} chai`);
}

module.exports = {
    makeChai,
    user
}
