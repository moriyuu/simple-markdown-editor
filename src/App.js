import React, { Component } from "react";
import styled from "styled-components";
import ParsedField from "./ParsedField";

const initialRaw = `# Title

\`\`\`js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello!");
  }
}

const mori = new Person("moriyuu");
mori.sayHello();
\`\`\`

sample text

- list 1
- list 2
- list 3

$G_{t} =R_{t+1} + \\gamma R_{t+2}+ \\gamma^2 R_{t+3}+....= \\displaystyle\\sum_{\\tau=0}^{\\infty} \\gamma^{\\tau} R_{t+1+\\tau}$
`;

class App extends Component {
  constructor() {
    super();

    this.state = { raw: localStorage.mdEditor || initialRaw };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ raw: e.target.value });
    localStorage.setItem("mdEditor", e.target.value);
  }

  render() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <ParsedField
          raw={this.state.raw}
          style={{ width: "50%", height: "100%", padding: "16px" }}
        />
        <Textarea onChange={this.handleChange}>{this.state.raw}</Textarea>
      </div>
    );
  }
}

export default App;

const Textarea = styled.textarea`
  width: 50%;
  height: 100%;
  padding: 16px;
  background-color: #0b1423;
  color: #fff;
  border: 0px;

  &:focus {
    outline: 0;
  }
`;
