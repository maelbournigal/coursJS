var inputs = process.argv.slice(2);
var result = inputs
    .map(inputs => inputs.charAt(0))
    .reduce( (a, b) => a+b )
console.log(`[${inputs}] devient \"${result}\"`);