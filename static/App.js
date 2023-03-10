"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var issues = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    effort: 5,
    completionDate: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-16"),
    effort: 14,
    completionDate: new Date("2016-08-30"),
    title: "Missing bottom border on panel",
  },
];

var contentNode = document.getElementById("contents");
var IssueRow = function IssueRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement("td", null, props.issue.id),
    React.createElement("td", null, props.issue.status),
    React.createElement("td", null, props.issue.owner),
    React.createElement("td", null, props.issue.created.toDateString()),
    React.createElement("td", null, props.issue.effort),
    React.createElement(
      "td",
      null,
      props.issue.completionDate
        ? props.issue.completionDate.toDateString()
        : "Not Available"
    ),
    React.createElement("td", null, props.issue.title)
  );
};

function IssueTable(props) {
  var issueRow_data = props.issues.map(function (issue) {
    return React.createElement(IssueRow, { Key: issue.id, issue: issue });
  });
  return React.createElement(
    "table",
    { className: "bordered-table" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement("th", null, "ID"),
        React.createElement("th", null, "Status"),
        React.createElement("th", null, "Owner"),
        React.createElement("th", null, "Creater"),
        React.createElement("th", null, "Effort"),
        React.createElement("th", null, "Completion Date"),
        React.createElement("th", null, "Title")
      )
    ),
    React.createElement("tbody", null, issueRow_data)
  );
}

var IssueAdd = (function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    var _this = _possibleConstructorReturn(
      this,
      (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this)
    );

    _this.handleSubmmit = _this.handleSubmmit.bind(_this);
    return _this;
  }

  _createClass(IssueAdd, [
    {
      key: "handleSubmmit",
      value: function handleSubmmit(e) {
        e.preventDefault();
        var form = document.forms.issueAdd;
        this.props.createIssue({
          owner: form.owner.value,
          title: form.title.value,
          statu: "New",
          created: new Date(),
        });
        form.owner.value = "";
        form.title.value = "";
      },
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "dive",
          null,
          React.createElement(
            "form",
            { name: "issueAdd", onSubmit: this.handleSubmmit },
            React.createElement("input", {
              type: "text",
              name: "owner",
              placeholder: "Owner",
            }),
            React.createElement("input", {
              type: "text",
              name: "title",
              placeholder: "Title",
            }),
            React.createElement("button", null, "Add")
          )
        );
      },
    },
  ]);

  return IssueAdd;
})(React.Component);

var IssueList = (function (_React$Component2) {
  _inherits(IssueList, _React$Component2);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this2 = _possibleConstructorReturn(
      this,
      (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this)
    );

    _this2.state = { issues: [] };
    _this2.createIssue = _this2.createIssue.bind(_this2);

    return _this2;
  }

  _createClass(IssueList, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.loadData();
      },
    },
    {
      key: "loadData",
      value: function loadData() {
        var _this3 = this;

        setTimeout(function () {
          _this3.setState({ issues: issues });
        }, 1000);
      },
    },
    {
      key: "createIssue",
      value: function createIssue(newIssue) {
        var newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
      },
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement("h1", null, "Issue List Tracker"),
          React.createElement("hr", null),
          React.createElement(IssueTable, { issues: this.state.issues }),
          React.createElement("hr", null),
          React.createElement(IssueAdd, { createIssue: this.createIssue }),
          React.createElement("hr", null)
        );
      },
    },
  ]);

  return IssueList;
})(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside
