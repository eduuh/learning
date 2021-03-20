Structs are value types.

1. Value Sematics.
2. Reference types

Structs uses values systematics for equality.

```csharp
internal struct BlogPost {
  public string Title { get; }
  public string Author { get; }
  public string Post {get;}
  public BlogPost(string title, string author, string post, DateTime date) {
   Title = title;
   Author = author;
   Post = post;
   Date = date;
  }

}
```
