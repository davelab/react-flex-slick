import React, { Component, PropTypes } from 'react';

const range = n => [...Array(n)].map((_, i) => i);

class Dots extends Component {
  static propTypes = {
    className: PropTypes.string,
    currentSlide: PropTypes.number,
    slideCount: PropTypes.number,
    handleSlideShift: PropTypes.func,
    style: PropTypes.object,
  }

  render() {
    const { className, slideCount, currentSlide, style } = this.props;
    const dotStyle = { display: 'flex', justifyContent: 'center'};
    const mergedStyle = Object.assign({}, dotStyle, style);

    const dots = range(slideCount).map((x, i) => {
      const isActive = i === currentSlide;
      const style = {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: 'black',
        opacity: isActive ? 1 : 0.2,
        margin: 3
      };

      return (
        <div className={isActive ? 'active' : ''} style={style} key={i} />
      );
    });
    return (
      <div style={mergedStyle} className={className ? className : 'slick-dots'} >
        {dots}
      </div>
    );
  }
}

export default Dots;
