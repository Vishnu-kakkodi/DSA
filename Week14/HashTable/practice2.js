class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
        this.count++;
        if (this.count / this.size > 0.7) {
            this._resize();
        }
    }

    get(key) {
        const index = this._hash(key);
        if (!this.table[index]) return undefined;
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        if (!this.table[index]) return false;
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                this.count--;
                return true;
            }
        }
        return false;
    }

    display() {
        this.table.forEach((values, index) => {
            const chainedValues = values ? values.map(([key, value]) => `[${key}: ${value}]`) : [];
            console.log(`${index}: ${chainedValues}`);
        });
    }

    _resize() {
        const newSize = this.size * 2;
        const oldTable = this.table;
        this.table = new Array(newSize);
        this.size = newSize;
        this.count = 0;

        oldTable.forEach(bucket => {
            if (bucket) {
                bucket.forEach(([key, value]) => {
                    this.set(key, value);
                });
            }
        });
    }
}

const ht = new HashTable();

ht.set('name', 'Alice');
ht.set('age', 25);
ht.set('gender', 'female');
ht.set('occupation', 'engineer');
ht.set('country', 'USA');
ht.set('city', 'New York');
ht.set('language', 'English');

console.log(ht.get('name'));
console.log(ht.get('age')); 

ht.remove('age');
console.log(ht.get('age')); 

ht.display();
