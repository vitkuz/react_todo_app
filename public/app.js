'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appStore = {
  title: 'App!',
  subtitle: 'Subtitle',
  items: []
};

var showRandom = function showRandom(e) {
  if (appStore.items) {}
};

var Action = function (_React$Component) {
  _inherits(Action, _React$Component);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: showRandom },
            'Show random item'
          )
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var List = function (_React$Component2) {
  _inherits(List, _React$Component2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'ul',
        null,
        this.props.items.map(function (item, i) {
          return React.createElement(ListItem, { key: i, text: item });
        })
      );
    }
  }]);

  return List;
}(React.Component);

var ListItem = function (_React$Component3) {
  _inherits(ListItem, _React$Component3);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.text
      );
    }
  }]);

  return ListItem;
}(React.Component);

var Content = function (_React$Component4) {
  _inherits(Content, _React$Component4);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this4 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this4.removeAllOptions = _this4.removeAllOptions.bind(_this4);
    return _this4;
  }

  _createClass(Content, [{
    key: 'removeAllOptions',
    value: function removeAllOptions(e) {
      console.log(this.props.options);
      this.props.options = [];
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.removeAllOptions },
            'Remove all'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(List, { items: this.props.options })
        )
      );
    }
  }]);

  return Content;
}(React.Component);

var Header = function Header(props) {
  // console.log(props);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    !!appStore.subtitle && React.createElement(
      'p',
      null,
      appStore.subtitle
    )
  );
};

var AddItem = function (_React$Component5) {
  _inherits(AddItem, _React$Component5);

  function AddItem() {
    _classCallCheck(this, AddItem);

    return _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).apply(this, arguments));
  }

  _createClass(AddItem, [{
    key: 'addItem',
    value: function addItem(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        alert(option);
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.addItem },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Click to add'
          )
        )
      );
    }
  }]);

  return AddItem;
}(React.Component);

;

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      var title = 'Google';
      var options = ['Option one', 'Option two', 'Option three'];

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title }),
        React.createElement(Action, null),
        React.createElement(Content, { options: options }),
        React.createElement(AddItem, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
