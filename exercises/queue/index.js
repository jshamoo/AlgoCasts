// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this._storage = {};
    this.index = 0;
  }

  add(value) {
    this._storage[this.index] = value;
    this.index++;
  }

  remove() {
    const removedIndex = Math.min(...Object.keys(this._storage));
    const removedValue = this._storage[removedIndex];
    delete this._storage[removedIndex];
    return removedValue;
  }
}

// can also implement it using Array native methods

module.exports = Queue;
