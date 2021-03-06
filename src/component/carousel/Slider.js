/******************************************************************************
Title           : Slider.js
Description     : React component that contains all components for the carousel
******************************************************************************/
import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import TextSlider from './TextSlider';
// import '../../sass/main.scss';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://react-slider.herokuapp.com/img/oriens-belt.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            ],
            currentIndex: 0,
            translateValue: 0,
            autoplay: true
        }
    }

    componentDidMount = () => {
        if(this.state.autoplay) {
        const interval = window.setInterval(() => {
                  this.goToNextSlide()
                }, 3000)
        this.setState({ interval })
      }
    }


    goToPrevSlide = () => {
        if(this.state.currentIndex === 0) 
            return;
        
        this.setState( prevState => ({
            currentIndex: prevState.currentIndex-1,
            translateValue: prevState.translateValue + this.slideWidth()
        }));
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end
        // We also want to reset currentIndex & translateValue so we return the first image
        if(this.state.currentIndex === this.state.images.length-1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }))   
    }

    // calculate the with of current slide and returns it so that translateValue can setState for the next image 
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">

                <div className="slider-wrapper"
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s',
                    animationDelay: '0.45s'
                }}> 
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }   
                </div>
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                < TextSlider />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}


// const SlideText = () => {
//     return (
//       <div className="tParent">
//         <div className="tParent__items">
//             <h1 className="">
//                 <span>What do you love?</span>
//             </h1>
//         </div>
//         <div className="tParent__items">
//             <p className="">
//                 <span>Do more of it with Meetup</span>
//             </p>
//         </div>
//         <div className="tParent__items">
//             <a href="https://www.meetup.com/register/" className="button--primary text--bold">
//                 <span>Sign Up</span>
//             </a>
//         </div>
//     </div>
//     )
//   }