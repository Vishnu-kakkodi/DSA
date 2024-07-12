class HashTable {
    constructor(size) {
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

const ht = new HashTable(50);

ht.set('name', 'Alice');
ht.set('age', 25);
ht.set('gender', 'female');
ht.set('occupation', 'engineer');
ht.set('country', 'USA');
ht.set('city', 'New York');
ht.set('language', 'English');
ht.set('hobby', 'painting');
ht.set('favorite_color', 'blue');
ht.set('pet', 'dog');
ht.set('marital_status', 'single');
ht.set('height', '170cm');
ht.set('weight', '65kg');
ht.set('education', 'bachelor');
ht.set('university', 'MIT');
ht.set('car', 'Tesla');
ht.set('food', 'sushi');
ht.set('movie', 'Inception');
ht.set('music_genre', 'jazz');
ht.set('book', '1984');
ht.set('sport', 'basketball');
ht.set('favorite_team', 'Lakers');
ht.set('vacation_spot', 'Hawaii');
ht.set('instrument', 'guitar');
ht.set('language_learning', 'Spanish');
ht.set('phone', 'iPhone');
ht.set('birthday', '1990-01-01');
ht.set('favorite_season', 'summer');
ht.set('favorite_number', 7);
ht.set('sibling', 'brother');
ht.set('favorite_quote', 'To be or not to be');
ht.set('favorite_artist', 'Van Gogh');
ht.set('favorite_game', 'chess');
ht.set('dream_job', 'astronaut');
ht.set('favorite_animal', 'elephant');
ht.set('favorite_ice_cream', 'chocolate');
ht.set('favorite_drink', 'coffee');
ht.set('favorite_subject', 'mathematics');
ht.set('favorite_teacher', 'Mr. Smith');
ht.set('favorite_city', 'Paris');
ht.set('favorite_country', 'Japan');
ht.set('favorite_plant', 'rose');
ht.set('favorite_tree', 'oak');
ht.set('favorite_bird', 'sparrow');
ht.set('favorite_seafood', 'shrimp');
ht.set('favorite_dessert', 'cheesecake');

ht.display();
