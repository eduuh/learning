using System;

// When can something be static

// Static classes does not support polymophism
// Static classed cannot implement interface
// If you don't need an insance of an object
// static classes cannot be sent from method arguments.

// Type of classe that we normaly use behaviour 
// Dto > data transfer objects . State only classes
// Dto have instatnces. The instances are immutable
// this classes have state that are immutable.

// >net Memroy layout - reference type
// value type
// referenc type
// static

// if i dont need an instance , why the heck should i create one.
//  the minime is 12bytes or 64byte in a 64 bit

// Type of type type
// The runtime takes our class definition and converts tht to somethind it
// undestands. And for the runtime to undestand something, it need to create and
// instance fo the object.
//
// type object, is the instance of the type
// ONe instance of type for an Appdomain.


// Behoviour classes
// classes with behaviour but no state. Pure functions

// Whe using static classes.

// All method must be automonous and pure
//   the dto passed need to be immutable.
//   Autonomouns method => method that rely arguement givent in the method
//   signature.
//
//   Pure methods => Methods are pure if they don't change state.
// the class should have no properties. Constant state
//
// Static class are internal and are not meant to be shared across yous systems.




namespace staticClasses
{
    internal static class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
  }
}
