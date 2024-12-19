import { StorageService } from "./StorageService";

const numbers = new StorageService<number>();
numbers.add(4);
numbers.add(4);
numbers.add(2);

console.log(numbers.get(2));
console.log(numbers.getAll());
numbers.remove(1);
console.log(numbers.getAll());