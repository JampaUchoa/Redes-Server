const request = require('request');
const chalk = require('chalk');

request('http://localhost:3000/file.htm', (err, res, body) => {
    if (err) { return console.log(err); }
    //console.log(body);
    console.log(chalk.bold('Hello!'));
    console.log(chalk`{bold.green hello}`);

    let reg = /<(([a-z]+)\s*([^>]*))>/gms;

    let result = body.match(reg);
    console.log(result); // <span class="my">, span class="my", span, class="my"


});
