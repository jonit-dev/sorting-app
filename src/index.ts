import { CharactersCollection } from './libs/CharactersCollection';
import { LinkedList } from './libs/LinkedList';
import { NumbersCollection } from './libs/NumbersCollection';


const numbersCollection = new NumbersCollection([3, 0, -5, 10])
numbersCollection.sort();
console.log(numbersCollection);


const charactersCollection = new CharactersCollection('Xaayb')
charactersCollection.sort();
console.log(charactersCollection);


const singlyLinkedList = new LinkedList()

singlyLinkedList.add(15)
singlyLinkedList.add(45)
singlyLinkedList.add(-10)


singlyLinkedList.sort()





console.log(singlyLinkedList.print());
