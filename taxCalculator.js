let state = process.argv[2];
// early return if state missing
if(!state) {
    console.log('Please input amount and state');
    return;
}
// normalize the state word
state = state.toUpperCase();
let salesAmount = process.argv[3];
// early return if salesAmount missing
if(!salesAmount) {
    console.log('Please input amount and state');
    return;
}

// calculate tax based on the state
switch (state) {
    case 'CA':
        console.log(`CA: the salestax is $${Math.floor(salesAmount * 8.66 / 100)}`);
        break;
    case 'OR':
        console.log(`OR: the sales tax rate is currently 0%`);
        break;
    case 'WA':
        console.log(`WA: the salestax is $${Math.floor(salesAmount * 9.21 / 100)}`);
        break;
    case 'NY':
        console.log(`NY: the salestax is $${Math.floor(salesAmount * 8.52 / 100)}`);
        break;
    case 'FL':
        console.log(`FL: the salestax is $${Math.floor(salesAmount * 7.05 / 100)}`);
        break;
    default:
        console.log('Please input amount and state');
        break;
}