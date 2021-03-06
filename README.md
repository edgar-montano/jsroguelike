# jsrogue2

A roguelike game developed in JavaScript, utilizing modern JS features. This project is a reimplementation/fork of the initial rot.js tutorial which is now outdated as of 2013. 
The goal of this project is to make developing a Roguelike in Javascript relatively straightforward for beginners to follow. Each portion of the Roguelike will be created incrementally in separate branches, and each section will slowly help guide you to build your very own Roguelike game. 

[Live demo](https://edgar-montano.github.io/jsrogue2/)


## Part 1 - Hello, Rogue! Setting up rot.js. 

This section will guide you through on how to setup your own Hello, Rogue display screen.  As any 'Hello, World' application, the point of this is to ensure that you have a working development environment.

Whats New: 
- imports and destructuring
- live servering in vscode

![Part 1 - Displaying Hello World](screenshots/part-1-hello-world.png)

## Part 2 - Screen Management, Winning, Losing, and Everything in Between.

This section will guide you through screen management. In this section we create two classes, a core Game class, and a GameScreen class. 

GameScreen class will inherit the functionality of the Game class, and add additional functionality, namely, screen management. 

Whats New:
- Object Oriented Programming (Classes, Inheritance, etc)
- Constants

![Part 2 - Screen Management](screenshots/part-2-screen-management.gif)

## Part 3a - Carving the caves

This section guides you through map creation. A map is simply a collection of Tiles, our Tiles utilize the (Null Object Pattern)[http://en.wikipedia.org/wiki/Null_Object_pattern]. The map created will be procedurally generated using a strategy called (cellular automata)[http://roguebasin.roguelikedevelopment.org/index.php?title=Cellular_Automata_Method_for_Generating_Random_Cave-Like_Levels]. Finally we modify GameScreen method to render our new map. 

Whats New:
- Tile, Glyph and GameMap classes
- Updated types to incorporate generic tile sets. 

![Part 3a - Carving the Caves](screenshots/part3a-carving-the-caves.gif)
 
#### Credit

This project is inspired by [codingcookies - guide to building a roguelike in js](http://www.codingcookies.com/2013/04/01/building-a-roguelike-in-javascript-part-1/) &
[roguebasin - guide to building a roguelike in js](http://www.roguebasin.roguelikedevelopment.org/index.php?title=Rot.js_tutorial), both projects unfortunately are now outdated and don't utilize JS features such as arrow functions, classes, etc; making it relatively difficult for someone just getting into Javascript to easily pick up and develop their own Roguelike. 
