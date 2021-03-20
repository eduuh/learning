class HashTable {
  constructor(size) {
    if (size) this.data = new Array(size)
    this.data = []
  }

  _hash(key) {
    // private property
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    if (!key || !value) {
      throw "Nothing to return"
    }
    const data = [key, value]
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data.push(data)
    }
    this.data.push(data)
  }

  get(key) {
    if (!key) {
      return "Please provide a string"
    }
    const address = this._hash(key)
    const currentBucket = this.data
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
        }
      }
    }

    return undefined
  }

  keys() {
    const keyarrays = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.length) {
        keyarrays.push(this.data)
      }
    }
    return keyarrays
  }
}

const myHastTable = new HashTable(56)
myHastTable.set("50nin", "Edwin")
myHastTable.set("50nix", "Muraya")

console.log(myHastTable.keys())

console.log(myHastTable.get("grapes")[1])
