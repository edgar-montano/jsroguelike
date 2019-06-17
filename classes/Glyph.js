class Glyph {
  constructor(chr, foreground, background) {
    this._char = chr || " ";
    this._foreground = foreground || "white";
    this._background = background || "black";
  }

  getChar = () => this._char;
  getBackground = () => this._background;
  getForeground = () => this._foreground;
}

export default Glyph;
