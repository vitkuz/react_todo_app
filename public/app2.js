'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      count: 0
    };
    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('componentDidMount');

      try {
        var stateFromLocalStorage = JSON.parse(localStorage.getItem('_counter'));
        var count = parseInt(stateFromLocalStorage.count, 10);
        console.log(count);

        this.setState(function () {
          return {
            count: count
          };
        });
      } catch (e) {
        console.log('There is no data in local storage');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('componentDidUpdate');
      localStorage.setItem('_counter', JSON.stringify({ count: this.state.count }));
    }
  }, {
    key: 'increment',
    value: function increment(e) {
      console.log('++', this.state);
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'decrement',
    value: function decrement(e) {
      console.log('--', this.state);
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Counter: ',
        this.state.count,
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.increment },
            'Increment++'
          ),
          React.createElement(
            'button',
            { onClick: this.decrement },
            'Decrement--'
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
