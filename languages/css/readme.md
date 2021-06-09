### Introduction

In this section we look at what css is and how to use it. We will also look at setting up a style sheet and linking it to our html document.

- Css stands for **Cascading styles sheet.**
- It is languages used to give **styling and design** to websites.
- It is the standards for styled Websites, used by most/all websites across the globe.
- It usually goes hand-in-hand with Html, wile css3 the lastest version brings lots of new feauters to the table.

#### Reasons to use Css

1. Styling.
2. Layouts and Design
3. Animations.
4. Fonts Changes
5. Organizations.
6. Grid System.

#### How is Css Used

- Typically a files is saved in the **.css** format and liked to using an Html tag.
- Css Selectors can be used to address parts of the pages to style and use.
- Htmls elments are given class and Id attributes, which are then used to manipulate in Css.
- It typicall follows this method: Select, then Edit

#### Creating and Linking Css With HTML

### Selectors and Properties

1. Selector are ways of grabbing and manipulating HTML.
2. There are many different ways to select, however they all turn out the same way.
3. Different selector have different application.

#### The Element Selector

- You can select entire elements without any special characters.
- This applies to all of the elements without tag on the page.
- It ranks on the bottom of the specificity scale.

#### The class Selector

- This is used t select elements with a certain class name.
- Can be used on any and all elements with that class.
- Can be used multiple times, and is select with the Symbol.

#### The ID Selector

- This is used to select elements with a certain Id name.
- Can be used on any and all elements with that ID.
- Unlike classes, it can only be used on one elements at a time, and is selected with the # symbol.
- However, it is possilbe to use more than once.

```html
<p id="sometext">sometext</p>
<p id="sometext">sometext</p>
```

```css
#sometext {
}
```
Specificity. overriding of properties in css. Different selector are more powerful selector than others. The powerful selectors could override the overall them of elements.

The element selector is less powerfult that the class selector. The class will override the Element selector.

```html
<h2 class="about-me" id="services">Test</h2>

h2 {
    color:red
}

.about-me {
    color: blue
}

#services {
    color: green
}
```

When you have a class selector, element selector and Id selector. The Id selector overrides the rest of the selectors. The h2 element blow will result to be brown color.

```html
<h2 class="title" id="services">My Website is Here</h2>
h2{
    color: red
}
#services{
    color: brown
}
.title {
    color: green
}
```

There is still one more that is more powerfull. **inline styling** You don't need a css style for this to work. This will always override other css styling.

```html
<h2 class="title" id="services" style="color: steelblue;">My Website is Here</h2>
h2{
    color: red
}
#services{
    color: brown
}
.title {
    color: green
}
```
the order of specifity.

1. Inline
2. Id
3. Class
4. Header Selectors

The id is meant to be used for a single element, While classes are meant to be used for multiple elements.

### PseudoSelectors.

First child and Last Child. Let me show you an example of a pseudoSelector. They are used to specify behaviours.

```css
<h2>Test Edwin</h2>
<ul>
  <li>Javascript</li>
  <li>Csharp</li>
  <li>C++</li>
</ul>

h2:hover {
    color: red
}

li:first-child {
    color:steelblue
}

li:nth-child(2){
    color: green;
}
```

When we only have one child we can use the selector.

```css
li:only-child {
    color: purple
}
```

Creating PseudoSelectors for Achor elements. To show the visited and unvisited links.

```css
#google-link:link {
  color: blue
}

#google-link:visited{
  color: red
}
```

### Advanced Selectors

There are not used most oftenly. **Adjacent Sibling** selector. Everly Anchor tag that follows a h2 element.

```html
<h2>Services</h2>
<a href="http://www.google.com" id="google-link">Click here to google</a>
```
```css
h2 + a {
    color: red
} 
```

```css
/*every button that follow a textarea in the same parent.*/
textarea ~ button {
 color: purple
}
```
### Attribute Selector
Selecting html element by used of their attributes. You could decide to select all the h2 element with the class of **subtitle**

```css
h2[class="subtitle"] {
    color: green;
}
```

Select all the images which start with the path **image/**

```css
img[src*="image"]{
    border: 10px solid black
}
```

### Notes.

You can have an element with multiple class tags. You can Select element that comes after a space with the following attribute selector.

```css
<h2 class="article article-subtitle">About Me</h2>
h2[class~=article-subtitle] {
    background: green;
}
```

```css
h2[class|=article-subtitle]{
    background: green;
}
```

#### Properties

They are container inside a Selector. The element are the properties.

- They are usually key value pairs.
- A colon is always used after the properties followed by the value that describles the change. The statement ends with a semicolon.

```css
    background: green;
```

#### How to Properties and Properties work Together.

Let look carefully on the sytax below. **The General Rule of CSS**

```css
h2:hover {
  color: red;
}

#services {
  color: brown;
}
```
There is usually three parts to a Css selector.

1. The selector. Attribute Selector, Element selector PseudoSelector
The selector targerts an html element on the page
2. The Cury Brackets that Defines the css block.
Containes all the styles targeted to our selectors.
3. The Properties inside the Cury Brackets.
You can have more than one Properties.

```css
selector {
    property: value;
    property2: value;
}
```

## Coloring and Formattings.

We can to be able to color our website in a way that looks modern and appeling to the Users.
 
Types of colors.

  1. The Css Color Codes and Names
    - Easy way of testing if the colors work during the development stage.
  
### Hex Code.

Hex Code. There are usually 16 combinations. It runs from 0-9 and from a-f. Example of a hex code value **8fa75e0**. A color is usuall made up of three colors **red, blue, green**. A hex code is made of up 6 digits, therefore two charcters denotes the amount of each colors.

The color code can be noted as hex code or a decimal value.

1. Rgb code **rgb(83,155,166)**  : the decimal format of the color. Which each color is represent by a number between **0-255**.

Use the rgb color codes. Examples.

```css
/* <h2 id="titile">My Website</h2>*/

#title {
    color: rgb(214, 183, 5);
}

.subtitle {
    color: rgb(214,183,5)
}
```

### Background Colors.

Making the background color for the whole site. We can used an element selector for the body. Use  the **background** color is quite flexible since you can select images.

```css
body {
    background: rgb(219,89,3);
}
```

An Alternate way of creating background for our site. Setting the background with image using urls. We can use inbuild css functions ie **url()**. The url can take a Link or a Path.

> ##### Note the below code will have repetition.

```css
body {
    background: url("https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png");
}
```

You can also be specific about the background by using the properties.

```css
    background-color: rgb(23,34,234)
    background-image: url("./images/bg.png")
```

#### Making background Work better.

I created a div with a **height of 400px** and **width: 70%** and setting the backgroud to an image. The default behaviour of css is taking the images and filling up the box with repetition of the image if the image is not big enough.

To fix the issue you need a simple property called **background-repeat** set to **no-repeat**. 

```html
<div id="service-image"></div>
```
```css
#service-image {
    height: 400px;
    width: 70%;

    background: url("../image/img-1.jpg")
    background-repeat: no-repeat
}
```
It might seem like the div is resize to the image size, But what happens is that the image is put inside the box but the div occupies its whole width. This can be seen if you set the background of the div to soomthing noticable. Say red. **background: red**

### That is not very good! is it?

We need a way to alter the size. We use the **background-size: height width**. Here you will notice that its very difficult to get up to the dimension of the image. There is a shortcut. **cover** value although this sucrifices the quality fo the image. Cover will stretch the image.

```
background-size: cover;
```
You can also use **contain** but the only problm with contain it will resize the image according to the aspect of the image.

> Lets Improve by adding the Alpha component.

To use the Alpha property we need to change the **rgb(red,green,blue)** with the **rgba(reg,green,blue, alpha)**. Another name for alpha value is the **opacity**. Thinking of this value as a percentage will help undestand it. The value ranges from **0-1** , 0 being zero Percent, and 1 being 100 percent. This value makes the colors or control the lightness of the colors. Zero is fully Transparent while 1 is fully opaque.

```css
background: rdba(red,green,blue, alpha)
```
### ColorGradient

A transition between two colors. It diffuses through the colors. There are two types of gradient. **radial** and **linear**.

> #### Linear Gradient

The first element of the **linear-gradient** is the direction of color transition followed by the colors. Note here i used Css color codes, since its much easier to see.


```css
    background:  linear-gradient(to right, red,blue, green, steelblue);
```
Most likely you are going to use an **rba(reg,green,blue)** in There.

> #### Diagonal Gradient

To specify the forward diagonal you can use the direction **to bottom right**.
```css
    background:  linear-gradient(to bottom right, red,blue, green, steelblue);
```

> #### Note You can directly control the direction of gradients.

You could use the **angle** direction.

```css
    background:  linear-gradient(215deg, red,blue, green, steelblue);
```

> #### Radial Gradient

Radial gradients do not have a direction.
```css
    background:  radial-gradient(red,blue, green, steelblue);
```
You can manipulate the percentages of the colors.

```css
    background:  radial-gradient(red 20%,blue 30%, green 60%, steelblue);
```

With radial gradient you can also manipulate the shape of the gradient. There are type of shapes you can use **circle** or **ellipes**.

```css
 background:  radial-gradient(circle,red 20%,blue 30%, green 60%, steelblue);
```


### Fonts and text Manipulations

### Text Decoration






### Css Units

Css has several different units for expressing a lenght.
Many Css properties take "length" values such as **width, margin, padding, font-size**
**Length** is the number of folowed by a length unit such **10px** , **2em**.

```css
h1 {
    font-size: 60px;
}

p {
    font-size: 25px;
    line-height: 50px;
}
```

### Absolute Units.

The absolute lenght units are fixed and a leght expressed in any thes will appear as exactly that size.

Absoluet length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is know such as for print layouts.

unit   |   description
-------|------------
cm | centimeters
mm | milimeters
in | inche 
px* | pixels (1px = 1/96th of 1inch)
pt  | points (1pt = 1/72th of 1inch)
pc | picas(1 px = 12pt)


### Relative Units.

Relative Lenght units specify a length relative to another length property. Relative lenght units scale better between different redering medium.

Unit   | Description
-------|------------------------
em    | Relative to the font-size of the element (2em means 2 times the size of the current font)
ex    | Relative to the x-heigth of the current font (rarely used)
vh    | Relative to 1% of the height of the viewport.
vw    | Relative to 1% of the width of the viewport*
vmax  | Relative to 1% of viewPorts larger dimension
%     | Relative to the Parent Element.

The viewport is the browser window size.


### Layout

Techiques to meddle with the layout on a website. The bodies witdth and height.

### FlexBox

### Grid

Just like Flexbox, this skill is an alternate method to laying items out in CSS. 
### Animations and Trasitions

Using pseudoselector to create smooth transitions.


