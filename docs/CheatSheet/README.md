# Cheat Sheet

## Default Theme Configuration in TailwindCSS

> Refer [tailwind.config.js](/tailwind.config.js)

> TailwindCSS Version : 2.1

> Examples available in [cheatsheet.html](/src/html/cheatsheet.html)

> Listed below are the basic and most commonly used. For full list refer tailwind [cheatsheet](https://tailwindcomponents.com/cheatsheet/)

### Screen Break Points

- **sm**
  > max-width: 640px;
- **md**
  > max-width: 640px;
- **lg**
  > max-width: 640px;
- **xl**
  > max-width: 640px;
- **2xl**
  > max-width: 640px;

### Display

- **.hidden**
  > display: none;
- **.contents**
  > display: contents;
- **.list-item**
  > display: list-item;
- **.block**
  > display: block;
- **.inline-block**
  > display: inline-block;
- **.flex**
  > display: flex;
- **.inline-flex**
  > display: inline-flex;
- **.inline**
  > display: inline;
- **.table**
  > display: table;
- **.inline-table**
  > display: inline-table;
- **.table-cell**
  > display: table-cell;
- **.table-caption**
  > display: table-caption;
- **.table-column**
  > display: table-column;
- **.table-column-group**
  > display: table-column-group;
- **.table-footer-group**
  > display: table-footer-group;
- **.table-header-group**
  > display: table-header-group;
- **.table-row-group**
  > display: table-row-group;
- **.table-row**
  > display: table-row;
- **.flow-root**
  > display: flow-root
- **.grid**
  > display: grid
- **.inline-grid**
  > display: inline-grid

### Colors

> The following are the colors that are available out of the box

- gray-{x}
- red-{x}
- yellow-{x}
- green-{x}
- blue-{x}
- indigo-{x}
- purple-{x}
- pink-{x}
  > x can be any one of the follwing values (50,100,200,300,400,500,600,700,800,900)

### Float

- float-left
  > float:left
- float-right
  > float:right
- float-none
  > float:none

### Clear

- clear-left
  > clear:left;
- clear-right
  > clear:right;
- clear-both
  > clear:both;

### Object Fit

- object-contain
  > Contained within its container
- object-cover
  > Cover its container
- object-fill
  > Stretch to fit its container
- object-none

### Box Sizing

- box-border
  > Include borders and padding
- box-content
  > Exclude borders and padding

### Overflow

- overflow-auto
  > overflow: auto;
- overflow-hidden
  > overflow: hidden;
- overflow-visible
  > overflow: visible;
- overflow-scroll
  > overflow: scroll;
- overflow-x-auto
  > overflow-x: auto;
- overflow-y-auto
  > overflow-y: auto;
- overflow-x-hidden
  > overflow-x: hidden;
- overflow-y-hidden
  > overflow-y: hidden;
- overflow-x-visible
  > overflow-x: visible;
- overflow-y-visible
  > overflow-y: visible;
- overflow-x-scroll
  > overflow-x: scroll;
- overflow-y-scroll
  > overflow-y: scroll;

### Position

- static
  > position: static;
- fixed
  > position: fixed;
- absolute
  > position: absolute;
- relative
  > position: relative;
- sticky
  > position: sticky;

### Top, Bottom, Left, Right, Inset

- top-{x}
- right-{x}
- bottom-{x}
- left-{x}
- inset-{x}
  > x is the scale value
  > For negative prefix (top|right|bottom|left|inset) with `-` like -top-2

### Visibility

- visible
  > visibility: visible;
- invisible
  > visibility: invisible;

### Z-Index

- z-{x}
  > x can be (0|10|20|30|40|50|auto)

### Spacing

#### Padding

- pt-{size}
  > padding-top
- pr-size
  > padding-right
- pb-size
  > padding-bottom
- pl-size
  > padding-left
  > size can be (0|0.5|1|1.5|2|2.5|3|3.5|4|5|6......|12|14|16|20|24|...|60|64|....|72|80|96)
- px-size
  > horizontal padding pads left and right with (size) scale
- py-size
  > vertical padding pads top and bottom with (size) scale
- p-size
  > pads all sides with (size) scale

#### Margin

- mt-{size}
  > margin-top
- mr-{size}
  > margin-right
- mb-size
  > margin-bottom
- ml-size
  > margin-left
  > size can be (0|0.5|1|1.5|2|2.5|3|3.5|4|5|6......|12|14|16|20|24|...|60|64|....|72|80|96)
- mx-size
  > horizontal margin left and right with (size) scale
- my-size
  > vertical margin top and bottom with (size) scale
- m-size
  > margin all sides with (size) scale

> For negative margin prefix with `-` example : -mt-1

#### Space Between

- space-x-{amount}
  > horizontal space amount
- space-y-{amount}
  > vertical space amount

### Sizing

#### Width

- w-{size}

  > size can have values (0|0.5|1|1.5|2|2.5|3|3.5|4|5|6......|12|14|16|20|24|...|60|64|....|72|80|96)

- w-auto

  > width:auto

- w-screen

  > screen width

- w-fraction
  > fraction can be (1/2,1/3,2/3,2/5,3/5,...,full)

#### Min-Width

- min-w-0
  > min-width: 0px;
- min-w-full
  > min-width: 100%;
- min-w-min
  > min-width: min-content;
- min-w-max
  > min-width: max-content;

#### Max-Width

- max-w-{size}
  > size can be (0|none|xs|sm|md|lg|xl|2xl|....|7xl|full|min|max|prose|screen-sm|screen-md|screen-lg|screen-xl)

#### Height

- h-size

  > size can have values (0|0.5|1|1.5|2|2.5|3|3.5|4|5|6......|12|14|16|20|24|...|60|64|....|72|80|96)

- h-auto

  > height:auto

- h-screen

  > screen height

#### Min-Height

- min-h-0
  > min-height: 0px;
- min-h-full
  > min-height: 100%;
- min-h-screen
  > min-height: 100vh;

#### Max-Height

- max-h-{size}
  > size can be (0|none|xs|sm|md|lg|xl|2xl|....|7xl|full|min|max|prose|screen-sm|screen-md|screen-lg|screen-xl)

### Typography

#### Font Family

- font-sans
  > font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
- font-serif
  > font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
- font-mono
  > font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

#### Font Size

- text-{size}
  > size can be (xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)

#### Font Weight

- font-thin
  > font-weight: 100;
- font-extralight
  > font-weight: 200;
- font-light
  > font-weight: 300;
- font-normal
  > font-weight: 400;
- font-medium
  > font-weight: 500;
- font-semibold
  > font-weight: 600;
- font-bold
  > font-weight: 700;
- font-extrabold
  > font-weight: 800;
- font-black
  > font-weight: 900;

#### List Style Type

- list-none
  > list-style-type: none;
- list-disc
  > list-style-type: disc;
- list-decimal
  > list-style-type: decimal;

#### List Style Position

- list-inside
  > list-style-position: inside;
- list-outside
  > list-style-position: outside;

#### Placeholder Color

- placeholder-{color}
  > color can have any values of [Colors](#Colors)

#### Text Alignment

- text-left
  > text-align: left;
- text-center
  > text-align: center;
- text-right
  > text-align: right;
- text-justify
  > text-align: justify;

#### Text Color

- text-{color}
  > color can have any values of [Colors](#Colors)

#### Text Decoration

- underline
  > text-decoration: underline;
- line-through
  > text-decoration: line-through;
- no-underline
  > text-decoration: none;

#### Text Transform

- uppercase
  > text-transform: uppercase;
- lowercase
  > text-transform: lowercase;
- capitalize
  > text-transform: capitalize;
- normal-case
  > text-transform: none;

#### Text Overflow

- truncate
  > overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
- overflow-ellipsis
  > text-overflow: ellipsis;
- overflow-clip
  > text-overflow: clip;

#### Vertical Alignment

- align-baseline
  > vertical-align: baseline;
- align-top
  > vertical-align: top;
- align-middle
  > vertical-align: middle;
- align-bottom
  > vertical-align: bottom;
- align-text-top
  > vertical-align: text-top;
- align-text-bottom
  > vertical-align: text-bottom;

#### Whitespace

- whitespace-normal
  > white-space: normal;
- whitespace-nowrap
  > white-space: nowrap;
- whitespace-pre
  > white-space: pre;
- whitespace-pre-line
  > white-space: pre-line;
- whitespace-pre-wrap
  > white-space: pre-wrap;

#### Word Break

- break-normal
  > overflow-wrap: normal; word-break: normal;
- break-words
  > overflow-wrap: break-word;
- break-all
  > word-break: break-all;

### Background

#### Background Color

- bg-{color}
  > color can have any values of [Colors](#Colors)

#### Gradient Color

- from-{color} via-{color} to-{color}
  > color can have any values of [Colors](#Colors)
  > If color to transparent is needed, just use from-{color} alone.

### Borders

#### Border Radius

- rounded-none
  > border-radius: 0px;
- rounded-sm
  > border-radius: 0.125rem;
- rounded
  > border-radius: 0.25rem;
- rounded-md
  > border-radius: 0.375rem;
- rounded-lg
  > border-radius: 0.5rem;
- rounded-xl
  > border-radius: 0.75rem;
- rounded-2xl
  > border-radius: 1rem;
- rounded-3xl
  > border-radius: 1.5rem;
- rounded-full
  > border-radius: 9999px;

> The above applies border radius to all corners, you can apply for inidividual corners or sides, using rounded-{x}-{none|sm|.....|full}
> x - (t|l|b|r|tl|tr|bl|br)

#### Border Width

- border border-{size}

  > size can be (0|2|4|8)

- border-{side} border-{size}

  > size can be (0|2|4|8)
  > side can be (t|l|b|r)

- divide-{x|y}-{width}

  > x divides elements horizontally with border and y divides elements vertically

- divide-{color}
  > color can have any values of [Colors](#Colors)

#### Border Color

- border-{color}
  > color can have any values of [Colors](#Colors)

#### Border Style

- border-solid
  > border-style: solid;
- border-dashed
  > border-style: dashed;
- border-dotted
  > border-style: dotted;
- border-double
  > border-style: double;
- border-none
  > border-style: none;
