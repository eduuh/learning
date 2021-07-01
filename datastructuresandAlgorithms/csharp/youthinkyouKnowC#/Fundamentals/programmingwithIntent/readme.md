#### method Design

Methods are the foundational units of work and have a direct impact on how we
reason about the code we write. Good method design leads to good class design
and thus good system Api design.

#### The idea of Programming with intent

1. Tell a story.
2. Don't make me think
3. Don't make me wonder
And no head scratching moments please

This is for maintainability , comprehensibility and readability.
Try to remove ubiquities in the in the code we write.

This is what you want to eliminate.

Who the heck wrote that? Other expletives follow

#### Method Design Guidelines

1. Naming is everything

Names of 
 1. Classes
 2. Properties
 3. Methods
   - formal Arguments
   - Local Variables

The process

1. Write the code to make it work.
2. writing tests for all edge case.
3. Renaming the Coding aspects.

Don't be afraid for refactoring the code base to express the intent. If you've
name thing correctly your code is more readable, understandable and
maintainable

Method name should use the vocabulary of the Domain.
If formal arguments covey business information , they should be named as per the
domain.

### Methods should start their life as private.

In C#, methods without an access modifier are private. however, when you define
a new method explicitly makes the methods with the private access modifier

This makes your intent clear and anyone changing the access modifier will be
doing so (hopefully) intentionally and with an understanding of the
implications. If later you decide you need the method to be protected or public,
the that a decision you can make.

**"We don't expose our privates"**


### Public/internal methods should not be virtual

As per the c# design guidelines, public methods should not be virtual. Instead
define a public (non virtual) methods that in turn calls a protected virtual
method. The protected non-virtual method should have the same name as the public
method with a suffix of core.

```c#
internal abstract class ClientServiceGateWayBase {
   
   public async Task<ClientDetail>
   RetrieveClient(IEnumerable<ClientRequestParameteras>
           clientRequestParamenter){
           return await this.RetrieveClientCore(clientRequestParamenter)
   }

   protected abstract Task<ClientDetail>
   RetrieveClientCore(IEnumerable<ClientReqClientRequestParameteras>
   clientRequestParameters);

}
```

### Method Once Overridden should be sealed. Unless the class itself is sealed

The moment you define a descendent class - seal it. If the class is sealed the
method are automatically sealed.

Sealed prevents inheritance from occurring.

### Method should be Autonomous. 

That is, the method should ask for all the data it needs via its formal arguments. The method is not dependent on outside data.

### Method should be Pure.

The methods implementation should operate only on the formal arguments and any
local variables. Method should not change state.

The classes that have effect are usually the classes at the leave node are the
one that make state changes. The leave node classes are autonomous but not pure.

Method should be provided with the bare minimum information. Nothing more.

Method that are "Actions" or "Commands" should be void returning

Method that are Queries should return only the data they claim, or not return at
all.

#### Common Practice

Common Practise is not common sense. it does not imply it correct

Don't validate formal arguments!!

The basic idea?

If somebody is calling my method and the method clearly show the signature of
the requirement. 

If you lock the front door and you lock the back-door you're safe in the house.
Clean entry of data. validate , and clean up the data from the UI. If there are
spaces. You are removing the whitespace.

Cleaning methods

1. string.Empty()
2. isNullOrEmpyt()
3. IsNullOrWhiteSpace()

if you must check for Empyt check for length == 0

The string is either.
 1. A valid string
 2. a null

Don't use something that is ambiqouse **isNullOrEmpty**

1. Trim()
2. TrimLeft()
3. TrimRigth()

### Linq

ToList() , ToArray()
Single(), First()

Prefer Single() over SingleOrDefault()
Prefer  First() or FirstOrDefault()











Caveat Emptor. 



















