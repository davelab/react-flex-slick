'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var range = function range(n) {
  return [].concat(Array(n)).map(function (_, i) {
    return i;
  });
};

var Dots = (function (_Component) {
  _inherits(Dots, _Component);

  function Dots() {
    _classCallCheck(this, Dots);

    _Component.apply(this, arguments);
  }

  Dots.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var slideCount = _props.slideCount;
    var currentSlide = _props.currentSlide;
    var style = _props.style;

    var dotStyle = { display: 'flex', justifyContent: 'center' };
    var mergedStyle = Object.assign({}, dotStyle, style);

    var dots = range(slideCount).map(function (x, i) {
      var isActive = i === currentSlide;
      var style = {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: 'black',
        opacity: isActive ? 1 : 0.2,
        margin: 3
      };

      return _react2['default'].createElement('div', { className: isActive ? 'active' : '', style: style, key: i });
    });
    return _react2['default'].createElement(
      'div',
      { style: mergedStyle, className: className ? className : 'slick-dots' },
      dots
    );
  };

  _createClass(Dots, null, [{
    key: 'propTypes',
    value: {
      className: _react.PropTypes.string,
      currentSlide: _react.PropTypes.number,
      slideCount: _react.PropTypes.number,
      handleSlideShift: _react.PropTypes.func,
      style: _react.PropTypes.object
    },
    enumerable: true
  }]);

  return Dots;
})(_react.Component);

exports['default'] = Dots;
module.exports = exports['default'];