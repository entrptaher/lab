import React from "react";
import regexGen from "autoregex";
import autoBind from "react-autobind";
import regexOptimizer from "regex-optimizations";

class App extends React.Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      text: "enter sample word or number like 123",
      regex: null,
      optimized: null
    };
  }
  componentDidMount() {
    this.getRegexText(this.state.text);
  }
  getRegexText(text) {
    try {
      if (!text) throw('Blank data')
      const regex = regexGen(text).full;
      const optimized = new regexOptimizer(new RegExp(regex));
      this.setState({ regex, optimized: optimized.output.string });
    } catch (error) {
      return this.setState({ regex: '', optimized: '' });
    }
  }
  changeSampleText(e) {
    const text = e.target.value;
    this.setState({ text });
    this.getRegexText(text);
    
  }
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-5">Generate Regex Automatically!</h1>
          <p className="lead">
            The regexGen() function generates a regex from a single word sample.
            By using single sample, the generated regex will not match words
            that are identical to the sample but will match words having the
            exact same properties like the sample's properties.
          </p>
          <a
            className="btn btn-primary"
            href="https://github.com/entrptaher/autoregex"
            role="button"
            target="_blank"
          >
            Autoregex
          </a>
          <a
            className="btn btn-primary"
            href="https://github.com/entrptaher/regex-optimizations"
            role="button"
            target="_blank"
          >
            Regex Optimization
          </a>
          <a
            className="btn btn-secondary"
            href="https://github.com/KHTamim/Automated-Regular-Expression-Generation"
            role="button"
            target="_blank"
          >
            Orignal Script Source
          </a>
          <hr className="my-4" />
          <h3 className="text-center">Testing Ground</h3>
          <p>
            <input
              type="text"
              className="form-control"
              placeholder="Sample Data"
              onChange={this.changeSampleText}
              value={this.state.text}
            />
          </p>
          <p className="sample-output well well-sm">
            Sample Regex Output:
            <div className="card bg-light p-3">
              <p className="mb-0">{this.state.regex}</p>
            </div>
          </p>
          <p className="sample-output well well-sm">
            Sample Optimized Output:
            <div className="card bg-light p-3">
              <p className="mb-0">{this.state.optimized}</p>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
export default App;
