### FlexBox

1. Flexbox is a new module in CSS3 that make it easy to align elmement to one another, in different directions and orders. 
2. The main idea behind flexbox is to give the container the ability to expand and to shrink elements to best use all the available space;
3. Flexbox replaces float layouts, using less and more readable and logical code.
4. Flexbox completely changes the way that we build one-dimensional layouts.
5. A true revolution in CSS!

```css
display: flex
(display: flex-inline)
```
The direction which the flex items are layout is called **main axis**. the other direction is called **cross axis**

### Properties on a container

1. **Flex-direction: row | row-reverse | column | colum-reverse**
2. **flex-wrap: wrap | wrap-reverse**
3. **justify-content:flex-start | flex-end | center | space-between | space-around | space-evenly**
4. **align-items: stretch |flex-start | flex-end | center | baseline**
5. **align-content: stretch | flex-start | flex-end| center| space-between| space-around**

Align content aligns the items in the cross Axis.

### Properties on Items

1. **align-self: auto | stretch | flex-start | flex-end| center| baseline**
2. **order: 0 | <integer>**  
3. **flex-grow: 0 | <integer>**
4. **flex-shrink: 1 | <integer>**
5. **flex-basis: auto | <length>** The property we use instead of width.

the last three have a short form version **flex: 0 1 auto**

flex-basis decrease when there is no space. 

Instead of using **flex-basis** and **flex-shrink** we should use the flex item **flex: 0 1 300px**.

### what happen when we have more items in the flex container.

1. **flex-wrap:**










