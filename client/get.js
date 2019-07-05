const request = require('request');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

url = `http://${process.env.ip || "10.18.50.5"}:${process.env.port || "80"}/${process.env.URL}`
console.log(url);

request(url, (err, res, body) => {
    if (err) { return console.log(err); }
    
    marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer()
    });
    
    console.log(body)
    // Show the parsed data
    console.log(marked(body));

});
