export class StorageService<T> {

    private storage: Array<T> = [];

    add(element:T):void {
        this.storage.push(element)
    }

    get(index:number): T | undefined {
        return this.storage[index];
    }

    remove(index:number):void {
        this.storage.splice(index,1);
    }

    getAll():Array<T> {
        return this.storage;
    }

}