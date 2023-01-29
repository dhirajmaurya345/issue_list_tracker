'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var names = ['arun', 'kanisk', 'asad'];
var message = names.map(function (c) {
    return 'hello ' + c;
}).join(' ');
var contentNode = document.getElementById("contents");

var Filter = function (_React$Component) {
    _inherits(Filter, _React$Component);

    function Filter() {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
    }

    _createClass(Filter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'This is a place holder issue Filter'
            );
        }
    }]);

    return Filter;
}(React.Component);

var TableOfIssue = function (_React$Component2) {
    _inherits(TableOfIssue, _React$Component2);

    function TableOfIssue() {
        _classCallCheck(this, TableOfIssue);

        return _possibleConstructorReturn(this, (TableOfIssue.__proto__ || Object.getPrototypeOf(TableOfIssue)).apply(this, arguments));
    }

    _createClass(TableOfIssue, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'This is a place holder issue Issue Table'
            );
        }
    }]);

    return TableOfIssue;
}(React.Component);

var AddEntey = function (_React$Component3) {
    _inherits(AddEntey, _React$Component3);

    function AddEntey() {
        _classCallCheck(this, AddEntey);

        return _possibleConstructorReturn(this, (AddEntey.__proto__ || Object.getPrototypeOf(AddEntey)).apply(this, arguments));
    }

    _createClass(AddEntey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'This is a place holder issue Add Issue'
            );
        }
    }]);

    return AddEntey;
}(React.Component);

var IssueList = function (_React$Component4) {
    _inherits(IssueList, _React$Component4);

    function IssueList() {
        _classCallCheck(this, IssueList);

        return _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).apply(this, arguments));
    }

    _createClass(IssueList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Issue List Tracker'
                ),
                React.createElement('hr', null),
                React.createElement(Filter, null),
                React.createElement('hr', null),
                React.createElement(TableOfIssue, null),
                React.createElement('hr', null),
                React.createElement(AddEntey, null),
                React.createElement('hr', null)
            );
        }
    }]);

    return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside