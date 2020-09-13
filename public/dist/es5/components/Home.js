"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * 
 */

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Home = (function (Component) {
  function Home() {
    _classCallCheck(this, Home);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(Home, Component);

  _prototypeProperties(Home, null, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { id: "wrapper" },
          React.createElement(
            "div",
            { className: "header" },
            React.createElement(
              "section",
              { id: "banner" },
              React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                  "header",
                  null,
                  React.createElement(
                    "h1",
                    null,
                    "Welcome to NewsFeed"
                  ),
                  React.createElement("hr", null),
                  React.createElement(
                    "p",
                    null,
                    "A free and fully responsive site template"
                  )
                ),
                React.createElement(
                  "p",
                  null,
                  "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam."
                ),
                React.createElement(
                  "ul",
                  { className: "actions" },
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { href: "#", className: "button big" },
                      "Learn More"
                    )
                  )
                )
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Home;
})(Component);

module.exports = Home;