using System.Collections;

public class Garage
{
    private Car[] carArray = new Car[4];
    public Garage()
    {
        carArray[0] = new Car("Rusty", "34");
        carArray[1] = new Car("clucker", "44");
        carArray[2] = new Car("Zippy", "30");
        carArray[3] = new Car("Fred", "30");
    }

    public IEnumerator GetEnumerator(){
       return carArray.GetEnumerator();
    }
}

public record Car(string name, string plate);
