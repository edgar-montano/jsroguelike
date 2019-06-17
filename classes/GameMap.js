import Tile from "./Tile.js";
import Glyph from "./Glyph.js";

class GameMap {
  constructor(tiles) {
    this._tiles = tiles;
    this._width = tiles.length;
    this._height = tiles[0].length;
  }

  getWidth = () => this._width;
  getHeight = () => this._height;

  getTile = (x, y) => {
    if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
      return new Tile(new Glyph());
    } else {
      return this._tiles[x][y] || new Tile(new Glyph());
    }
  };
}

export default GameMap;
