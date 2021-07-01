using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Iterators
{
    class Program
    {
        static void Main(string[] args)
        {
          var collection = GetNumber().ToList();
          foreach (var item in collection)
          {
              Console.WriteLine(item);
          }

          foreach (var item in collection)
          {
              Console.WriteLine(item);
          }
        }

        private static IEnumerable<int> GetNumber(){
          yield return 0;
          yield return 1;
          yield return 2;
          yield return 3;
          yield return 4;
          yield return 5;
        }
    }
}
