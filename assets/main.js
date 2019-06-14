import {
    Color,
    Display
} from '../lib/index.js';
//  Options passed when we initialize our display object
let options = {
    width: 80,
    height: 20
};

let display = new Display(options);
document.body.append(display.getContainer());

let foreground, background, colors, x;
for (let i = 0; i < 15; i++) {
    x = i * 20;
    foreground = Color.toRGB([
        255 - x,
        255 - x,
        255 - x
    ]);

    background = Color.toRGB([x, x, x]);

    colors = "%c{" + foreground + "}%b{" + background + "}";

    display.drawText(2, i, colors + "Hello, World!");
}