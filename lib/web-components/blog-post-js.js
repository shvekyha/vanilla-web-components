define([], function () {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
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
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var BlogPostJSComponent = function (_HTMLElement) {
        _inherits(BlogPostJSComponent, _HTMLElement);

        function BlogPostJSComponent() {
            _classCallCheck(this, BlogPostJSComponent);

            var _this = _possibleConstructorReturn(this, (BlogPostJSComponent.__proto__ || Object.getPrototypeOf(BlogPostJSComponent)).call(this));

            //var template = document.querySelector('template').content;
            //console.log('template: '+template);
            _this.attachShadow({ mode: 'open' });
            return _this;
        }

        _createClass(BlogPostJSComponent, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                console.log('connectedCallback ');
                console.log('this.template: ' + this.htmlTemplate);

                //if using plain html
                this.shadowRoot.innerHTML = this.htmlTemplate;
            }
        }, {
            key: 'htmlTemplate',
            get: function get() {
                return '\n            <div id="blog-post">  \n                <h1>BlogPostJS Awesome header!!!</h1>\n                <p>Here is some really interesting paragraph content.</p>\n            </div>\n        ';
            }
        }]);

        return BlogPostJSComponent;
    }(HTMLElement);

    window.customElements.define('blog-post-js', BlogPostJSComponent);
});