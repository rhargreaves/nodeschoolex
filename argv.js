var acc = 0;
for(var n = 2; n<process.argv.length; n++)
{
	acc += +process.argv[n];
}
console.log(acc);
