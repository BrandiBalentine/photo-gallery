import React from 'react';
import Modal from './modal';
import Slide from './slide';
import PreviousArrow from './previous-arrow';
import NextArrow from './next-arrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    }
  }

  componentWillMount() {
    fetch('https://picsum.photos/list').then(results => {
      return results.json();
    }).then(data => {
      let images = data.filter(item => item['author'] === "Alejandro Escamilla").map(image => {
        return `https://picsum.photos/600/600?image=${image['id']}`;
      });
      this.setState({images: images});
    });
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth()
    }));
  }

  slideWidth() {
     return document.querySelector('.slide').clientWidth;
  }

  openModal() {
    let modal = document.getElementById('modal');
    let closeButton = document.getElementById('close');
    modal.style.display = "block";
    closeButton.focus();
    document.getElementsByTagName("HTML")[0].style.overflow = "hidden";
  }

  render() {
    return (
      <div tabindex="0" className="slider">
        
        <Modal image={this.state.images[this.state.currentIndex]}/>
        
        <button title="Enlarge image" id="expand-button" className="expand" onClick={this.openModal}>
          <FontAwesomeIcon icon={faExpandArrowsAlt} />
        </button>

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <PreviousArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <NextArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}
export default Slider;