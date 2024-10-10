const c = require('ansi-colors');


console.log(c.red('더조은'));
console.log(c.green('아트'));
console.log(c.cyan('컴퓨터'));
console.log(c.yellow('아카데미'));
console.log(c.bold.red('this is a bold red message'));
console.log(c.bold.yellow.italic('this is a bold yellow italicized message'));
console.log(c.green.bold.underline('this is a bold green underlined message'));
console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
const { bold, red } = require('ansi-styles');