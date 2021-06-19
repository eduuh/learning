using System;

namespace stacks
{
   // records 
   // create init-only properties
   // public string MyProperty { get; init; }

   // An init only property can only be set in the constructor or by using the
   // property initializer syntax
    public record Person(string Firstname, string LastName, string[] phonenumber);
    public record Person2(string FirstName, string LastName){
       public string[] PhoneNumbers {get; init;}
    }
    
    /// Records value equality that two variarbles of a record types are equal
    /// if the types match and all properties and field match.
    ///
    ///
    /// Referece types , equality means identity. that if , two variables of a
    /// reference type are equal if they refer to the same object.
    ///
    ///
    ///
    /// A record type have a compiler generated toSTring method that displays
    /// the names and values of public properties and fields.
    public record Human {
        public string Name { get; set; }
        public string LastName { get; set; }
    }

    public class CsharpNine {
         public string Name { get; set; }
         public string Lastname { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
          
            var phonenumber = new string[2];
            var chsharp = new CsharpNine();
            var person = new Person("Edwin", "Kamau", phonenumber);
            var person2 = new Person("Edwin", "Kamau", phonenumber);

            var edwin = new Person2("Edwin", "Musaya") {
               PhoneNumbers = new String[2]
            };

            Person2 edwin2 = edwin with { FirstName = "Edwin2" };

            System.Console.WriteLine("The with operator");
            System.Console.WriteLine(edwin2);



            System.Console.WriteLine(new CsharpNine());


            System.Console.WriteLine(person == person2);

            Person4 teacher = new Teacher("Edwin", "Teacher", 45);
            System.Console.WriteLine(teacher);

            var now = new WeatherObservation {
                RecordedAt = DateTime.Now,
                TemperatureinCelsius = 39,
                PressureInMillibars = 998.9m
            };

            System.Console.WriteLine(now);


        }
         

    public abstract record Person4 (string FirstName, string LastName);
    public record Teacher(string FirstName, string LastName, int Grade): Person4(FirstName, LastName);
    

    public struct WeatherObservation {
        public DateTime RecordedAt { get; init; }
        public decimal TemperatureinCelsius { get; init; }
        public decimal PressureInMillibars { get; init; }

    public override string ToString()
    {
        return $"{RecordedAt:h:mm tt} on {RecordedAt:m/d/yyyy} " +
            $"Temp = {TemperatureinCelsius} , with {PressureInMillibars} pressure";
            
    }
}
}
}
