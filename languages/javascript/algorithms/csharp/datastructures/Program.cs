using System.Collections.Generic;
using System;

namespace datastructures
{
    class SampleStack
    {
        static void Main(string[] args) {
        
            var stack = new Stack<string>();
            stack.Push("one");
            stack.Push("Two");
            stack.Push("three");
           
            foreach (string item in stack)
            {
                  Console.WriteLine(item);
            }
        }

    }
}

//254773607403  
