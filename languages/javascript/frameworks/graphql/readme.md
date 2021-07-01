### THE GRAPHQL Bootcamp

Writing Code is Key. Monkey see Monkey Do.

#### Client - server Architecture

GRAPHQL ql > we will Use Graph Query Language for any Language. Any database.
GraphQl is super flexicble.

## Advantages

1. Fast.
2. Flexible.
3. Simple to use and simple to maitain.

### What is graphql

A graphql server is a single smart end point. The transport channel does matter
. If you are doint this overt the Http, the https method certainly does not
matter. Lets assume that you have a single Graphl endpoint exposed over an HTTP
transport channel at a graphql endpoint.

A graphql query is just a string but it must includ all the piece of the data
that you need. This where the declartive power comes in.

Let's compare how this simle view's dat requirement can be experssed with
english and with Graphql in a table.

```English
The view needs; a persons name, birth year planet's name, and the title ot all
their films.
```

```graphql
{
    person(Id: ----) {
     name
     birthYear
     planet {
       name
     }
     films {
       title
     }
    }
}
```

You can see how clsoe the Graphql expession is close to the English version. It
is as close as ti can get. Futhermore, compare the Graphql query with the
original Json data object we start with the following.

The graphql query is the exacl structure of the Json dat object, execept without
all the "value" pairs. If you think of this in terms of a question-answer
relation, the question in the answer statement without the answer part.

Graphql is not the Rest killer. Rest Apis have their place, but it not for the
web and mobile application.

I believe Graphql will do to Rest what JSON dit to XML. XML is still pretty
heavily used, but almost every web-based Api I know of today uses the Json
format.

Graphql offers many advantages over Rest Api.

### Graphql Problems

#### 1. Security

A critical threat for Graphql APIs is resource-exhausion attacks (Denial of
services attacks). A graqhql Server can be attacked with overyl complex queries
that consume all the server resources. It very simple to query for deeply nested
relationship or use filed aliase to ask for the smae field many times. Resourece
exhausion atatck are not specific to Graphql but when working with Grapqh you
have to be extra careful about them.

Authenticaton and authoraization are other concerns that you need to think aobut
when working with Graphql . Do you handle them beofer, after or during Grapqh
field resolving process?

To answer this question , think of graphq as a **domain specific** language on
top of your backend data-fetching logic. i(t is just one layre that you could
put between the client and your actual data service. Think of authentication and
authorization as another layer. Grahql will not help with the actual
implemetation of the authetication or authorization logic. i(t is not meant for
that. But if you want to put these layers behind Grapqhl you can use Grapqhl to
communication the access token between clent and the enforcing the logic. This is
very simlar to the way authentication and authorization are usaully implemented
in Rest api

#### 2. Caching and optimizing

One task that Graphql makes a bit more challenging is client' caching of data.
Response from Rest Api are a lot easier to cache because of their dictionary
nature. A specific url give certain data, so you can uset he Url itselfe as the
ache key.

#### 3. Learning Curve

Working with graphql requires a bigger learning curvet than the alternatives. A
developer writing a Graphqlbsed frontedn application has to learn the syntax of
the Graphql language. A developer implementing a Graphql backend service has to
learn a lot more than just the language they have to learn the Api sytax of a
Graphql implemetation. They must also undestand schemas and resolvers, among
many other concepts sepicif to grapqhl runtime

##### Summary

1. The best way to represent dat in the real wold is with a graph data
   structure. A data model is a graph of related objects. Graphql embraces this
   fact.
2. A grapql system has two primary componets: the query language, which can be
   used by consumers of data Apis to request their exat data needs and
3. Graphq is all about optimizing data communiction betweena client and the
   server.
4. Graphq servec can be written in any programming language and it can be
   conceptually split into two manjor parts: a structure that is defined with a
   is naturally implemented with functions know as resolvers. A grapqhQl data
   object that can be read through grapqhql service.
5. The differences between grapql and its previous alternative is that it
   provides standards and structure to implements Api featurse in maintanable an
   scalable ways. The alternative lack such standards.
6. Graphql has some challanges , especially in the areas of security and
   optimization. Because of the flexibliyt it provides, securingt a Grapqh Api
   requires lot harder than caching fixed Api endpoints.

### Using Graphql Apis

Graphql exposes only a single url(route). Instead we use a grapql Query to
request the data we want.The graphql query lets the client determine what data
it needs.Unlike a rest api which determine what data you want instead.

This inversion of contol makes it flexible and fast since we can avoid some rest
api problem of overfetching or underfetching(requres multiple requests).

#### Mobile

1. Small screen real estate.
2. Slower hardware.
3. Slow down the application since we are overfetching data form the api.

Desktop and Mobile appliation both have different needs.

## Summary

Grapql creates fast and flexible Apis, giving clients complete control to ask
for just the data they need. Fewer HTTP requests, flexible data querying, and
small code base to maintain.

### Requirement

1. NodeJs
2. Visual Studio Code.
    - Babel ES
    - Docker
    - Duplicate Files: TODO duplicate files in vim
    - npm and intellisence

### Grapql Basic: Schema and Query

### What is a graph

The way to think about data and there relationships. Query object is not a
javascript object

Grapql Api are self documenting throung introspection.

The query is how we ask for data form a graphql Api.

`graphql query { hello courseInstructor course }`

The above query returns simple strings.

#### Lets query back data types

`graphql query { hello courseInstructor course me { name email } }`

#### Query on Collection

`graphql query { users { name email } }`

### Setting up Graphql and NodeJs

Using graphql playground is tempolary step for testing our setup. Graphql is a
specification. It is not an implementations. There my be multiple clients for
graphql or servers available that implements the specification.

`json npm i grapql-yoga`

```js const typeDefs = `type Query { hello: String! name: String! location: String! time: String! bio: String! }`

// applicaiton schema // Resolver const resolvers = { Query: { hello() { return
"this is my first query" }, name() { return "Edwin Muraya" }, location() {
return "Nyeri Kenya" }, time() { return Date.now() }, bio: () => { return "Edwin
is A student Learning graphql" }, }, }

const server = new GraphQLServer({ typeDefs, resolvers, })

server.start(() => { console.log("The server is up!") }) ```

````bash import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID // Types
definition const typeDefs = ` type Query { id: ID!  name: String!  age: Int!
employees: Boolean!  gpa: Float title: String!  rating: Int!  inStock: Boolean!
} `;

// applicaiton schema // Resolver const resolvers = { Query: { id() { return
"abc5454"; }, name() { return "Edwin Muraya"; }, age() { return 56; },
employees() { return true; }, gpa() { return null; }, title: () => { return
"Dell Laptop"; }, rating: () => { return 8; }, inStock: () => { return true; },
}, };

const server = new GraphQLServer({ typeDefs, resolvers, });

server.start(() => { console.log("The server is up!"); }); ```

#### Live reload for our application.

Installing nodemon and making changes to the start script.

#### Working with Custom Types.

Our application usually have custome types. A set of fields. Example of creating
custom types for a blogiing application you could have **\*users** ,
**comments\*** , **posts.\***

#### Working with Arrays

```graphql type Query { grades: [Int]!  }


// The resolvers grades(parent, args, ctx,info) { return [5, 55, 58, 55]; }, ```

The code that show how to get in some values from client to the server.

```graphql import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID // Types
definition const typeDefs = ` type Query { me: User!  post: Post!  grades:
[Int]!  greeting(name: String, position: String): String!  sum(numbers:
[Float]!): Float!  }

   type User { id: ID!  name: String!  email: String!  age: Int }

   type Post { id: ID!  title: String!  body: String!  published: Boolean!  } `;

// applicaiton schema // Resolver const resolvers = { Query: { sum(parent, args,
ctx, info) { if (args.numbers.length === 0) { return 0; }

      return args.numbers.reduce((accumulator, currentValue) => { return
      accumulator + currentValue; }); }, greeting(parent, args, ctx, info) { if
      (args.name) { return `hello ${args.name}`; } else { return `Hello`; } },
      grades(parent, args, ctx, info) { return [5, 55, 58, 55]; }, me() { return
      { id: "instinst", name: "Edwin", email: "edwin@test.com", age: 56, }; },
      post: () => { return { id: "isntian", title: "The Awakening of Evil",
      body: "Evil is not a good thing", published: true, }; }, }, };

const server = new GraphQLServer({ typeDefs, resolvers, });

server.start(() => { console.log("The server is up!"); }); ```

returning a arrow of custom types.

```graphql import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID // Types
definition

const users = [ { id: "8", name: "Kdotn", email: "kdotn@test.com", },

  { id: "5", name: "Eduuh", email: "eduuh@test.com", },

  { id: "5", name: "Kamau", email: "kamau@test.com", },

  { id: "6", name: "Musaya", email: "musaya@test.com", }, ];

const posts = [ { id: "isn4", title: "The Next leve code of Evil", body: "Evil
is not a good code, its honourable in KENYA", published: true, }, { id: "isn56",
title: "The Depend Hansle", body: "Evil is not a good thing, its Hansle",
published: true, }, { id: "isn6", title: "The Awakening of Evil", body: "Evil is
not a good thing", published: true, }, { id: "isn54n", title: "The last Man on
Earth", body: "Amazing things on earth", published: true, }, ];

const typeDefs = ` type Query { me: User!  post: Post!  users(query: String):
[User]!  posts(query: String): [Post]!  }

   type User { id: ID!  name: String!  email: String!  age: Int }

   type Post { id: ID!  title: String!  body: String!  published: Boolean!  } `;

// applicaiton schema // Resolver const resolvers = { Query: { posts(parent,
args, ctx, info) { if (!args.query) { return posts; }

      return posts.filter((p, i) => { const isTitleMatch =
      p.title.toLowerCase().includes(args.query.toLowerCase()) const isBodyMatch
      = p.body.toLowerCase().includes(args.query.toLowerCase()) return
      isTitleMatch || isBodyMatch; }); }, users(parent, args, ctx, info) { if
      (!args.query) { return users; }

      return users.filter((user) => { return
      user.name.toLowerCase().includes(args.query.toLowerCase()); }); }, me() {
      return { id: "instinst", name: "Edwin", email: "edwin@test.com", age: 56,
      }; }, post: () => { return { id: "isntian", title: "The Awakening of
      Evil", body: "Evil is not a good thing", published: true, }; }, }, };

const server = new GraphQLServer({ typeDefs, resolvers, });

server.start(() => { console.log("The server is up!"); }); ```

#### Relational Data

This allow use to setup relationship to our custom type.

```graphql import { GraphQLServer } from "graphql-yoga";

//Five scalar value for graphql. string, Resolver, int, float, ID // Types
definition

const comments = [ { id: "5", text: "The first comment", author: "8", posts:
"isn54n", }, { id: "6", text: "The Second comment", author: "4", posts: "isn6",
}, { id: "7", text: "The Third comment", author: "5", post: "isn54n", }, ];

const users = [ { id: "8", name: "Kdotn", email: "kdotn@test.com", posts:
"isn54n", }, { id: "4", name: "Eduuh", email: "eduuh@test.com", posts: "isn6",
}, { id: "5", name: "Kamau", email: "kamau@test.com", post: "isn56", }, { id:
"6", name: "Musaya", email: "musaya@test.com", post: "isn4", }, ];

const posts = [ { id: "isn4", title: "The Next leve code of Evil", body: "Evil
is not a good code, its honourable in KENYA", published: true, author: "6", }, {
id: "isn56", title: "The Depend Hansle", body: "Evil is not a good thing, its
Hansle", published: true, author: "5", }, { id: "isn6", title: "The Awakening of
Evil", body: "Evil is not a good thing", published: true, author: "4", }, { id:
"isn54n", title: "The last Man on Earth", body: "Amazing things on earth",
published: true, author: "8", }, ];

const typeDefs = ` type Query { me: User!  post: Post!  users(query: String):
[User]!  posts(query: String): [Post]!  comments(query: String): [Comment!] }

   type Comment { id: ID!, text: String!  author: User!  post: Post }

   type User { id: ID!  name: String!  email: String!  age: Int post: [Post!]
   comments: [Comment!]!  }

   type Post { id: ID!  title: String!  body: String!  published: Boolean!
   author: User!  comments: [Comment]!  } `;

// applicaiton schema // Resolver const resolvers = { Query: { comments(parent,
args, ctx, info) { if (!args.query) { return comments; } return
comments.filter((comment) => { return
comment.text.toLowerCase().includes(args.query.toLowerCase()); }); },
posts(parent, args, ctx, info) { if (!args.query) { return posts; } return
posts.filter((p, i) => { const isTitleMatch = p.title .toLowerCase()
.includes(args.query.toLowerCase()); const isBodyMatch = p.body .toLowerCase()
.includes(args.query.toLowerCase()); return isTitleMatch || isBodyMatch; }); },
users(parent, args, ctx, info) { if (!args.query) { return users; }

      return users.filter((user) => { return
      user.name.toLowerCase().includes(args.query.toLowerCase()); }); }, me() {
      return { id: "instinst", name: "Edwin", email: "edwin@test.com", age: 56,
      }; }, post: () => { return { id: "isntian", title: "The Awakening of
      Evil", body: "Evil is not a good thing", published: true, }; }, }, Post: {
      author(parent, args, ctx, info) { return users.find((user) => { return
      user.id == parent.author; }); },

    comments(parent, args, ctx, info) { return comments.filter((comment) => {
    return comment.post == parent.id; }); }, },

  User: { post(parent, args, ctx, info) { return posts.filter((post) => { return
  post.id == parent.post; }); },

    comments(parent, args, ctx, info) { return comments.filter((comment) => {
    return comment.author == parent.id; }); }, }, Comment: { post(parent, args,
    ctx, info) { return posts.find((post) => { return post.id == parent.post;
    }); },

    author(parent, args, ctx, info) { return users.find((user) => { return
    user.id == parent.author; }); }, }, };

const server = new GraphQLServer({ typeDefs, resolvers, });

server.start(() => { console.log("The server is up!"); }); ```

### Mutation

Mutation is a way to change, data in the database. They are exactly the same as
querys.

```bash import { GraphQLServer } from "graphql-yoga"; import uuidV4 from
"uuid/v4";

//Five scalar value for graphql. string, Resolver, int, float, ID // Types
definition

const comments = [ { id: "5", text: "The first comment", author: "8", posts:
"isn54n", }, { id: "6", text: "The Second comment", author: "4", posts: "isn6",
}, { id: "7", text: "The Third comment", author: "5", post: "isn54n", }, ];

const users = [ { id: "8", name: "Kdotn", email: "kdotn@test.com", posts:
"isn54n", }, { id: "4", name: "Eduuh", email: "eduuh@test.com", posts: "isn6",
}, { id: "5", name: "Kamau", email: "kamau@test.com", post: "isn56", }, { id:
"6", name: "Musaya", email: "musaya@test.com", post: "isn4", }, ];

const posts = [ { id: "isn4", title: "The Next leve code of Evil", body: "Evil
is not a good code, its honourable in KENYA", published: true, author: "6", }, {
id: "isn56", title: "The Depend Hansle", body: "Evil is not a good thing, its
Hansle", published: true, author: "5", }, { id: "isn6", title: "The Awakening of
Evil", body: "Evil is not a good thing", published: true, author: "4", }, { id:
"isn54n", title: "The last Man on Earth", body: "Amazing things on earth",
published: true, author: "8", }, ];

const typeDefs = ` type Query { me: User!  post: Post!  users(query: String):
[User]!  posts(query: String): [Post]!  comments(query: String): [Comment!] }

   type Mutation { createUser(name: String, email: String, age: Int): User!
   createPost(title: String!, body: String! published: Boolean!, author: ID!):
   Post!  createComment(text: String!, author: ID!, post: ID!): Comment!  }

   type Comment { id: ID!, text: String!  author: User!  post: Post }

   type User { id: ID!  name: String!  email: String!  age: Int post: [Post!]
   comments: [Comment!]!  }

   type Post { id: ID!  title: String!  body: String!  published: Boolean!
   author: User!  comments: [Comment]!  } ;

// applicaiton schema // Resolver const resolvers = { Query: { comments(parent,
args, ctx, info) { if (!args.query) { return comments; } return
comments.filter((comment) => { return
comment.text.toLowerCase().includes(args.query.toLowerCase()); }); },
posts(parent, args, ctx, info) { if (!args.query) { return posts; } return
posts.filter((p, i) => { const isTitleMatch = p.title .toLowerCase()
.includes(args.query.toLowerCase()); const isBodyMatch = p.body .toLowerCase()
.includes(args.query.toLowerCase()); return isTitleMatch || isBodyMatch; }); },
users(parent, args, ctx, info) { if (!args.query) { return users; }

      return users.filter((user) => { return
      user.name.toLowerCase().includes(args.query.toLowerCase()); }); }, me() {
      return { id: "instinst", name: "Edwin", email: "edwin@test.com", age: 56,
      }; }, post: () => { return { id: "isntian", title: "The Awakening of
      Evil", body: "Evil is not a good thing", published: true, }; }, },
      Mutation: { createComment(parent, args, ctx, info) { const userExist =
      users.some((user) => user.id == args.author); const postExist =
      posts.some((post) => { return post.id == args.post && post.published ===
      true; });

      if (!userExist || !postExist) { throw new Error("Unable to find user and
      post"); }

      const comment = { id: uuidV4(), text: args.text, author: args.author,
      post: args.post, };

      comments.push(comment); return comment; }, createPost(parent, args, ctx,
      infor) { const userExist = users.some((user) => user.id === args.author);
      const titleToken = posts.some((post) => post.title == args.title);

      if (!userExist) { throw new Error("User not found"); }

      if (titleToken) { throw new Error("Title Taken"); }

      const post = { id: uuidV4(), title: args.title, body: args.body,
      published: args.published, };

      posts.push(post); return post; }, createUser(parent, args, ctx, infor) {
      const emailToken = users.some((user) => user.email == args.email);

      if (emailToken) { throw new Error("Email taken"); }

      const user = { id: uuidV4(), name: args.name, email: args.email, age:
      args.age, };

      users.push(user);

      return user; }, }, Post: { author(parent, args, ctx, info) { return
      users.find((user) => { return user.id == parent.author; }); },

    comments(parent, args, ctx, info) { return comments.filter((comment) => {
    return comment.post == parent.id; }); }, },

  User: { post(parent, args, ctx, info) { return posts.filter((post) => { return
  post.id == parent.post; }); },

    comments(parent, args, ctx, info) { return comments.filter((comment) => {
    return comment.author == parent.id; }); }, }, Comment: { post(parent, args,
    ctx, info) { return posts.find((post) => { return post.id == parent.post;
    }); },

    author(parent, args, ctx, info) { return users.find((user) => { return
    user.id == parent.author; }); }, }, };

const server = new GraphQLServer({ typeDefs, resolvers, });

console.log(server);

server.start((enst) => { const { port } = enst; console.log(`The server in up at
${port}`); }); ```

### configuring babel to compile rest spread

Lets install **babel-plugin-transform-object-rest-spread**

add the plugin to the **.babelrc**.

### refactoring the code to allow input types.

### A better organization of code.

The graphql server object has some, **context** object that is used to pass in,
commond object to all of the resolvers. This is the bestplace to pass the
database context.

### Enums short for enumerations.

1. A special type that defines a set of constants.
2. This type can then be used as the type for a field similar to scalar and
custom object types.
3. Values for the field must be one of the constants for the type.

### userRole - Standard , editor, admin

// type User { // role: userRole //}

Native driver ORM (sequelize or mongoose) Prisma (GraphQL ORM)
````
