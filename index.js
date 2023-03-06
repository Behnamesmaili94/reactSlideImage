import './App.css';
import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import achare from "./achar.jpg"

const slideImages = [
  {
    url: 'https://www.stockvault.net/data/2020/01/25/272807/preview16.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.stockvault.net/data/2019/08/31/269064/preview16.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.stockvault.net/data/2019/03/11/261989/preview16.jpg',
    caption: 'Slide 3'
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  render() {
    return (
      <div>
        <input className='input' type='text' onChange={(event) => this.setState({ message: event.target.value })} />
        <p>{this.state.message}</p>
        <h2 className='App'>okala</h2>
        <img className='img' src={achare} />

        <div className="slide-container">

          <dev>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </dev>
        </div>


      </div>

    )
  }
}

root.render(<App />)
export default App;
