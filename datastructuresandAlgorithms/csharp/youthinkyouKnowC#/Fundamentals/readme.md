### Values and Reference Types

1. Values type are allocated inline and reference types are allocated on the stack.
2. In value type the variable is the value but the references type the variable is
   the address(reference)
3. Strings are references types

Structs are value types inline on the stack.

What does passing by value means? It means that the dotnet runtime is makind a
copy of the values each time they are passed on the methods. The method modifies
the copy of the variable and then throws the method awa.

Passing by reference. The actual variable is sends to the method. You can
actually change the variable. methodName(ref method)

concatnating string have a const of copy over and creating garbage which also
have a cost.
