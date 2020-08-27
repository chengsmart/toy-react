// const { render, Component } = require("./toy-react");
import { render, Component, createElement } from "./toy-react";

class MyComponent extends Component {
  constructor(){
    super();
    this.state = {
      a:1,
      b:2
    }
  }
  render() {
    return (
      <div>
        <h1> My Comment </h1> 
        {/* <button onclick={()=>{
          this.state.a++;this.rerender();
        }}>add</button> */}
        <button onclick={()=>{
          this.setState({a:this.state.a+1})
        }}>add</button>
        <h2> {this.state.a.toString()} </h2>
        <h3> {this.state.b.toString()} </h3>
        <div>{this.children}</div>
      </div>
    );
  }
}
render(
  <MyComponent id="a" class="c">
    <div>
      <h1>h1<span>标题</span></h1>
      <h2>h2标题</h2>
    </div>
    <div>123</div>
  </MyComponent>,
  document.body
);
