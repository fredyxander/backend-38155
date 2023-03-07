//stdout->escribir en la consola.
process.stdout.write("como te llamas? ");
// process.stdout.write("como estas");

process.stdin.on("data",(data)=>{
    console.log(`Mucho gusto ${data.toString()}`);
    process.exit();
});