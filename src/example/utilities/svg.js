"use strict";

import { parse } from "opentype.js";

export function svgFromCodePoint(codePoint, arrayBuffer) {
  const font = parse(arrayBuffer),
        character = String.fromCodePoint(codePoint),
        glyph = font.charToGlyph(character),
        path = glyph.getPath(0, 0, 1000),
        pathData = path.toPathData(),  ///
        boundingBox = path.getBoundingBox();

  const { x1, y1, x2, y2 } = boundingBox,
        x = x1, ///
        y = y1, ///
        width = x2 - x1,
        height = y2 - y1,
        viewBox = `${x} ${y} ${width} ${height}`,
        d = pathData; ///

  return (

    <svg viewBox={viewBox}>
      <path d={d} />
    </svg>

  );
}

export default {
  svgFromCodePoint
};
