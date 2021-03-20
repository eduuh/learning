using System;

namespace datastructures
{
    public class Customer {

        public Customer(string first, string lastname)
        {
            Firstname = first;
            Lastname = lastname;
        }

        public string Firstname{get; set;}
      public string Lastname{get; set;}

        public override bool Equals(object obj)
        {
            return obj is Customer customer &&
                   Firstname == customer.Firstname &&
                   Lastname == customer.Lastname;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Firstname, Lastname);
        }
    }
}
