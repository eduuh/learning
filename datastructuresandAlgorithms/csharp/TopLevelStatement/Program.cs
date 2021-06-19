// Top level statement are removed

System.Console.WriteLine(nint.MaxValue);
System.Console.WriteLine(nint.MinValue);

char? name = 'a';

if (name is not null)
{
     System.Console.WriteLine("Not null");
} else {
     System.Console.WriteLine("The value is Nulll");
}

System.Console.WriteLine(name.IsLetter());

public static class Extension
{
    public static bool IsLetter(this char? c) =>
        c is >= 'a' and <= 'z' or >= 'A' and <= 'Z';
}


public record WeatherObservation(string Temperature, string Rainfal);


