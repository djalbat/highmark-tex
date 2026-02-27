"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
const _easy = require("easy");
const _necessary = require("necessary");
const _svg = require("./utilities/svg");
const { get } = _necessary.ajaxUtilities;
class View extends _easy.Element {
    didMount() {
        const codePoint = 0x1d538, host = "http://localhost:8888/", uri = `otf/STIXTwoText-Regular.otf`, query = {}, headers = {
            "accept": "font/otf"
        }, responseType = "arraybuffer";
        get(host, uri, query, headers, responseType, (arrayBuffer)=>{
            const svg = (0, _svg.svgFromCodePoint)(codePoint, arrayBuffer);
            this.mount(svg);
        });
    }
    willUnmount() {
    ///
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYWpheFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgc3ZnRnJvbUNvZGVQb2ludCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdmdcIjtcblxuY29uc3QgeyBnZXQgfSA9IGFqYXhVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29kZVBvaW50ID0gMHgxZDUzOCxcbiAgICAgICAgICBob3N0ID0gXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvXCIsXG4gICAgICAgICAgdXJpID0gYG90Zi9TVElYVHdvVGV4dC1SZWd1bGFyLm90ZmAsXG4gICAgICAgICAgcXVlcnkgPSB7fSxcbiAgICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgXCJhY2NlcHRcIjogXCJmb250L290ZlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG5cbiAgICBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCAoYXJyYXlCdWZmZXIpID0+IHtcbiAgICAgIGNvbnN0IHN2ZyA9IHN2Z0Zyb21Db2RlUG9pbnQoY29kZVBvaW50LCBhcnJheUJ1ZmZlcik7XG5cbiAgICAgIHRoaXMubW91bnQoc3ZnKVxuICAgIH0pO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiZ2V0IiwiYWpheFV0aWxpdGllcyIsIkVsZW1lbnQiLCJkaWRNb3VudCIsImNvZGVQb2ludCIsImhvc3QiLCJ1cmkiLCJxdWVyeSIsImhlYWRlcnMiLCJyZXNwb25zZVR5cGUiLCJhcnJheUJ1ZmZlciIsInN2ZyIsInN2Z0Zyb21Db2RlUG9pbnQiLCJtb3VudCIsIndpbGxVbm1vdW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7O3NCQVBHOzJCQUNNO3FCQUVHO0FBRWpDLE1BQU0sRUFBRUMsR0FBRyxFQUFFLEdBQUdDLHdCQUFhO0FBRWQsTUFBTUYsYUFBYUcsYUFBTztJQUN2Q0MsV0FBVztRQUNULE1BQU1DLFlBQVksU0FDWkMsT0FBTywwQkFDUEMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLEVBQ25DQyxRQUFRLENBQUMsR0FDVEMsVUFBVTtZQUNSLFVBQVU7UUFDWixHQUNBQyxlQUFlO1FBRXJCVCxJQUFJSyxNQUFNQyxLQUFLQyxPQUFPQyxTQUFTQyxjQUFjLENBQUNDO1lBQzVDLE1BQU1DLE1BQU1DLElBQUFBLHFCQUFnQixFQUFDUixXQUFXTTtZQUV4QyxJQUFJLENBQUNHLEtBQUssQ0FBQ0Y7UUFDYjtJQUNGO0lBRUFHLGNBQWM7SUFDWixHQUFHO0lBQ0w7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=