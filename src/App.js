import React, { Component } from 'react';
import ReactCompareImage from './ReactCompareImage';
import { css } from 'emotion';

const styles = css({
  ' p': {
    marginTop: '3rem',
  },
});

class App extends Component {
  render() {
    return (
      <div className={styles}>
        <p>200px width (cat1.jpg | cat2.jpg)</p>
        <div style={{ maxWidth: '200px' }}>
          <ReactCompareImage leftImage="/cat1.jpg" rightImage="/cat2.jpg" />
        </div>

        <p>300px width (forest1.jpg | forest2.jpg)</p>
        <div style={{ maxWidth: '300px' }}>
          <ReactCompareImage
            leftImage="/forest1.jpg"
            rightImage="/forest2.jpg"
          />
        </div>

        <p>500px width (cat1.jpg | forest2.jpg)</p>
        <div style={{ maxWidth: '500px' }}>
          <ReactCompareImage leftImage="/cat1.jpg" rightImage="/forest2.jpg" />
        </div>

        <p>100% width (forest1.jpg | cat2.jpg)</p>
        <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
          <ReactCompareImage leftImage="/forest1.jpg" rightImage="/cat2.jpg" />
        </div>
      </div>
    );
  }
}

export default App;
