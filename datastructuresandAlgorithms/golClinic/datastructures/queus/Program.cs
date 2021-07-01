using System;

namespace queus
{

    public class Queu
    {
        private int[] _items;
        private string _capacity;
        private int _front = 0;
        private int _rear = 0;

        public Queu()
        {
            _items = new int[10];
        }
        public Queu(int size)
        {
            _items = new int[size];
        }

        //Enqueue = pushing
        public void Enqueue(int item)
        {
            // if front = rear && capacity > 0
            if (_capacity > 0 && _rear == _front)
            {
                var source = _items;
                _items = new int[_items.Length * 2];
                copy(_front, source, destination);
                _items[_rear] = item;
                _rear++;
                _capacity++;
                return;

            }
            //case
            //if the queue is empty
            // 0 , 0 ,0
            // 1, 0, 0 +
            // 1, 2, 0 +
            // 1, 2, 4 +
            //if queue is full front = 0 and & rear = length -1
            if (_front == 0 && _rear == 0 && _capacity == 0)
            {
                _items[_rear] = item;
                _rear++;
                _capacity++;
                return;
            }

            // queue is not full --rear not equal to len-1

            if (_rear > 0 && _rear <= item.Length - 1)
            {
                _items[_rear] = item;
                _rear++;
                _capacity++;
                return;
            }


            //0,0,0
            // 1, 0, 0 +
            // 1, 2, 0 +
            // 0, 2, 0 - dequeue
            // 0, 2, 1 +  rear points at 2 && left
            if (_rear == _items.Length && front == 0)
            {
                //arr is full
                var tempSource = _items;
                _items = new int[_items.Length * 2];
                copy(tempSource, _items);
                _items[_rear] = item;
                _rear++;
                _capacity++;
                return;
            }




            //0,0,0
            // 1, 0, 0 +
            // 1, 2, 0 +
            // 0, 2, 0 - dequeue
            // 0, 2, 1 +  rear points at 2 && left circular
            // check if full- front!=0 && rear=length-1

            if (_front > 0 && _rear = _items.Length)
            {
                _rear = 0;
                _items[_rear] = item;
                _capacity++;
                __rear++;
                return;
            }
        }

        public int Dequeu()
        {
            if (!_capacity == 0)
            {
                var frontItem = _items[_front];
                _front++;
                _capacity--;
            }
            else
            {
                System.Console.WriteLine("Empty put something first");
                return -1;
            }
        }

        public int Peek()
        {
            if (!_capacity == 0)
            {
                return _items[_front];
            }
            else
            {
                System.Console.WriteLine("Empty put something first");
                return int.MinValue();
            }
        }

        public int size { get { return _items.Length; } }
        public int Capacity { get { return _capacity; } }

        private void Copy(int[] source, int[] destination)
        {
            for (int i = 0; i < source.Length; i++)
            {
                destination[i] = source[i];
            }
        }
        private void Copy(int currentIndex, int[] source, int[] destination)
        {
            int idx = 0;
            for (int i = currentIndex; i < source.Length - 1; i++)
            {
                destination[i] = source[i];
            }

            for (int i = 0; i < source.Length - 1; i++)
            {
                destination[i] = source[i];
            }
        }
        //Dequeue =
        //Peek
        //size
        //capacity
    }
    class Program
    {
        static void Main(string[] args)
        {
            var que = new Queu(3);
            que.Enqueue(1);
            que.Enqueue(2);
            que.Enqueue(3);

            int size = que.size;
            int capacity = que.Capacity;
            System.Console.WriteLine(size);
            System.Console.WriteLine(capacity);

            que.Enqueue(3);
            size = que.size;
            capacity = que.Capacity;
            System.Console.WriteLine(size);
            System.Console.WriteLine(capacity);
        }
    }
}


// if we have the same pointer pointing the same value
// incase i want top peek.
