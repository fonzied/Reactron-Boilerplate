'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _windows = require('../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

var _windows5 = require('./styles/windows10');

var _windows6 = _interopRequireDefault(_windows5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = (_dec = (0, _margin2.default)(), _dec2 = (0, _padding2.default)(), _dec3 = (0, _alignment2.default)(), _dec4 = (0, _hidden2.default)(), _dec5 = (0, _windows2.default)(), _dec6 = (0, _dimension2.default)(), _dec7 = (0, _windows4.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = (_temp = _class2 = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          color = _props.color,
          props = _objectWithoutProperties(_props, ['children', 'style', 'color']);

      var componentStyle = _extends({}, _windows6.default.text);

      color = color === true ? this.context.color : color ? color : '#000000';
      if (color) componentStyle = _extends({}, componentStyle, { color: color });else if (this.context.theme === 'dark') componentStyle = _extends({}, componentStyle, { color: '#ffffff' });

      if (props.horizontalAlignment) {
        componentStyle.textAlign = props.horizontalAlignment;
      }

      componentStyle = _extends({}, componentStyle, style);

      return _react2.default.createElement(
        'div',
        _extends({
          style: componentStyle
        }, props),
        children
      );
    }
  }]);

  return Text;
}(_react.Component), _class2.propTypes = _extends({}, _windows4.themePropTypes, _margin.marginPropTypes, _padding.paddingPropTypes, _alignment.alignmentPropTypes, _hidden.hiddenPropTypes, _windows.backgroundPropTypes, _dimension.dimensionPropTypes, {
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
}), _class2.contextTypes = _extends({}, _windows3.colorContextTypes, _windows4.themeContextTypes), _temp)) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = Text;