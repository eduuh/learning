using System.IO;
using Newtonsoft.Json;
using static System.Console;

string numbers = @"one 
Two
Three
four";
string letters = @"A
B
C
D";

 void test(){
     Write("Hit by ");
    using var left = new StringReader(numbers);
     using var right = new StringReader(letters);
     string item;
     do {
         item  = left.ReadLine();
         Write(item);
         item= right.ReadLine();
         Write(item);
     }while(item!=null);
}

test();

int[] myarrays = { 19, 23, 30, 49 };
foreach (int i in myarrays)
{
    System.Console.WriteLine(i);
}

var garage = new Garage();
WriteLine(JsonPrettify(JsonConvert.SerializeObject(garage)));

var draw = new Draw.BitmapImage();
draw.Draw();
draw.DrawInBoundingBox(2, 2, 3, 3);
draw.DrawUpsideDown();
WriteLine(JsonPrettify(JsonConvert.SerializeObject(draw)));


static string JsonPrettify(string json)
{
    using var sr = new StringReader(json);
    using var sw = new StringWriter();
    using var jsonreader = new JsonTextReader(sr);
    using var jsonWritter = new JsonTextWriter(sw) { Formatting = Formatting.Indented };
    jsonWritter.WriteToken(jsonreader);
    return sw.ToString();
}



public record Draw
{
    public interface IDrawable
    {
        void Draw();
    }

    public interface IAdvancedDraw : IDrawable
    {
        void DrawInBoundingBox(int top, int left, int bottom, int right);
        void DrawUpsideDown();
    }

    public class BitmapImage : IAdvancedDraw
    {
        public void Draw()
        {
            WriteLine("Drawing....");
        }

        public void DrawInBoundingBox(int top, int left, int bottom, int right)
        {
            WriteLine("Drawing ina box .....");
        }

        public void DrawUpsideDown()
        {
            WriteLine(" Drawing uppside down");
        }
    }
}





