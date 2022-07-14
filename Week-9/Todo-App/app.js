'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function Todo(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handelRemove = _this.handelRemove.bind(_this);
        _this.handelPick = _this.handelPick.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(Todo, [{
        key: 'handelRemove',
        value: function handelRemove() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handelPick',
        value: function handelPick() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNumber];
            alert(option);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'add option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this option already exists';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life into computers hands';
            var title = 'Todo-app';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    subtitle: subtitle,
                    title: title
                }),
                React.createElement(Action, {
                    hasOption: this.state.options.length > 0,
                    handelPick: this.handelPick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handelRemove: this.handelRemove,
                    removeOption: this.removeOption
                }),
                React.createElement(AddOptions, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};
IndecisionApp.defaultProps = {
    options: []
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handelPick,
                disabled: !props.hasOption
            },
            '\'what should i  do?\''
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handelRemove },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                removeOption: props.removeOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            props.optionText,
            React.createElement(
                'button',
                {
                    onClick: function onClick(e) {
                        props.removeOption(props.optionText);
                    } },
                'Remove'
            ),
            '  '
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { placeholder: 'add your todos here', name: 'option' }),
                    React.createElement('input', { type: 'submit', value: 'Add Todos' })
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('app'));

root.render(React.createElement(Todo, null));
