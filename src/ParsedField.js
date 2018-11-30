import React from "react";
import styled from "styled-components";

import "katex/dist/katex.min.css";
import "highlight.js/styles/default.css";
import remark from "remark";
import math from "remark-math";
import hljs from "remark-highlight.js";
import katex from "remark-html-katex";
import html from "remark-html";

const Content = styled.div`
  pre {
    background-color: #f8f8f8;
    padding: 16px;
    border-radius: 4px;
    line-height: 1.75;
    overflow: auto;

    code {
      display: inline;
      padding: 0;
      background-color: transparent;
    }
  }
  img {
    width: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

const processor = remark()
  .use(math)
  .use(katex)
  .use(hljs)
  .use(html);

export default function ParsedField({ raw, ...rest }) {
  const html = processor.processSync(raw).toString();

  return (
    <Content
      className="parsedField"
      style={rest.style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
