"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get svgFromCodePoint () {
        return svgFromCodePoint;
    }
});
var _opentype = require("opentype.js");
function svgFromCodePoint(codePoint, arrayBuffer) {
    var font = (0, _opentype.parse)(arrayBuffer), character = String.fromCodePoint(codePoint), glyph = font.charToGlyph(character), path = glyph.getPath(0, 0, 1000), pathData = path.toPathData(), boundingBox = path.getBoundingBox();
    var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2, x = x1, y = y1, width = x2 - x1, height = y2 - y1, viewBox = "".concat(x, " ").concat(y, " ").concat(width, " ").concat(height), d = pathData; ///
    return /*#__PURE__*/ React.createElement("svg", {
        viewBox: viewBox
    }, /*#__PURE__*/ React.createElement("path", {
        d: d
    }));
}
var _default = {
    svgFromCodePoint: svgFromCodePoint
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3V0aWxpdGllcy9zdmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcIm9wZW50eXBlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdmdGcm9tQ29kZVBvaW50KGNvZGVQb2ludCwgYXJyYXlCdWZmZXIpIHtcbiAgY29uc3QgZm9udCA9IHBhcnNlKGFycmF5QnVmZmVyKSxcbiAgICAgICAgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZVBvaW50KSxcbiAgICAgICAgZ2x5cGggPSBmb250LmNoYXJUb0dseXBoKGNoYXJhY3RlciksXG4gICAgICAgIHBhdGggPSBnbHlwaC5nZXRQYXRoKDAsIDAsIDEwMDApLFxuICAgICAgICBwYXRoRGF0YSA9IHBhdGgudG9QYXRoRGF0YSgpLCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQm94ID0gcGF0aC5nZXRCb3VuZGluZ0JveCgpO1xuXG4gIGNvbnN0IHsgeDEsIHkxLCB4MiwgeTIgfSA9IGJvdW5kaW5nQm94LFxuICAgICAgICB4ID0geDEsIC8vL1xuICAgICAgICB5ID0geTEsIC8vL1xuICAgICAgICB3aWR0aCA9IHgyIC0geDEsXG4gICAgICAgIGhlaWdodCA9IHkyIC0geTEsXG4gICAgICAgIHZpZXdCb3ggPSBgJHt4fSAke3l9ICR7d2lkdGh9ICR7aGVpZ2h0fWAsXG4gICAgICAgIGQgPSBwYXRoRGF0YTsgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxzdmcgdmlld0JveD17dmlld0JveH0+XG4gICAgICA8cGF0aCBkPXtkfSAvPlxuICAgIDwvc3ZnPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnRnJvbUNvZGVQb2ludFxufTtcbiJdLCJuYW1lcyI6WyJzdmdGcm9tQ29kZVBvaW50IiwiY29kZVBvaW50IiwiYXJyYXlCdWZmZXIiLCJmb250IiwicGFyc2UiLCJjaGFyYWN0ZXIiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiZ2x5cGgiLCJjaGFyVG9HbHlwaCIsInBhdGgiLCJnZXRQYXRoIiwicGF0aERhdGEiLCJ0b1BhdGhEYXRhIiwiYm91bmRpbmdCb3giLCJnZXRCb3VuZGluZ0JveCIsIngxIiwieTEiLCJ4MiIsInkyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJkIiwic3ZnIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2QkE7ZUFBQTs7UUF6QmdCQTtlQUFBQTs7O3dCQUZNO0FBRWYsU0FBU0EsaUJBQWlCQyxTQUFTLEVBQUVDLFdBQVc7SUFDckQsSUFBTUMsT0FBT0MsSUFBQUEsZUFBSyxFQUFDRixjQUNiRyxZQUFZQyxPQUFPQyxhQUFhLENBQUNOLFlBQ2pDTyxRQUFRTCxLQUFLTSxXQUFXLENBQUNKLFlBQ3pCSyxPQUFPRixNQUFNRyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQzNCQyxXQUFXRixLQUFLRyxVQUFVLElBQzFCQyxjQUFjSixLQUFLSyxjQUFjO0lBRXZDLElBQVFDLEtBQW1CRixZQUFuQkUsSUFBSUMsS0FBZUgsWUFBZkcsSUFBSUMsS0FBV0osWUFBWEksSUFBSUMsS0FBT0wsWUFBUEssSUFDZEMsSUFBSUosSUFDSkssSUFBSUosSUFDSkssUUFBUUosS0FBS0YsSUFDYk8sU0FBU0osS0FBS0YsSUFDZE8sVUFBVSxBQUFDLEdBQU9ILE9BQUxELEdBQUUsS0FBUUUsT0FBTEQsR0FBRSxLQUFZRSxPQUFURCxPQUFNLEtBQVUsT0FBUEMsU0FDaENFLElBQUliLFVBQVUsR0FBRztJQUV2QixxQkFFRSxvQkFBQ2M7UUFBSUYsU0FBU0E7cUJBQ1osb0JBQUNkO1FBQUtlLEdBQUdBOztBQUlmO0lBRUEsV0FBZTtJQUNiekIsa0JBQUFBO0FBQ0YifQ==