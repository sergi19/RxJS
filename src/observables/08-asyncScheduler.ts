
import { asyncScheduler } from 'rxjs';

// Do the work of:
// setTimeout(() => {do something}, 3000)
// setInterval(() => {do something}, 3000)

const greet = () => console.log('Hello World');
const greet2 = name => console.log('Hello: ', name);
const greet3 = obj => console.log('Hello: ', obj.name);

// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, 'Sergio');
// asyncScheduler.schedule(greet3, 2000, {name: 'Sergio'});


const subscription = asyncScheduler.schedule(function(state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);


