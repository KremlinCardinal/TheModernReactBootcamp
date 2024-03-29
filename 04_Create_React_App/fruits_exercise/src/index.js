import foods from './foods';
import { choice, remove } from './helpers';

let fruit = choice(foods);

console.log(`I'd one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');

let remaining = remove(foods, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} other foods left.`);