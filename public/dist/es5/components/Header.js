"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = Header;
var React = _interopRequire(require("react"));

var PropTypes = _interopRequire(require("prop-types"));

var makeStyles = require("@material-ui/core/styles").makeStyles;
var Toolbar = _interopRequire(require("@material-ui/core/Toolbar"));

var Button = _interopRequire(require("@material-ui/core/Button"));

var IconButton = _interopRequire(require("@material-ui/core/IconButton"));

var SearchIcon = _interopRequire(require("@material-ui/icons/Search"));

var Typography = _interopRequire(require("@material-ui/core/Typography"));

var Link = _interopRequire(require("@material-ui/core/Link"));

var useStyles = makeStyles(function (theme) {
  return {
    toolbar: {
      borderBottom: "1px solid " + theme.palette.divider },
    toolbarTitle: {
      flex: 1 },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto" },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0 } };
});

function Header(props) {
  var classes = useStyles();
  var sections = props.sections;
  var title = props.title;


  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Toolbar,
      { className: classes.toolbar },
      React.createElement(
        Button,
        { size: "small" },
        "Subscribe"
      ),
      React.createElement(
        Typography,
        {
          component: "h2",
          variant: "h5",
          color: "inherit",
          align: "center",
          noWrap: true,
          className: classes.toolbarTitle
        },
        title
      ),
      React.createElement(
        IconButton,
        null,
        React.createElement(SearchIcon, null)
      ),
      React.createElement(
        Button,
        { variant: "outlined", size: "small" },
        "Sign up"
      )
    ),
    React.createElement(
      Toolbar,
      { component: "nav", variant: "dense", className: classes.toolbarSecondary },
      sections && sections.map(function (section) {
        return React.createElement(
          Link,
          {
            color: "inherit",
            noWrap: true,
            key: section.title,
            variant: "body2",
            href: section.url,
            className: classes.toolbarLink
          },
          section.title
        );
      })
    )
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string };