"use strict";

import { Element } from "easy";
import { ajaxUtilities } from "necessary";

import { svgFromCodePoint } from "./utilities/svg";

const { get } = ajaxUtilities;

export default class View extends Element {
  didMount() {
    const codePoint = 0x1d538,
          host = "http://localhost:8888/",
          uri = `otf/STIXTwoText-Regular.otf`,
          query = {},
          headers = {
            "accept": "font/otf"
          },
          responseType = "arraybuffer";

    get(host, uri, query, headers, responseType, (arrayBuffer) => {
      const svg = svgFromCodePoint(codePoint, arrayBuffer);

      this.mount(svg)
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
