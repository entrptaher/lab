import React from 'react';
import regexGen from 'autoregex'
import autoBind from 'react-autobind';

class App extends React.Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      sampleText: "enter sample word or number like 123"
    }
  }
  getRegexText(text) {
    try {
      if (!text) return "";
      return regexGen(text).full;
    } catch (error) {
      return ""
    }
  }
  changeSampleText(e) {
    this.setState({ sampleText: e.target.value })
  }
  render() {
    return <div className='App'>
      <div className="jumbotron">
        <h1 className="display-5">Generate Regex Automatically!</h1>
        <p className="lead">The regexGen() function generates a regex from a single word sample. By using single sample, the generated regex will not match words that are identical to the sample but will match words having the exact same properties like the sample's properties.</p>
        <a className="btn btn-primary btn-lg" href="https://github.com/entrptaher/autoregex" role="button" target="_blank">Learn more</a>
        <hr className="my-4" />
        <h3 className="text-center">Testing Ground</h3>
        <p><input type="text" className="form-control" placeholder="Sample Data" onChange={this.changeSampleText} value={this.state.sampleText} /></p>
        <p className="sample-output">Sample Regex Output: <b>{this.getRegexText(this.state.sampleText)}</b></p>
      </div>
    </div>
  }
}
export default App;
