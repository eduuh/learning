// C# is essentially writing the code for use

// How do C# code evolve. The layers

// we write code Visual Studio level. Not suppont for modules.
// Roysln compiler written in C# compiles to intermidiate language > dll
// JIT Compiler. The jitter, Takes what C# compiler to assemply language.
//    when you run the dll, The jitter compiles the file to system code the
//    method when you are executing.
//    The jitter have know intimate knowlegde about the system, operationg
//    sytem and the hardware.
// Hardware
//
//.Net runtime (CRL)
//The operating sytem
//The runtime.

// use of immutable datastructures to allow, multiple thread working on the same
// data structures having alot of work in parallale parrallazation.
//
//
// the lowercase int is the C# langeage, dotnet framwork know int32 are aliases.
// Primitive type is that the compiler has intimate knowlegde about the type.
// The mapping. The compiler have special treatment for different types.
//
// Nuances
// its a c# language compiler
// An int maps to int32
// A long maps to int64
// A sting maps to String
// No support for protected internals
//
// Benfits/Features
//
// New language featurse are independent of runtime
//
// Cil
//
// It a stack based language
// Protected internal
// Throw anything
// Overload based on return types
// Global methods and fields
// We have modules and the assemblies
//
// Lowering
// Delegate creation
// Events
// fixed keyword
// foreach loopes
// 'is' operator
// 'lock' statement
// '??' a.k.a the null-coalenscing
// "stackalloc" keyworkd
// string.concat()
// switch statement
// 'throw' expressison
// 'using' statement
// 'while' loop
// LINQ
// Async-await
//
//
// Jumps are expensive in for the jitter.
// Jit does the for loop unwiding where it rewrites the same code multiple times
//
//
// Jit Copiler Ryujit
// Code base predates .Net
// Designed to support X86 only
// Support
//    x86,x64,Arm32, Arm64
//    Fulll functional on windows linux and osx
// Ensures good throughput
//    Larginly linary order optimization and trasfroms
//    limits for those that are iherently super-linear.
// Recently introduced Tiered compilation.
System.Console.WriteLine("C# Lowering");

void DispalyPremium(object obj) {
    var policy = (PolicyDetails)obj;
    System.Console.WriteLine(policy.Premium);
}


DispalyPremium(new PolicyDetails(3434.343));

internal sealed class PolicyDetails {
   public double Premium { get; }
   public PolicyDetails( double premium )
   {
        Premium = premium;
    }

   public void DoSomething() {
       System.Console.WriteLine("PolicyDetails.DoSomething");
   }
}

//default value and constant are backend at the callsightb
//The nuance to this is if you change the, constant in the code your are working
//on and dont update all the dependendcise. The initial constant will still be
//backend into the original code.


