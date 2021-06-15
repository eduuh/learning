## Sass And How does it Work

Sass is a css preprocessor , an extension of Css that adds power and elegance to
the basic language.

## the process

1. We write Sass source code
2. The sass source code is then compiled by a ***sass compiler to complied css
   code

>  The website does not no that the code we wrote was in sass since it only see
>  the generated css

### What do we Get from Using Sass

Considering this html file, look at the example of the sass features below.

```html <nav> <ul class="navigation" <li><a href="#">About us</a></li> <li><a
href="#">Pricing</a></li> <li><a href="About Use">Sign Up</a></li> </ul> <div><a
class="btn-main" href="#">Sign Up</a> <a class="btn-hot" href="#">Get a
Quote</a></div> </nav> ```

#### Variables

For reusable values such as colors, font-sizes , spacings, etc.

```scss
* { margin: 0; padding:0; } // variables

$color-primary: #f9ed69; // $color-secondary: #f08a5d; $color-tertiary: #b83b5e;

nav { margin: 30px; background-color: $color-primary } ```

#### Nesting

To nest selectors inside one another, allowing us to write less code.

```scss

.navigation { list-style: none;
  
  li { display: inline-block; margin-left: 30px;
    
    &:first-child { margin:0; } }
  
} ```

The arpasad sign writes out the full path up the nesting part. Like for the
above the nesting path in the compliled css is writen as .

```css .navigation li:first-child { margin: 0; } ```

#### Operators

For mathematical operations right iside of CSS.

```scss

.btn-main { &:link { background-color: $color-secondary; } &:hover {
  background-color: darken($color-secondary, 15%) } } ```

####  Mixins

To write reusable piece of css code. When element  is floated and it happend to
be taller than the containing element, it will overflow outside of its
container.

The we can add **overflow: auto;** to the containing element to fix this
problem.

```css .clearfix { overlow: auto; } ``` the oveflow auto clearfix work welll as
long as you are able to keep control of your margins and paddings.  The modern
way of clearfix is to use this code.

```css .clearfix::after { content: "", clear: both; display: table }

``` This can be a pontential reusable code , through out the code base.

The mixis can be created and used as the following

```scss

@mixin clearfix { &::after { content: ""; clear: both; display: table;   } }

nav { margin: 30px; background-color: $color-primary;
  
  @include clearfix;
  
} ```

The compiled css will result to the following.

```css nav { margin: 30px; background-color: #f9ed69; } nav::after { content:
  ""; clear: both; display: table; } ```

Having mixing with variables.

```scss @mixin style-link-text($col){ text-decoration: none; text-transform:
  uppercase; color: $col; } ```

```html .btn-main:link, .btn-hot:link { display: inline-block; padding: 10px;
  border-radius: 100px; text-align: center; width: $width-button; @include
    style-link-text($color-text-light); } ```

#### Functions

Simila to mixins, with the difference that they produce a value that can be
used.

Here is some example of using some inbuild functions.

```scss .btn-main { &:link { background-color: $color-secondary; } &:hover {
  background-color: darken($color-secondary, 15%) } } ```

We could also Define our Own Functions. A function that divide two inputs.


```scss @function divide($a,$b) { @return $a/$b }

.nav { margin: divide(60,2) * 1px; } ```

#### Extends

To make different selectors inherit declarations that are common to all of them.
We can use common to the button are put in a placeholder. Anly use extends when
the selector are extremly related to one another.

```scss %btn-placeholder { display: inline-block; padding: 10px; border-radius:
  100px; text-align: center; width: $width-button; @include
    style-link-text($color-text-light); }

.btn-main { &:link { @extend %btn-placeholder; background-color:
  $color-secondary; } &:hover {
 
    background-color: darken($color-secondary, 15%) } } ``` The Final generated
    code for the extend with become something like the following.

``` .btn-hot:link, .btn-main:link { display: inline-block; padding: 10px;
  border-radius: 100px; text-align: center; width: 150px; text-decoration: none;
  text-transform: uppercase; color: #eee; } ```

Mixins and Extends work very different. For the mixin the code is added to the
element.  but in the case of the extend placeholder. The Code from the element
is copid over to the placeholder.


#### Control directives

For writing complex code using conditonals and loops. This is mainly used for
wrting framworks.

#### Sass Syntax

Sass have two sass syntaxs.

1. Sass Syntax

```Sass .navagation list-style: none float: left

  & li display: inline-block margin-left: 30px ```

2. SCSS syntax

```scss .navigation { list-style: none; float: left;
   
   & li { display: inline block; margin-left: 30px; } } ```

The second  syntax is preferable since it more like css looks like.

### Sass and Npm




