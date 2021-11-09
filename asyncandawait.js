console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(`ticket`), 3000);
    });
    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));

    const addButter = new Promise(( resolve,reject )=> resolve(`butter`));

    const getcoldDrinks = new Promise((resolve , reject)=> resolve(`get some cold drinks`));
    
    let ticket = await promiseWifeBringingTicks;

    console.log(`wife : i hava the ${ticket}`);
    console.log(`husband; we should go in `);
    console.log(`wife : no i am hungry`);

    let popcorn = await getPopcorn;

    console.log(`husband :i got some ${popcorn}`);
    console.log(`husband:we should go in `);
    console.log(`wife: I need butter on my popcorn`);

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn`);

    let coldDrinks = await getcoldDrinks;
 
        console.log(`wife :please you ${coldDrinks}`);
        console.log(`husband :why not! anything else drling?`);
        console.log(`wife : lets got we are late`);
        console.log(`husband:thank you for the reminder me`);
        
        return ticket;
}
preMovie().then((m)=> console.log(`person3 : show ${m}`));


console.log(`person4: show ticket`);
console.log(`person5: show ticket`);



