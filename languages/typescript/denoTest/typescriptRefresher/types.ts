import { ld } from 'https://x.nest.land/deno-lodash@1.0.0/mod.ts';

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

let users: User[] = [];

// null and undefined

function someFunc(n: number) {
  if (n % 2 === 0) {
    return 'even';
  }
}

const value = someFunc(4);
console.log(value);

users.push(new UserAccount('Edwin', 3));
users.push(new UserAccount('Muraya', 90));
users.push(new UserAccount('Kamau', 38));

console.log(users);

function getAdminUser(): User {
  return new UserAccount('Edwin', 3);
}

function deleteUser(user: User, list: User[]) {
  list.map((e) => {
    console.log(ld.isEqual(user, e));
  });
}

let words = ['sky', 'wood', 'forest'];
console.log(ld.first(words));
const user: User = new UserAccount('Edwin', 3);

const adminUser: User = getAdminUser();
console.log(adminUser);

deleteUser(user, users);
