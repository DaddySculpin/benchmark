(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Stack = _interopRequireDefault(__webpack_require__(340));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Stack.default;
exports.default = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Bare", {
  enumerable: true,
  get: function () {
    return _Base.Bare;
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return _Base.Box;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Base.Text;
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function () {
    return _Base.Flex;
  }
});

var _Base = __webpack_require__(326);

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = __webpack_require__(206);

const theme = { ..._base.theme,
  colors: _base.colors
};
var _default = theme;
exports.default = _default;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = exports.colors = void 0;
const yellow = {
  50: '#fffff0',
  100: '#fefcbf',
  200: '#faf089',
  300: '#f6e05e',
  400: '#ecc94b',
  500: '#d69e2e',
  600: '#b7791f',
  700: '#975a16',
  800: '#744210',
  900: '#5F370E'
};
const green = {
  50: '#f0fff4',
  100: '#c6f6d5',
  200: '#9ae6b4',
  300: '#68d391',
  400: '#48bb78',
  500: '#38a169',
  600: '#2f855a',
  700: '#276749',
  800: '#22543d',
  900: '#1C4532'
};
const red = {
  50: '#fff5f5',
  100: '#fed7d7',
  200: '#feb2b2',
  300: '#fc8181',
  400: '#f56565',
  500: '#e53e3e',
  600: '#c53030',
  700: '#9b2c2c',
  800: '#822727',
  900: '#63171b'
};
const whiteAlpha = {
  50: 'rgba(255, 255, 255, 0.04)',
  100: 'rgba(255, 255, 255, 0.06)',
  200: 'rgba(255, 255, 255, 0.08)',
  300: 'rgba(255, 255, 255, 0.16)',
  400: 'rgba(255, 255, 255, 0.24)',
  500: 'rgba(255, 255, 255, 0.36)',
  600: 'rgba(255, 255, 255, 0.48)',
  700: 'rgba(255, 255, 255, 0.64)',
  800: 'rgba(255, 255, 255, 0.80)',
  900: 'rgba(255, 255, 255, 0.92)'
};
const blackAlpha = {
  50: 'rgba(0, 0, 0, 0.04)',
  100: 'rgba(0, 0, 0, 0.06)',
  200: 'rgba(0, 0, 0, 0.08)',
  300: 'rgba(0, 0, 0, 0.16)',
  400: 'rgba(0, 0, 0, 0.24)',
  500: 'rgba(0, 0, 0, 0.36)',
  600: 'rgba(0, 0, 0, 0.48)',
  700: 'rgba(0, 0, 0, 0.64)',
  800: 'rgba(0, 0, 0, 0.80)',
  900: 'rgba(0, 0, 0, 0.92)'
};
const orange = {
  50: '#FFFAF0',
  100: '#FEEBC8',
  200: '#FBD38D',
  300: '#F6AD55',
  400: '#ED8936',
  500: '#DD6B20',
  600: '#C05621',
  700: '#9C4221',
  800: '#7B341E',
  900: '#652B19'
};
const teal = {
  50: '#E6FFFA',
  100: '#B2F5EA',
  200: '#81E6D9',
  300: '#4FD1C5',
  400: '#38B2AC',
  500: '#319795',
  600: '#2C7A7B',
  700: '#285E61',
  800: '#234E52',
  900: '#1D4044'
};
const blue = {
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#63b3ed',
  400: '#4299e1',
  500: '#3182ce',
  600: '#2a69ac',
  700: '#1e4e8c',
  800: '#153e75',
  900: '#1a365d'
};
const cyan = {
  50: '#EDFDFD',
  100: '#C4F1F9',
  200: '#9DECF9',
  300: '#76E4F7',
  400: '#0BC5EA',
  500: '#00B5D8',
  600: '#00A3C4',
  700: '#0987A0',
  800: '#086F83',
  900: '#065666'
};
const purple = {
  50: '#faf5ff',
  100: '#e9d8fd',
  200: '#d6bcfa',
  300: '#b794f4',
  400: '#9f7aea',
  500: '#805ad5',
  600: '#6b46c1',
  700: '#553c9a',
  800: '#44337a',
  900: '#322659'
};
const pink = {
  50: '#fff5f7',
  100: '#fed7e2',
  200: '#fbb6ce',
  300: '#f687b3',
  400: '#ed64a6',
  500: '#d53f8c',
  600: '#b83280',
  700: '#97266d',
  800: '#702459',
  900: '#521B41'
}; // primary colors
// https://gka.github.io/palettes/#/9|s|2478cc|ffffe0,ff005e,93003a|0|0

const p = {
  100: '#b0e8ff',
  200: '#90cbff',
  300: '#70aeff',
  400: '#4e93ea',
  500: '#2478cc',
  600: '#005eaf',
  700: '#004693',
  800: '#003077',
  900: '#001b5d'
}; // neutral
// http://www.colorbox.io/#steps=10#hue_start=0#hue_end=0#hue_curve=easeInQuad#sat_start=0#sat_end=0#sat_curve=easeOutQuad#sat_rate=130#lum_start=94#lum_end=5#lum_curve=easeOutQuad#minor_steps_map=0

const n = {
  '0': '#fff',
  '25': '#f5f5f5',
  '50': '#eeeeee',
  '100': '#ebebeb',
  '200': '#e4e4e4',
  '300': '#d8d8d8',
  '400': '#c7c7c7',
  '500': '#afafaf',
  '600': '#909090',
  '700': '#696969',
  '800': '#3c3c3c',
  '900': '#0d0d0d',
  '1000': '#000'
};
const colors = {
  // PALETTES
  p,
  // primary
  n,
  // neutral
  yellow,
  green,
  whiteAlpha,
  blackAlpha,
  orange,
  red,
  blue,
  cyan,
  purple,
  pink,
  teal,
  // MAIN
  transparent: 'transparent',
  current: 'currentColor',
  bg: n['0'],
  text: n['800'],
  // remove? should keep the neutral colors
  // agbostic.
  black: n['1000'],
  white: n['0'],
  // FEEDBACK
  info: cyan['400'],
  primary: p['500'],
  primaryAlt: n['0'],
  secondary: blue['100'],
  warning: yellow['300'],
  warningAlt: n['800'],
  success: green['300'],
  successAlt: n['800'],
  danger: red['300'],
  dangerAlt: n['80']
};
exports.colors = colors;
const theme = {
  fontSizes: [12, 16, 18, 24, 32, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  radii: {
    none: '0',
    default: '0.25rem',
    sm: '2px',
    md: '4px',
    lg: '6px',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,.20)',
    md: '0 2px 3px rgba(0,0,0,.25)',
    lg: '0 3px 4px rgba(0,0,0,.25)',
    none: 'none'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  borders: {
    none: 0,
    '1': '1px solid',
    '2': '2px solid',
    '4': '4px solid'
  },
  buttons: {
    primary: {
      fontSize: 2,
      border: 2,
      borderColor: 'p.500',
      fontWeight: 'bold',
      color: 'white',
      bg: 'p.500',
      borderRadius: 'md',
      ':disabled': {
        borderColor: 'n.500'
      },
      ':hover': {
        bg: 'p.400',
        border: 'p.400',
        boxShadow: 'md'
      },
      ':active': {
        bg: 'p.600',
        boxShadow: 'none'
      }
    },
    secondary: {
      fontSize: 2,
      color: 'p.500',
      fontWeight: 'bold',
      bg: 'n.0',
      borderRadius: 'md',
      border: 2,
      borderColor: 'n.400',
      ':hover': {
        boxShadow: 'md',
        borderColor: 'p.400',
        color: 'p.400'
      },
      ':active': {
        bg: 'n.50',
        border: 'n.700',
        boxShadow: 'none'
      }
    },
    next: {
      variant: 'buttons.primary',
      fontSize: 3,
      paddingRight: 2,
      paddingLeft: 3,
      fontWeight: 'extrabold',
      borderRadius: 'full',
      borderColor: 'p.500',
      ':focus': {
        outlineOffset: 1
      }
    },
    prev: {
      variant: 'buttons.secondary',
      p: 2,
      borderRadius: 'full',
      ':focus': {
        outlineOffset: 1
      }
    },
    bare: {
      p: 0,
      bg: 'transparent',
      border: 0,
      ':disabled': {
        bg: 'transparent'
      }
    },
    toolbar: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'n.800',
      bg: 'transparent',
      border: 1,
      borderColor: 'transparent',
      borderRadius: 'md',
      padding: 1,
      ':hover': {
        bg: 'white',
        boxShadow: 'sm',
        border: 1,
        borderColor: 'n.400'
      },
      ':active': {
        bg: 'n.200',
        border: 'n.700',
        boxShadow: 'none'
      },
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffset: 0
      },
      '&[disabled], &[disabled]:hover': {
        color: 'n.600',
        bg: 'transparent',
        borderColor: 'transparent',
        pointerEvents: 'none'
      }
    },
    toolbarActive: {
      variant: 'buttons.toolbar',
      bg: 'blue.100',
      borderColor: 'blue.400',
      transition: 'background .2s, border-color .2s, color .2s',
      borderWidth: 1,
      ':hover': {
        bg: 'blue.50',
        borderColor: 'blue.300'
      },
      ':active': {
        bg: 'blue.200',
        borderColor: 'blue.700'
      }
    }
  }
};
exports.theme = theme;
var _default = theme;
exports.default = _default;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Checkbox = _interopRequireDefault(__webpack_require__(329));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Checkbox.default;
exports.default = _default;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RadioButton = _interopRequireDefault(__webpack_require__(339));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _RadioButton.default;
exports.default = _default;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Tag({
  variant = 'default',
  children
}) {
  const variants = {
    default: {
      bg: 'primary',
      color: 'primaryAlt'
    },
    success: {
      bg: 'success',
      color: 'successAlt'
    },
    warning: {
      bg: 'warning',
      color: 'warningAlt'
    },
    danger: {
      bg: 'danger',
      color: 'dangerAlt'
    }
  };
  const color = variants[variant];
  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    p: "1",
    borderRadius: "sm",
    sx: color,
    justifyContent: "centre"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: "0"
  }, children)));
}

var _default = Tag;
exports.default = _default;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Stack = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ToolbarGroup({
  direction = 'row',
  ...rest
}) {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, _extends({
    alignItems: "center",
    spacing: 1,
    px: 2,
    py: 1,
    borderRight: 1,
    borderRightColor: "n.400",
    overflow: "hidden",
    direction: direction
  }, rest));
}

var _default = ToolbarGroup;
exports.default = _default;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _ToolbarButtons = __webpack_require__(92);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const ToolbarScratchButton = ({
  isScratchActive,
  onClickScratch,
  children,
  ...rest
}) => {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, rest, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "scratchwork-btn",
    title: "Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions.",
    isActive: isScratchActive,
    onClick: onClickScratch,
    sx: isScratchActive && {
      borderTopRightRadius: 'none',
      borderBottomRightRadius: 'none',
      zIndex: '1'
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    size: "42px",
    name: "scratchwork"
  })), isScratchActive && /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    bg: "white",
    p: 1,
    flex: 1,
    border: 1,
    borderColor: "blue.400",
    borderRadius: "md",
    borderTopLeftRadius: "none",
    borderBottomLeftRadius: 0,
    borderLeft: 0
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: 1
  }, children)));
};

var _default = ToolbarScratchButton;
exports.default = _default;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _ToolbarButtons = __webpack_require__(92);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const ToolbarTimerButton = ({
  isTimerActive,
  onClickTimer,
  ...rest
}) => {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, rest, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    title: "Timer. Shows the time remaining.",
    onClick: onClickTimer,
    isActive: isTimerActive,
    sx: isTimerActive && {
      bg: 'transparent',
      borderTopRightRadius: 'none',
      borderBottomRightRadius: 'none',
      borderColor: 'n.400',
      zIndex: '1',
      ':hover': {
        bg: 'white'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    size: "42px",
    name: "timer"
  })), isTimerActive ? /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    flexDirection: "column",
    justifyContent: "space-evenly",
    px: 3,
    py: 0,
    border: 1,
    borderColor: "n.400",
    borderRadius: "md",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: 0
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 2,
    sx: {
      whiteSpace: 'nowrap'
    }
  }, "Time Left:"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    role: "timer",
    fontSize: 2,
    fontWeight: "bold",
    sx: {
      whiteSpace: 'nowrap'
    }
  }, "30 Minutes")) : null);
};

var _default = ToolbarTimerButton;
exports.default = _default;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(__webpack_require__(330));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Button.default;
exports.default = _default;

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ThemeProvider: true,
  Global: true,
  theme: true,
  themes: true,
  Box: true,
  Flex: true,
  Text: true,
  Alert: true,
  Checkbox: true,
  Column: true,
  Columns: true,
  Button: true,
  Dropdown: true,
  Heading: true,
  Icon: true,
  Image: true,
  MultipleSelect: true,
  MultipleSelectChoice: true,
  Modal: true,
  Option: true,
  Paragraph: true,
  SingleSelect: true,
  SingleSelectChoice: true,
  SingleSelectClear: true,
  RadioButton: true,
  Slider: true,
  Stack: true,
  Switch: true,
  ScrollButton: true,
  Tab: true,
  Tabs: true,
  TabList: true,
  TabPanels: true,
  TabPanel: true,
  TTS: true,
  Tag: true,
  TextInput: true,
  Toolbar: true,
  NextButton: true,
  PrevButton: true,
  Zones: true,
  Zone: true,
  ZonesBackground: true
};
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _ThemeProvider.default;
  }
});
Object.defineProperty(exports, "Global", {
  enumerable: true,
  get: function () {
    return _Global.default;
  }
});
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function () {
    return _default.default;
  }
});
Object.defineProperty(exports, "themes", {
  enumerable: true,
  get: function () {
    return _themes.default;
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return _Base.Box;
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function () {
    return _Base.Flex;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Base.Text;
  }
});
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: function () {
    return _Alert.default;
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function () {
    return _Checkbox.default;
  }
});
Object.defineProperty(exports, "Column", {
  enumerable: true,
  get: function () {
    return _Column.default;
  }
});
Object.defineProperty(exports, "Columns", {
  enumerable: true,
  get: function () {
    return _Columns.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function () {
    return _Dropdown.default;
  }
});
Object.defineProperty(exports, "Heading", {
  enumerable: true,
  get: function () {
    return _Heading.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _Icon.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _Image.default;
  }
});
Object.defineProperty(exports, "MultipleSelect", {
  enumerable: true,
  get: function () {
    return _MultipleSelect.default;
  }
});
Object.defineProperty(exports, "MultipleSelectChoice", {
  enumerable: true,
  get: function () {
    return _MultipleSelect.MultipleSelectChoice;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function () {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "Option", {
  enumerable: true,
  get: function () {
    return _Option.default;
  }
});
Object.defineProperty(exports, "Paragraph", {
  enumerable: true,
  get: function () {
    return _Paragraph.default;
  }
});
Object.defineProperty(exports, "SingleSelect", {
  enumerable: true,
  get: function () {
    return _SingleSelect.default;
  }
});
Object.defineProperty(exports, "SingleSelectChoice", {
  enumerable: true,
  get: function () {
    return _SingleSelect.SingleSelectChoice;
  }
});
Object.defineProperty(exports, "SingleSelectClear", {
  enumerable: true,
  get: function () {
    return _SingleSelect.SingleSelectClear;
  }
});
Object.defineProperty(exports, "RadioButton", {
  enumerable: true,
  get: function () {
    return _RadioButton.default;
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function () {
    return _Slider.default;
  }
});
Object.defineProperty(exports, "Stack", {
  enumerable: true,
  get: function () {
    return _Stack.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function () {
    return _Switch.default;
  }
});
Object.defineProperty(exports, "ScrollButton", {
  enumerable: true,
  get: function () {
    return _ScrollButton.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function () {
    return _Tabs.Tab;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function () {
    return _Tabs.Tabs;
  }
});
Object.defineProperty(exports, "TabList", {
  enumerable: true,
  get: function () {
    return _Tabs.TabList;
  }
});
Object.defineProperty(exports, "TabPanels", {
  enumerable: true,
  get: function () {
    return _Tabs.TabPanels;
  }
});
Object.defineProperty(exports, "TabPanel", {
  enumerable: true,
  get: function () {
    return _Tabs.TabPanel;
  }
});
Object.defineProperty(exports, "TTS", {
  enumerable: true,
  get: function () {
    return _TTS.default;
  }
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: function () {
    return _Tag.default;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function () {
    return _TextInput.default;
  }
});
Object.defineProperty(exports, "Toolbar", {
  enumerable: true,
  get: function () {
    return _Toolbar.default;
  }
});
Object.defineProperty(exports, "NextButton", {
  enumerable: true,
  get: function () {
    return _Toolbar.NextButton;
  }
});
Object.defineProperty(exports, "PrevButton", {
  enumerable: true,
  get: function () {
    return _Toolbar.PrevButton;
  }
});
Object.defineProperty(exports, "Zones", {
  enumerable: true,
  get: function () {
    return _Zones.default;
  }
});
Object.defineProperty(exports, "Zone", {
  enumerable: true,
  get: function () {
    return _Zones.Zone;
  }
});
Object.defineProperty(exports, "ZonesBackground", {
  enumerable: true,
  get: function () {
    return _Zones.ZonesBackground;
  }
});

var _ThemeProvider = _interopRequireDefault(__webpack_require__(325));

var _Global = _interopRequireDefault(__webpack_require__(711));

var _default = _interopRequireDefault(__webpack_require__(205));

var _themes = _interopRequireDefault(__webpack_require__(327));

var _Base = __webpack_require__(2);

var _Alert = _interopRequireDefault(__webpack_require__(715));

var _Checkbox = _interopRequireDefault(__webpack_require__(207));

var _Column = _interopRequireDefault(__webpack_require__(722));

var _Columns = _interopRequireDefault(__webpack_require__(333));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Dropdown = _interopRequireDefault(__webpack_require__(724));

var _Heading = _interopRequireDefault(__webpack_require__(725));

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _Image = _interopRequireDefault(__webpack_require__(726));

var _MultipleSelect = _interopRequireWildcard(__webpack_require__(727));

var _Modal = _interopRequireDefault(__webpack_require__(731));

var _Option = _interopRequireDefault(__webpack_require__(338));

var _Paragraph = _interopRequireDefault(__webpack_require__(342));

var _SingleSelect = _interopRequireWildcard(__webpack_require__(732));

var _RadioButton = _interopRequireDefault(__webpack_require__(208));

var _Slider = _interopRequireDefault(__webpack_require__(734));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Switch = _interopRequireDefault(__webpack_require__(735));

var _ScrollButton = _interopRequireDefault(__webpack_require__(347));

var _Tabs = __webpack_require__(736);

var _TTS = _interopRequireDefault(__webpack_require__(739));

var _Tag = _interopRequireDefault(__webpack_require__(740));

var _TextInput = _interopRequireDefault(__webpack_require__(741));

var _Toolbar = _interopRequireWildcard(__webpack_require__(352));

var _Zones = _interopRequireWildcard(__webpack_require__(743));

var _hooks = __webpack_require__(70);

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ThemeProvider = _interopRequireDefault(__webpack_require__(705));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _ThemeProvider.default;
exports.default = _default;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Grid = exports.Flex = exports.Bare = exports.Text = exports.Box = void 0;

var _styled = _interopRequireDefault(__webpack_require__(709));

var _css = _interopRequireWildcard(__webpack_require__(217));

var _shouldForwardProp = _interopRequireDefault(__webpack_require__(710));

var _styledSystem = __webpack_require__(18);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const sx = props => (0, _css.default)(props.sx)(props.theme);

const base = props => (0, _css.default)(props.__css)(props.theme);

const variant = ({
  theme,
  variant,
  tx = 'variants'
}) => (0, _css.default)((0, _css.get)(theme, tx + '.' + variant, (0, _css.get)(theme, variant)))(theme);

const Box = (0, _styled.default)('div', {
  shouldForwardProp: _shouldForwardProp.default
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, props => props.css, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.shadow, _styledSystem.border, _styledSystem.width, _styledSystem.color, _styledSystem.flexbox), sx);
exports.Box = Box;
const Text = (0, _styled.default)(Box)`
  display: inline;
  ${_styledSystem.typography};
  ${_styledSystem.layout};
`;
exports.Text = Text;
const Bare = (0, _styled.default)('div')(sx);
exports.Bare = Bare;
const Flex = (0, _styled.default)(Box)({
  display: 'flex'
});
exports.Flex = Flex;
const Grid = (0, _styled.default)(Box)({
  grid: _styledSystem.grid,
  display: 'grid'
});
exports.Grid = Grid;
var _default = Box;
exports.default = _default;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(205));

var _dark = _interopRequireDefault(__webpack_require__(713));

var _beige = _interopRequireDefault(__webpack_require__(714));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  default: _default2.default,
  dark: _dark.default,
  beige: _beige.default
};
exports.default = _default;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Icon = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Alert({
  variant = 'default',
  border = true,
  children
}) {
  const variants = {
    default: {
      bg: 'primary',
      color: 'primaryAlt'
    },
    success: {
      bg: 'success',
      color: 'successAlt'
    },
    warning: {
      bg: 'warning',
      color: 'warningAlt'
    },
    danger: {
      bg: 'danger',
      color: 'dangerAlt'
    }
  };
  const color = variants[variant];
  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    p: "3",
    borderRadius: "md",
    border: border ? 1 : 0,
    borderColor: "gray.300"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    borderRadius: "md",
    sx: color,
    p: "2"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    size: "50px"
  }))), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    flexDirection: "column",
    pt: "1",
    pl: "3"
  }, children)));
}

var _default = Alert;
exports.default = _default;

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _autoId = __webpack_require__(144);

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _Button = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Checkbox({
  id,
  checked = false,
  disabled = false,
  onChange,
  value,
  ...props
}) {
  const inputId = `checkbox-${(0, _autoId.useId)()}`;
  const icon = checked ? 'checkbox-selected' : 'checkbox-unselected';
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    role: "checkbox",
    variant: "bare",
    id: inputId,
    "aria-checked": checked,
    onClick: () => onChange(value),
    disabled: disabled
  }, props), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: icon
  }));
}

Checkbox.propTypes = {
  // dom
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  // data
  checked: _propTypes.default.bool,
  // events
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onChange: _propTypes.default.func
};
var _default = Checkbox;
exports.default = _default;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _reactRovingTabindex = __webpack_require__(331);

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Button({
  disabled,
  roving = false,
  ...props
}) {
  const ref = _react.default.useRef(null);

  const [tabIndex, focused, handleKeyDown, handleClick] = (0, _reactRovingTabindex.useRovingTabIndex)(ref, disabled);
  (0, _reactRovingTabindex.useFocusEffect)(focused, ref);
  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    as: "button",
    tx: "buttons",
    variant: "primary",
    __css: {
      px: 3,
      py: 2,
      alignItems: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      transition: 'background .2s,border .2s,box-shadow .2s,color .2s',
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffset: 2
      },
      ':disabled': {
        pointerEvents: 'none',
        bg: 'n.300',
        color: 'n.600',
        boxShadow: 'none'
      }
    },
    ref: ref,
    tabIndex: roving ? tabIndex : undefined,
    disabled: disabled,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }, props));
}

Button.propTypes = {
  variant: _propTypes.default.oneOf(['bare', 'primary', 'secondary', 'prev', 'next', 'toolbar', 'toolbarActive'])
};
var _default = Button;
exports.default = _default;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Column({
  children,
  id,
  width,
  p = '4',
  ...props
}) {
  const widths = {
    '1/2': '0 0 50%',
    '1/3': '0 0 33.3333333%',
    '2/3': '0 0 66.66666666%',
    '1/4': '0 0 25%',
    '3/4': '0 0 75%'
  };
  const columnWidth = width !== 'content' ? '100%' : null;
  const flexShrink = width === 'content' ? '0' : null;
  const flex = widths[width];
  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    id: id,
    p: p,
    width: columnWidth,
    flexShrink: flexShrink,
    flex: flex
  }, props), children);
}

Column.propTypes = {
  id: _propTypes.default.string,
  width: _propTypes.default.oneOf(['content', '1/2', '1/3', '2/3', '1/4', '3/4'])
};
var _default = Column;
exports.default = _default;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Columns = _interopRequireDefault(__webpack_require__(723));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Columns.default;
exports.default = _default;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _hooks = __webpack_require__(70);

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function Option({
  children,
  selected = false,
  onClick
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    px: "3",
    py: "2",
    onClick: onClick,
    bg: selected ? 'secondary' : null,
    pr: "34px",
    sx: {
      cursor: 'pointer',
      ':hover': {
        bg: 'p.500',
        color: 'white'
      }
    }
  }, children);
}

function Selected({
  selected
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    border: "1",
    px: "2",
    py: "1",
    borderRadius: "md",
    width: "100%",
    sx: {
      right: 0,
      left: 0,
      ':hover': {
        cursor: 'pointer',
        boxShadow: 'md'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    flex: "1"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, {
    flex: "1"
  }, selected ? selected : /*#__PURE__*/_react.default.createElement("div", null, "\xA0")), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    pl: "2",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "dropdown-arrow"
  }))));
}

function Dropdown({
  isOpen,
  children,
  onClick,
  onSelect,
  onClickOutside,
  selected
}) {
  const selectedEl = children.find(child => {
    return child.props.value === selected;
  });
  const [width, setWidth] = (0, _react.useState)();
  const ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const w = ref.current ? ref.current.offsetWidth : 0;
    setWidth(w); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]); // detect clicking outside of dropdown

  const clickRef = (0, _react.useRef)();
  (0, _hooks.useOutsideClick)(clickRef, () => {
    if (isOpen === true) {
      onClickOutside();
    }
  });
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    display: "inline-block",
    tabIndex: "0",
    ref: clickRef,
    sx: {
      width: width + 4,
      verticalAlign: 'middle',
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffset: 2
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(Selected, {
    selected: selectedEl
  }), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    ml: "2px",
    border: isOpen ? '1' : 'none',
    bg: "white",
    ref: ref,
    sx: {
      overflow: 'hidden',
      position: 'absolute'
    },
    style: {
      maxHeight: isOpen ? '300px' : '0px'
    }
  }, /*#__PURE__*/_react.default.createElement(Option, {
    selected: selected === undefined,
    onClick: () => onSelect(undefined)
  }, "\xA0"), children.map(child => {
    let {
      value
    } = child.props;
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: value,
      selected: value === selected,
      onClick: () => onSelect(value)
    }, child);
  }))));
}

var _default = Dropdown;
exports.default = _default;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Heading({
  children,
  level = 1,
  ...props
}) {
  const H = 'h' + level;
  const size = 7 - level;
  return /*#__PURE__*/_react.default.createElement(_Base.Text, _extends({
    as: H,
    display: "block",
    fontSize: size,
    fontWeight: "light"
  }, props), children);
}

var _default = Heading;
exports.default = _default;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Placeholder({
  width = 100,
  height = 100,
  ...props
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, _extends({
    alignItems: "center",
    justifyContent: "center",
    color: "n.300",
    sx: {
      bg: 'n.100',
      border: '1',
      borderColor: 'n.300',
      width: width + 'px',
      height: height + 'px'
    }
  }, props), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "hairline"
  }, "image"));
}

function Image({
  src,
  ...props
}) {
  if (!src) {
    return /*#__PURE__*/_react.default.createElement(Placeholder, props);
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    as: "img"
  }, props));
}

Image.propTypes = {
  src: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearButton = ClearButton;
exports.MultipleSelectChoice = MultipleSelectChoice;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Base = __webpack_require__(2);

var _Option = _interopRequireDefault(__webpack_require__(338));

var _Stack = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const MultipleSelectContext = (0, _react.createContext)({
  selected: [],
  eliminated: [],
  isGroupDisabled: false,
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function useMultipleSelectContext() {
  const context = (0, _react.useContext)(MultipleSelectContext);

  if (!context) {
    throw new Error('Option compound components cannot be rendered outside the MultipleSelect component');
  }

  return context;
}

function MultipleSelect({
  id,
  children,
  selected = [],
  eliminated = [],
  isDisabled = false,
  onChange,
  onClear,
  onEliminate
}) {
  return /*#__PURE__*/_react.default.createElement(MultipleSelectContext.Provider, {
    value: {
      selected,
      isGroupDisabled: isDisabled,
      onClear,
      onChange,
      onEliminate,
      eliminated
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    id: id
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 4
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, null, children), /*#__PURE__*/_react.default.createElement(ClearButton, null, "Clear Answer"))));
}

function ClearButton({
  children
}) {
  const {
    onClear,
    isGroupDisabled
  } = useMultipleSelectContext();
  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    onClick: onClear,
    disabled: isGroupDisabled
  }, children === null ? 'Clear Answer' : children));
}

function MultipleSelectChoice({
  value,
  children,
  isDisabled
}) {
  const {
    selected,
    eliminated,
    onChange,
    onEliminate,
    isGroupDisabled
  } = useMultipleSelectContext();
  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Option.default, {
    variant: "checkbox",
    isDisabled: isDisabled || isGroupDisabled,
    isSelected: selected.includes(value),
    isEliminated: eliminated.includes(value),
    onChange: onChange,
    onEliminate: onEliminate,
    value: value
  }, children));
}

MultipleSelect.Choice = MultipleSelectChoice;
var _default = MultipleSelect;
exports.default = _default;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Option = _interopRequireDefault(__webpack_require__(728));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Option.default;
exports.default = _default;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _autoId = __webpack_require__(144);

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Icon = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function RadioButton({
  checked = false,
  disabled,
  onBlur = () => {},
  onClick = () => {},
  onChange = () => {},
  onFocus = () => {},
  label,
  value,
  size,
  ...props
}) {
  const inputProps = {
    checked,
    disabled,
    onFocus,
    onBlur,
    value
  };
  const inputId = `radio-${(0, _autoId.useId)()}`;
  const icon = checked ? 'radio-selected' : 'radio-unselected';
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    role: "radio",
    id: inputId,
    label: label,
    "aria-checked": checked,
    color: "text",
    variant: "bare",
    onClick: () => onChange(value)
  }, inputProps, props), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: icon,
    size: size
  }));
}

RadioButton.propTypes = {
  // dom
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  // data
  checked: _propTypes.default.bool,
  value: _propTypes.default.string,
  // events
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onChange: _propTypes.default.func
};
var _default = RadioButton;
exports.default = _default;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Base = __webpack_require__(2);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Stack = ({
  direction = 'column',
  children,
  align,
  justify,
  spacing = 2,
  ...rest
}) => {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, _extends({
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction
  }, rest), _react.Children.toArray(children).map((child, index) => {
    let isLastChild = (children.length || 1) === index + 1;
    let spacingProps = direction === 'row' ? {
      mr: isLastChild ? null : spacing
    } : {
      mb: isLastChild ? null : spacing
    };
    return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
      key: index
    }, spacingProps), child);
  }));
};

var _default = Stack;
exports.default = _default;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // import Button from '../Button';


function Modal({
  isOpen = false,
  onClickBg,
  children,
  ...props
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    alignItems: "center",
    justifyContent: "center",
    onClick: onClickBg,
    sx: {
      position: 'fixed',
      top: 0,
      display: isOpen ? 'flex' : 'none',
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)'
    }
  }, props), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    role: "dialog",
    bg: "white",
    minWidth: "450px",
    maxWidth: "90%",
    borderRadius: "md",
    p: "3",
    minHeight: "300px"
  }, children));
}

Modal.propTypes = {
  open: _propTypes.default.bool
};
var _default = Modal;
exports.default = _default;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Paragraph = _interopRequireDefault(__webpack_require__(343));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Paragraph.default;
exports.default = _default;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Paragraph({
  children,
  id,
  ...props
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Text, _extends({
    mb: "4",
    id: id,
    display: "block"
  }, props), children);
}

Paragraph.propTypes = {
  id: _propTypes.default.string
};
var _default = Paragraph;
exports.default = _default;

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleSelectChoice = SingleSelectChoice;
exports.SingleSelectClear = SingleSelectClear;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _index = __webpack_require__(324);

var _SingleSelectReducer = __webpack_require__(733);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // We create a SingleSelect context to enable communication between the
// parent <SingleSelect> it's <Option> children.
// This allows us the flexibility to house the <Option> components deep
// inside a nested layout.


const SingleSelectContext = (0, _react.createContext)({
  selected: undefined,
  eliminated: [],
  isGroupDisabled: false,
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function SingleSelect({
  id,
  children,
  isDisabled = false,
  selected,
  eliminated,
  onChange,
  onClear,
  onEliminate
}) {
  const [state, dispatch] = (0, _react.useReducer)(_SingleSelectReducer.reducer, _SingleSelectReducer.initialState); // fallback event handlers for when they are not
  // provided through props

  function handleChange(optionId) {
    dispatch({
      type: 'MCSS_SELECT',
      optionId
    });
  }

  function handleEliminate(optionId) {
    dispatch({
      type: 'MCSS_ELIMINATE',
      optionId
    });
  }

  function handleClear() {
    dispatch({
      type: 'MCSS_CLEAR'
    });
  }

  selected = selected || state.selected;
  eliminated = eliminated || state.eliminated;
  onChange = onChange || handleChange;
  onEliminate = onEliminate || handleEliminate;
  onClear = onClear || handleClear;
  return /*#__PURE__*/_react.default.createElement(SingleSelectContext.Provider, {
    value: {
      selected,
      isGroupDisabled: isDisabled,
      onClear,
      onChange,
      onEliminate,
      eliminated
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Flex, {
    id: id
  }, /*#__PURE__*/_react.default.createElement(_index.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react.default.createElement(_index.Stack, null, children), /*#__PURE__*/_react.default.createElement(SingleSelectClear, null, "Clear Answer"))));
}

function SingleSelectChoice({
  value,
  children,
  isDisabled
}) {
  const {
    isGroupDisabled,
    selected,
    eliminated,
    onChange,
    onEliminate
  } = useSingleSelectContext();
  return /*#__PURE__*/_react.default.createElement(_index.Box, null, /*#__PURE__*/_react.default.createElement(_index.Option, {
    variant: "radio",
    isSelected: selected === value,
    isEliminated: eliminated.includes(value),
    onChange: onChange,
    onEliminate: onEliminate,
    value: value,
    isDisabled: isDisabled || isGroupDisabled
  }, children));
}

function useSingleSelectContext() {
  const context = (0, _react.useContext)(SingleSelectContext);

  if (!context) {
    throw new Error('Option compound components cannot be rendered outside the SingleSelect component');
  }

  return context;
}

function SingleSelectClear({
  children
}) {
  const {
    onClear,
    isGroupDisabled
  } = useSingleSelectContext();
  return /*#__PURE__*/_react.default.createElement(_index.Box, null, /*#__PURE__*/_react.default.createElement(_index.Button, {
    variant: "secondary",
    disabled: isGroupDisabled,
    onClick: onClear
  }, children === null ? 'Clear Answer' : children));
}

SingleSelect.propTypes = {
  // dom
  id: _propTypes.default.string,
  children: _propTypes.default.node,
  isDisabled: _propTypes.default.bool,
  // data
  selected: _propTypes.default.string,
  eliminated: _propTypes.default.array,
  // events
  onClear: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onEliminate: _propTypes.default.func
}; // alternative exports

SingleSelect.initialState = _SingleSelectReducer.initialState;
SingleSelect.reducer = _SingleSelectReducer.reducer;
SingleSelect.Choice = SingleSelectChoice;
SingleSelect.ClearButton = SingleSelectClear;
var _default = SingleSelect;
exports.default = _default;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const thumb = {
  appearance: 'none',
  width: 28,
  height: 28,
  bg: 'primary',
  border: 0,
  borderRadius: 9999,
  transition: 'width .2s, height .2s',
  ':active': {
    width: 34,
    height: 34
  }
};

function Slider({ ...props
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    as: "input",
    type: "range",
    variant: "slider",
    step: "any"
  }, props, {
    sx: {
      display: 'block',
      width: '100%',
      height: 14,
      my: 2,
      cursor: 'ew-resize',
      appearance: 'none',
      borderRadius: 9999,
      color: 'inherit',
      bg: 'n.50',
      border: 1,
      borderColor: 'n.600',
      ':focus': {
        outline: 'none',
        color: 'primary'
      },
      '&::-webkit-slider-thumb': thumb,
      '&::-moz-range-thumb': thumb,
      '&::-ms-thumb': thumb
    }
  }));
}

var _default = Slider;
exports.default = _default;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Switch({
  checked = false,
  onClick,
  ...props
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    as: "button",
    type: "button",
    role: "switch",
    "aria-checked": checked,
    bg: "p.500",
    color: "p.500",
    border: "2",
    borderRadius: "full",
    m: "0",
    p: "0",
    width: "64px",
    height: "30px",
    onClick: onClick
  }, props, {
    sx: {
      cursor: 'pointer',
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffset: 2
      },
      ':disabled': {
        pointerEvents: 'none',
        opacity: '.3'
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    "aria-hidden": true,
    width: "24px",
    height: "24px",
    borderRadius: "full",
    ml: "2px",
    boxShadow: "md",
    bg: "white",
    style: {
      transform: checked ? 'translateX(32px)' : 'translateX(0)'
    },
    sx: {
      transitionProperty: 'transform',
      transitionDuration: '0.25s'
    }
  }));
}

Switch.propTypes = {
  checked: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = Switch;
exports.default = _default;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ScrollButton = _interopRequireDefault(__webpack_require__(348));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _ScrollButton.default;
exports.default = _default;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ScrollButton({
  direction = 'down',
  ...props
}) {
  const Label = direction === 'down' ? 'More' : 'Top';
  const icon = direction === 'down' ? 'chevron-down' : 'chevron-up';
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    variant: "primary",
    flexDirection: direction === 'down' ? 'column' : 'column-reverse',
    bg: "p.700",
    justifyContent: "flex-end",
    sx: {
      height: '66px',
      width: '66px',
      borderRadius: 'full'
    }
  }, props), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: "2",
    fontWeight: "normal"
  }, Label), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: icon,
    size: "24px"
  }));
}

var _default = ScrollButton;
exports.default = _default;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = Tabs;
exports.TabList = TabList;
exports.TabPanels = TabPanels;
exports.TabPanel = TabPanel;
exports.default = exports.Tab = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _autoId = __webpack_require__(144);

var _Base = __webpack_require__(2);

var _TabsReducer = __webpack_require__(737);

var _TabsStyle = _interopRequireDefault(__webpack_require__(738));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // We create a context to enable communication between the
// parent <Tabs> it's <Tab> and <TabPanel> children.


const TabsContext = (0, _react.createContext)(); ////////////////////////////////////////////////////////////////////////////////

function Tabs({
  activeTab = 0,
  align = 'left',
  children,
  label,
  onChange,
  ...props
}) {
  // Local state and event handler fallbacks
  const [state, dispatch] = (0, _react.useReducer)(_TabsReducer.reducer, _TabsReducer.initialState);

  const handleChange = tabIndex => dispatch({
    type: 'SELECT_TAB',
    tabIndex
  });

  activeTab = activeTab || state.activeTab;
  onChange = onChange || handleChange; // Create a ref that will be applied to the active panel.
  // This will allous us to set focus on it when the down
  // arrow key is pressed.

  const activePanelRef = (0, _react.useRef)();

  function onFocusPanel() {
    activePanelRef.current.focus();
  } // Create a unique ID for this component instance. This
  // will be used for accessibility where we link to Tabs
  // with their TabPanel counterpart. This ID is not
  // applied to the root element as it is not needed.


  const tabsId = `tabs-${(0, _autoId.useId)()}`;
  return /*#__PURE__*/_react.default.createElement(TabsContext.Provider, {
    value: {
      activeTab,
      align,
      label,
      onChange,
      onFocusPanel,
      activePanelRef,
      tabsId
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Flex, _extends({
    flexDirection: "column"
  }, props), children));
} ////////////////////////////////////////////////////////////////////////////////


function TabList({
  children,
  ...props
}) {
  const {
    align,
    tabsId,
    activeTab,
    label,
    onChange,
    onFocusPanel
  } = (0, _react.useContext)(TabsContext);
  const alignments = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  const alignment = alignments[align] || 'flex-start';
  const childEls = (0, _react.useRef)([]);
  const numTabs = children.length;
  const focusableIndexes = children.map((child, index) => child.props.isDisabled === true ? null : index).filter(index => index != null);
  const enabledSelectedIndex = focusableIndexes.indexOf(activeTab);

  function changeTabFocus(tabIndex) {
    const childIndex = focusableIndexes[tabIndex];
    childEls.current[childIndex].focus();
    onChange(childIndex);
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowRight') {
      if (activeTab + 1 < numTabs) {
        const nextIndex = (enabledSelectedIndex + 1) % numTabs;
        changeTabFocus(nextIndex);
      }
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      if (activeTab !== 0) {
        const nextIndex = (enabledSelectedIndex - 1 + numTabs) % numTabs;
        changeTabFocus(nextIndex);
      }
    }

    if (event.key === 'ArrowDown') {
      onFocusPanel();
    }

    if (event.key === 'Home') {
      changeTabFocus(0);
    }

    if (event.key === 'End') {
      changeTabFocus(numTabs - 1);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Flex, _extends({
    justifyContent: alignment,
    borderBottom: "1",
    borderColor: "n.400"
  }, props), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    role: "tablist",
    "aria-label": label
  }, _react.Children.map(children, (tab, index) => {
    const isActive = index === activeTab;
    const id = `${tabsId}-tab-${index}`;

    const ref = node => childEls.current[index] = node;

    return /*#__PURE__*/(0, _react.cloneElement)(tab, {
      key: id,
      ref,
      index,
      id,
      onKeyDown,
      isActive
    });
  })));
} ////////////////////////////////////////////////////////////////////////////////


const Tab = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    children,
    id,
    index,
    isActive,
    isDisabled,
    onKeyDown,
    isActioned = false,
    ...rest
  } = props;
  const {
    onChange,
    tabsId
  } = (0, _react.useContext)(TabsContext);
  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    as: "button",
    role: "tab",
    id: id,
    ref: ref,
    disabled: isDisabled // a11y
    ,
    "aria-selected": isActive ? true : false,
    "aria-controls": `${tabsId}-panel-${index}`,
    "aria-disabled": isDisabled,
    tabIndex: isActive ? 0 : -1 // events
    ,
    onClick: () => onChange(index),
    onKeyDown: onKeyDown // other
    ,
    sx: { ..._TabsStyle.default.tab,
      bg: isActioned === true ? 'n.300' : 'n.25'
    }
  }, rest), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: "3"
  }, children));
}); ////////////////////////////////////////////////////////////////////////////////

exports.Tab = Tab;

function TabPanels({
  children,
  ...props
}) {
  const {
    activeTab,
    tabsId
  } = (0, _react.useContext)(TabsContext);
  let activePanel;

  _react.default.Children.toArray(children).forEach((child, index) => {
    if (index === activeTab) {
      activePanel = /*#__PURE__*/(0, _react.cloneElement)(child, {
        isActive: activeTab === index,
        id: `${tabsId}-panel-${index}`,
        labelBy: `${tabsId}-tab-${index}`
      });
    }
  });

  return /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
    width: "100%"
  }, props), activePanel ? activePanel : /*#__PURE__*/_react.default.createElement(_Base.Box, null, "No tab content found"));
} ////////////////////////////////////////////////////////////////////////////////


function TabPanel({
  id,
  labelBy,
  children,
  p = 3,
  isActive = false,
  ...props
}) {
  const {
    activePanelRef
  } = (0, _react.useContext)(TabsContext);
  return (
    /*#__PURE__*/
    // We pass on all the props so that styling props can be
    // applied to the TabPanel.
    // <TabPanel p="4" bg="blue.100">...
    _react.default.createElement(_Base.Box, _extends({
      id: id,
      role: "tabpanel",
      "aria-labelledby": labelBy // todo: disabling focus ring on panel until guidelines
      // are finalised.
      // tabIndex={isActive ? 0 : null}
      ,
      ref: activePanelRef,
      p: p
    }, props), children)
  );
} ////////////////////////////////////////////////////////////////////////////////


var _default = {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
};
exports.default = _default;

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function TTS({
  children,
  voice = 'native',
  active = false
}) {
  function speak(event) {
    if (!active) {
      return;
    }

    const text = event.currentTarget.textContent;
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = speechSynthesis.getVoices().filter(v => {
      return v.name === voice;
    })[0];
    window.speechSynthesis.speak(msg);
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    as: "button",
    onClick: speak,
    border: active ? 2 : null,
    sx: {
      cursor: active ? 'pointer' : null
    }
  }, children);
}

TTS.propTypes = {
  active: _propTypes.default.bool,
  voice: _propTypes.default.string
};
var _default = TTS;
exports.default = _default;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

var _TextInputReducer = __webpack_require__(742);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function TextInput({
  id,
  label,
  onChange,
  maxLength = 3000,
  onMaxLength,
  rows = 5,
  value
}) {
  const [state, dispatch] = (0, _react.useReducer)(_TextInputReducer.reducer, _TextInputReducer.initialState); // fallback event handlers for when they are not
  // provided through props

  function handleChange(value) {
    dispatch({
      type: 'TEXTINPUT_UPDATE',
      value
    });
  }

  value = value || state.value;
  onChange = onChange || handleChange;

  function checkLimit(event) {
    const value = event.target.value;

    if (onChange) {
      onChange(value);
    }

    const numChars = value.length || 0;

    if (numChars > maxLength) {
      if (onMaxLength) {
        onMaxLength();
      }

      event.target.value = value.substring(0, maxLength);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    as: "textarea",
    id: id,
    width: "100%",
    "aria-label": label,
    onChange: checkLimit,
    rows: rows,
    autoComplete: "off",
    p: "2",
    spellCheck: "false",
    autoCapitalize: "none",
    autoCorrect: "off",
    value: value,
    maxWith: "50ch",
    sx: {
      resize: 'none',
      // todo: update to use theme
      boxShadow: 'inset 0 0 0.19em #aaa',
      ':focus': {
        boxShadow: 'none'
      }
    }
  });
}

TextInput.propTypes = {
  id: _propTypes.default.string,
  rows: _propTypes.default.number,
  maxLength: _propTypes.default.number,
  label: _propTypes.default.string.isRequired,
  onMaxLength: _propTypes.default.func
};
var _default = TextInput;
exports.default = _default;

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NextButton", {
  enumerable: true,
  get: function () {
    return _ToolbarButtons.NextButton;
  }
});
Object.defineProperty(exports, "PrevButton", {
  enumerable: true,
  get: function () {
    return _ToolbarButtons.PrevButton;
  }
});
exports.default = void 0;

var _Toolbar = _interopRequireDefault(__webpack_require__(353));

var _ToolbarButtons = __webpack_require__(92);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Toolbar.default;
exports.default = _default;

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRovingTabindex = __webpack_require__(331);

var _Base = __webpack_require__(2);

var _ToolbarGroup = _interopRequireDefault(__webpack_require__(210));

var _ToolbarButtons = __webpack_require__(92);

var _ToolbarScratchButton = _interopRequireDefault(__webpack_require__(211));

var _ToolbarTimerButton = _interopRequireDefault(__webpack_require__(212));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const Toolbar = ({
  id,
  // data
  blockTitle,
  itemTitle,
  label,
  language = 'en',
  progress = 50,
  // disable buttons
  isHelpDisabled,
  isThemeDisabled,
  isZoomInDisabled,
  isZoomOutDisabled,
  isLangDisabled,
  isTTSDisabled = true,
  isScratchDisabled,
  isPencilDisabled,
  isHighlighterDisabled,
  isEraserDisabled,
  isClearDisabled,
  isMathDisabled,
  isCalcDisabled,
  isTimerDisabled,
  isPrevDisabled,
  isNextDisabled,
  // toggle button state
  isHelpActive,
  isTTSActive,
  isCalcActive,
  isScratchActive,
  isPencilActive,
  isHighlighterActive,
  isEraserActive,
  isTimerActive,
  // events
  onClickNext,
  onClickPrev,
  onClickScratch,
  onClickPencil,
  onClickHighlighter,
  onClickEraser,
  onClickClear,
  onClickTimer,
  onClickHelp,
  onClickCalc,
  onClickLang,
  onClickTTS
}) => {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    id: id,
    role: "toolbar",
    "aria-label": label,
    bg: "n.100",
    borderBottom: 1,
    borderBottomColor: "n.400"
  }, /*#__PURE__*/_react.default.createElement(_reactRovingTabindex.RovingTabIndexProvider, null, /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "help-btn",
    title: "Help. Shows help and directions.",
    icon: "question-circle",
    isActive: isHelpActive,
    onClick: onClickHelp,
    disabled: isHelpDisabled
  })), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    id: "theme-btn",
    title: "Change Theme. Changes the colors used on the screen.",
    icon: "change-theme",
    disabled: isThemeDisabled
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    id: "zoomout-btn",
    title: "Zoom Out. Makes the words and images smaller.",
    icon: "zoom-out",
    disabled: isZoomOutDisabled
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    title: "Zoom In. Makes the words and images larger.",
    id: "zoomin-btn",
    icon: "zoom-in",
    disabled: isZoomInDisabled
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    id: "lang-btn",
    icon: language === 'es' ? 'lang-es' : 'lang-en',
    title: // todo: should the I be capitalized in inglés?
    language === 'es' ? 'Cambiar a inglés.' : 'Change to Spanish.',
    onClick: onClickLang,
    disabled: isLangDisabled,
    sx: {
      transform: language === 'es' ? 'rotateY(360deg);' : null,
      color: language === 'es' ? 'green.500' : 'n.800',
      transition: 'transform .4s'
    }
  })), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "tts-btn",
    title: "Read Aloud. Turns on read aloud mode. You can tap any box to hear the text read out loud.",
    icon: "placeholder",
    isActive: isTTSActive,
    onClick: onClickTTS,
    disabled: isTTSDisabled
  }), /*#__PURE__*/_react.default.createElement(_ToolbarScratchButton.default, {
    title: "Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions.",
    isScratchActive: isScratchActive,
    onClickScratch: onClickScratch,
    disabled: isScratchDisabled
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "pencil-btn",
    title: "Pencil. Turns on write mode. This lets you write on the screen.",
    onClick: onClickPencil,
    isActive: isPencilActive,
    disabled: isPencilDisabled,
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "highlighter-btn",
    title: "Highlighter. Turns on highlight mode. This lets you highlight parts of the screen.",
    onClick: onClickHighlighter,
    isActive: isHighlighterActive,
    disabled: isHighlighterDisabled,
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "eraser-btn",
    title: "Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights.",
    onClick: onClickEraser,
    isActive: isEraserActive,
    disabled: isEraserDisabled,
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    id: "clear-scratch-btn",
    title: "Clear Scratchwork. Clears all scratchwork on the screen.",
    onClick: onClickClear,
    disabled: isClearDisabled,
    size: "sm"
  })), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    title: "Math Keyboard. Shows the on-screen math keyboard.",
    id: "math-btn",
    icon: "placeholder",
    disabled: isMathDisabled
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    title: "Calculator. Shows the calculator.",
    id: "calc-btn",
    icon: "placeholder",
    isActive: isCalcActive,
    onClick: onClickCalc,
    disabled: isCalcDisabled
  })), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, {
    flex: 1,
    justifyContent: "space-evenly",
    direction: "column",
    overflow: "hidden",
    spacing: 0
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    id: "accnum",
    fontSize: 2,
    sx: {
      whiteSpace: 'nowrap'
    }
  }, itemTitle), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    id: "block",
    fontSize: 2,
    sx: {
      whiteSpace: 'nowrap'
    }
  }, blockTitle)), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, {
    display: ['none', 'none', 'none', 'block']
  }, /*#__PURE__*/_react.default.createElement(_ToolbarTimerButton.default, {
    id: "timer-btn",
    isTimerActive: isTimerActive,
    onClickTimer: onClickTimer,
    disabled: isTimerDisabled
  })), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default // display={['none', 'none', 'none', 'flex']}
  , {
    justifyContent: "space-evenly",
    alignItems: "stretch",
    direction: "column",
    px: "3"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 2
  }, "Progress"), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    id: "progress",
    border: 2,
    bg: "white",
    borderColor: "n.400",
    borderRadius: 3,
    width: "100%",
    height: "18px",
    title: "Progress. This is how far you are in the section.",
    role: "progressbar",
    "aria-valuenow": progress,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, {
    width: progress + '%',
    height: "100%",
    bg: "green.500"
  }))), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, {
    borderRight: "none"
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.PrevButton, {
    id: "prev-btn",
    title: "Back. Returns to the previous screen.",
    onClick: onClickPrev,
    disabled: isPrevDisabled
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.NextButton, {
    id: "next-btn",
    title: "Next. Moves to the next screen.",
    onClick: onClickNext,
    disabled: isNextDisabled
  }))));
};

var _default = Toolbar;
exports.default = _default;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearButton = ClearButton;
exports.ZonesBackground = ZonesBackground;
exports.Zone = Zone;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const ZonesContext = (0, _react.createContext)({
  selected: [],
  onClear: () => {},
  onChange: () => {}
});

function useZonesContext() {
  const context = (0, _react.useContext)(ZonesContext);

  if (!context) {
    throw new Error('Choice compound components cannot be rendered outside the Zones component');
  }

  return context;
}

function Zones({
  id,
  children,
  onChange,
  onClear,
  selected
}) {
  return /*#__PURE__*/_react.default.createElement(ZonesContext.Provider, {
    value: {
      selected,
      onClear,
      onChange
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    id: id
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: "4"
  }, children)), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    pt: "4"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    onClick: onClear
  }, "Clear Answer")));
}

function ClearButton() {
  const {
    onClear
  } = useZonesContext();
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    pt: "2"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    onClick: onClear
  }, "Clear Answer"));
}

function Fallback({
  width,
  height
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    sx: {
      bg: 'n.50',
      width: width + 'px',
      height: height + 'px'
    },
    style: {
      position: 'relative'
    }
  });
}

function ZonesBackground({
  width,
  height,
  label,
  src,
  children
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    sx: {
      display: 'block',
      position: 'relative'
    }
  }, src ? /*#__PURE__*/_react.default.createElement(_Base.Box, {
    as: "img",
    src: src,
    alt: label,
    style: {
      position: 'relative',
      width: width + 'px',
      height: height + 'px'
    }
  }) : /*#__PURE__*/_react.default.createElement(Fallback, {
    width: width,
    height: height
  }), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    as: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    sx: {
      position: 'absolute',
      left: 0,
      top: 0
    }
  }, children));
}

function Zone({
  value,
  type,
  ...props
}) {
  const normalStyle = {
    fill: 'p.500',
    fillOpacity: 0.4,
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'black',
      outlineOffset: 1
    },
    ':hover': {
      fill: 'p.500',
      fillOpacity: 0.2,
      cursor: 'pointer'
    }
  };
  const selectedStyle = {
    stroke: 'p.500',
    strokeWidth: 3,
    strokeDasharray: 4,
    fill: 'p.500',
    fillOpacity: 0.2,
    ':hover': {
      fill: 'p.500',
      fillOpacity: 0.2,
      cursor: 'pointer'
    },
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'black',
      outlineOffset: 1
    }
  };
  const {
    selected,
    onChange
  } = useZonesContext();
  const isSelected = value === selected;
  return /*#__PURE__*/_react.default.createElement(_Base.Bare, _extends({
    as: type,
    key: value,
    tabIndex: "0",
    onClick: () => onChange(value),
    sx: isSelected ? selectedStyle : normalStyle
  }, props));
}

Zones.Choice = Zone;
Zones.ClearButton = ClearButton;
Zones.Background = ZonesBackground;
Zones.propTypes = {
  id: _propTypes.default.string,
  background: _propTypes.default.object,
  onSelect: _propTypes.default.func,
  selected: _propTypes.default.string
};
var _default = Zones;
exports.default = _default;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Alert = _interopRequireDefault(__webpack_require__(328));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Alert',
  component: _Alert.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: "3"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Alert.default, null, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "extrabold",
    pb: "2"
  }, "You have reached the end of this section."), /*#__PURE__*/_react.default.createElement(_Base.Text, null, "It looks like you have not answered the following questions."))), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    variant: "success"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "extrabold",
    pb: "2"
  }, "You have reached the end of this section."), /*#__PURE__*/_react.default.createElement(_Base.Text, null, "It looks like you have not answered the following questions.")), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    variant: "danger"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "extrabold",
    pb: "2"
  }, "You have reached the end of this section."), /*#__PURE__*/_react.default.createElement(_Base.Text, null, "It looks like you have not answered the following questions.")), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    variant: "warning"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "extrabold",
    pb: "2"
  }, "You have reached the end of this section."), /*#__PURE__*/_react.default.createElement(_Base.Text, null, "It looks like you have not answered the following questions.")));
}

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Checkbox = _interopRequireDefault(__webpack_require__(207));

var _RadioButton = _interopRequireDefault(__webpack_require__(208));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const GridContext = (0, _react.createContext)({
  response: {},
  clearResponse: () => {},
  updateResponse: () => {}
});

function useResponseContext() {
  const context = (0, _react.useContext)(GridContext);

  if (!context) {
    throw new Error('Grid compound components cannot be rendered outside the Grid component');
  }

  return context;
}

function Grid({
  children
}) {
  const [response, setResponse] = _react.default.useState({});

  function updateResponse(value) {
    setResponse(value);
  }

  function clearResponse() {
    setResponse({});
  }

  return /*#__PURE__*/_react.default.createElement(GridContext.Provider, {
    value: {
      response,
      clearResponse,
      updateResponse
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, children));
}

function GridClearButton({
  children
}) {
  const {
    clearResponse
  } = useResponseContext();

  function handleClick() {
    clearResponse();
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    onClick: handleClick
  }, children));
}

function GridCheckbox({
  inputId
}) {
  const {
    response,
    updateResponse
  } = useResponseContext();
  const checked = response[inputId] || false;

  function handleClick() {
    return updateResponse({ ...response,
      [inputId]: !checked
    });
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    checked: checked,
    onClick: handleClick,
    onChange: () => {}
  }));
}

function GridRadio({
  inputId,
  groupId
}) {
  const {
    response,
    updateResponse
  } = useResponseContext();
  const value = response[groupId];
  const checked = value === inputId;

  function handleClick() {
    updateResponse({ ...response,
      [groupId]: inputId
    });
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    checked: checked,
    onClick: handleClick,
    onChange: () => {}
  }));
}

Grid.Checkbox = GridCheckbox;
Grid.Radio = GridRadio;
Grid.ClearButton = GridClearButton;
var _default = Grid;
exports.default = _default;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllTags = AllTags;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Tag = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function AllTags() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    p: "3"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Tag.default, null, "Primary")), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Tag.default, {
    variant: "success"
  }, "Success")), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Tag.default, {
    variant: "warning"
  }, "Warning")), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Tag.default, {
    variant: "danger"
  }, "Danger")));
}

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(372);
__webpack_require__(522);
__webpack_require__(523);
module.exports = __webpack_require__(744);


/***/ }),

/***/ 438:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Icon = _interopRequireDefault(__webpack_require__(716));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Icon.default;
exports.default = _default;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _react=_interopRequireDefault(__webpack_require__(0)),_react2=__webpack_require__(263),_benchmark=__webpack_require__(704);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var withWrapper=function(storyFn){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode,null,/*#__PURE__*/_react["default"].createElement(_benchmark.Global,null),/*#__PURE__*/_react["default"].createElement(_benchmark.ThemeProvider,null,/*#__PURE__*/_react["default"].createElement(_benchmark.Box,{id:"wrapper",padding:"3"},storyFn()))))};(0,_react2.addDecorator)(withWrapper);(0,_react2.addParameters)({options:{showRoots:!0}});

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArrayToggle = useArrayToggle;
exports.useToggle = useToggle;
exports.useOutsideClick = void 0;

var _react = __webpack_require__(0);

function useArrayToggle(initialValue = []) {
  const [state, setState] = (0, _react.useState)(initialValue);

  function toggle(item) {
    if (state.includes(item)) {
      setState(state.filter(i => i !== item));
    } else {
      setState([...state, item]);
    }
  }

  function reset() {
    setState([]);
  }

  return [state, toggle, reset];
}

function useToggle(initialState = false) {
  const [state, setState] = (0, _react.useState)(initialState);

  const toggle = () => setState(!state);

  return [state, toggle];
}

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

exports.useOutsideClick = useOutsideClick;

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(324);

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _emotionTheming = __webpack_require__(706);

var _default2 = _interopRequireDefault(__webpack_require__(205));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const ThemeProvider = ({
  theme,
  children
}) => /*#__PURE__*/_react.default.createElement(_emotionTheming.ThemeProvider, {
  theme: theme
}, /*#__PURE__*/_react.default.createElement(_Base.Box, {
  sx: {
    color: 'text',
    bg: 'bg',
    width: '100%',
    height: '100%',
    fontSize: 3,
    fontFamily: 'body'
  }
}, children));

ThemeProvider.defaultProps = {
  theme: _default2.default
};
var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Global = _interopRequireDefault(__webpack_require__(712));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Global.default;
exports.default = _default;

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _core = __webpack_require__(61);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = () => {
  // CSS RESET
  let global = (0, _core.css)`
    html,
    body {
      height: 100%;
      margin: 0;
    }
    /**
     * Form elements don't inherit font settings.
     * https://stackoverflow.com/questions/26140050/why-is-font-family-not-inherited-in-button-tags-automatically
     */
    input,
    select,
    textarea,
    button {
      font-family: inherit;
      font-size: inherit;
    }
  `;
  return /*#__PURE__*/_react.default.createElement(_core.Global, {
    styles: global
  });
};

exports.default = _default;

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = __webpack_require__(206);

const theme = { ..._base.theme,
  colors: { ..._base.colors,
    n: {
      0: '#000000',
      // 50: '#111111', // todo: used or needed?
      100: '#0d0d0d',
      200: '#3c3c3c',
      300: '#696969',
      400: '#909090',
      500: '#afafaf',
      600: '#c7c7c7',
      700: '#d8d8d8',
      800: '#e4e4e4',
      900: '#ebebeb',
      1000: '#ffffff'
    },
    text: '#ffffff',
    bg: '#000000',
    secondary: '#3c3c3c'
  },
  buttons: { ..._base.theme.buttons,
    primary: { ..._base.theme.buttons.primary,
      bg: 'p.900'
    }
  }
};
var _default = theme;
exports.default = _default;

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = __webpack_require__(206);

const theme = { ..._base.theme,
  colors: { ..._base.colors,
    bg: '#86867a'
  }
};
var _default = theme;
exports.default = _default;

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Alert = _interopRequireDefault(__webpack_require__(328));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Alert.default;
exports.default = _default;

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _SVG = _interopRequireDefault(__webpack_require__(717));

var _icons = _interopRequireDefault(__webpack_require__(719));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Icon({
  name,
  size = '1em',
  focusable = false,
  color = 'currentColor',
  role = 'presentation'
}) {
  // fallback to question icon if name is not found
  const icon = _icons.default[name] || _icons.default['placeholder'];
  const {
    path,
    viewBox = '0 0 24 24'
  } = icon;
  return /*#__PURE__*/_react.default.createElement(_SVG.default, {
    as: "svg",
    size: size,
    color: color,
    display: "inline-block",
    verticalAlign: "middle",
    viewBox: viewBox,
    focusable: focusable,
    role: role
  }, path);
}

var _default = Icon;
exports.default = _default;

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SVG = _interopRequireDefault(__webpack_require__(718));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _SVG.default;
exports.default = _default;

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const SVG = ({
  size = '24px',
  ...props
}) => /*#__PURE__*/_react.default.createElement(_Base.Box, _extends({
  as: "svg",
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentcolor"
}, props));

var _default = SVG;
exports.default = _default;

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const icons = {
  'lang-es': {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
      fill: "#3f3f3f",
      d: "M7.097 42.239c0 0.008 0 0.018 0 0.027 0 0.117-0.006 0.232-0.018 0.345l0.001-0.014c-0.008 0.086-0.026 0.165-0.052 0.24l0.002-0.007c-0.017 0.051-0.045 0.095-0.083 0.129l-0 0c-0.029 0.025-0.067 0.040-0.109 0.041h-4.32c-0.004 0-0.009 0-0.013 0-0.138 0-0.264-0.055-0.356-0.144l0 0q-0.149-0.144-0.149-0.469v-8.331q0-0.325 0.149-0.469c0.092-0.089 0.217-0.144 0.356-0.144 0.005 0 0.009 0 0.014 0h4.294c0 0 0.001 0 0.002 0 0.040 0 0.076 0.014 0.105 0.037l-0-0c0.037 0.034 0.065 0.078 0.079 0.127l0.001 0.002c0.024 0.069 0.041 0.149 0.050 0.232l0 0.005c0.011 0.1 0.017 0.217 0.017 0.335 0 0.011-0 0.022-0 0.032v-0.002c0 0.007 0 0.016 0 0.025 0 0.115-0.006 0.228-0.018 0.34l0.001-0.014c-0.008 0.086-0.026 0.165-0.052 0.24l0.002-0.007c-0.017 0.051-0.044 0.094-0.080 0.129l-0 0c-0.028 0.025-0.065 0.041-0.105 0.041-0 0-0.001 0-0.001 0h-3.071v2.334h2.599c0.042 0 0.080 0.016 0.11 0.041l-0-0c0.037 0.033 0.066 0.075 0.082 0.123l0.001 0.002c0.024 0.067 0.042 0.144 0.050 0.225l0 0.004c0.011 0.106 0.017 0.228 0.017 0.352s-0.006 0.247-0.018 0.368l0.001-0.015c-0.008 0.083-0.026 0.159-0.052 0.232l0.002-0.007c-0.017 0.049-0.045 0.090-0.083 0.122l-0 0c-0.030 0.023-0.068 0.037-0.109 0.037-0 0-0 0-0 0v0h-2.599v2.696h3.097c0.042 0 0.080 0.016 0.11 0.041l-0-0c0.038 0.034 0.066 0.078 0.083 0.127l0.001 0.002c0.024 0.068 0.042 0.147 0.050 0.228l0 0.004c0.010 0.098 0.016 0.211 0.016 0.326 0 0.012-0 0.024-0 0.036v-0.002zM12.986 40.888c0 0.016 0.001 0.034 0.001 0.053 0 0.338-0.069 0.66-0.194 0.952l0.006-0.016c-0.125 0.285-0.307 0.525-0.532 0.714l-0.003 0.002c-0.23 0.19-0.503 0.338-0.801 0.428l-0.016 0.004c-0.306 0.091-0.658 0.144-1.021 0.144-0.225 0-0.445-0.020-0.659-0.059l0.022 0.003c-0.209-0.037-0.391-0.086-0.567-0.148l0.025 0.008c-0.155-0.053-0.287-0.112-0.413-0.181l0.014 0.007c-0.089-0.046-0.166-0.102-0.233-0.167l0 0c-0.056-0.067-0.096-0.15-0.113-0.24l-0.001-0.003c-0.026-0.129-0.041-0.276-0.041-0.428 0-0.022 0-0.045 0.001-0.067l-0 0.003q0-0.214 0.013-0.344c0.006-0.076 0.020-0.147 0.042-0.214l-0.002 0.007c0.011-0.042 0.034-0.077 0.066-0.103l0-0c0.026-0.016 0.059-0.026 0.093-0.026 0.002 0 0.005 0 0.007 0h-0c0.083 0.013 0.156 0.046 0.217 0.093l-0.001-0.001q0.143 0.092 0.356 0.203c0.137 0.072 0.301 0.142 0.47 0.2l0.025 0.007c0.183 0.061 0.393 0.096 0.612 0.096 0.010 0 0.021-0 0.031-0h-0.002c0.006 0 0.013 0 0.020 0 0.136 0 0.267-0.019 0.392-0.054l-0.010 0.002c0.117-0.033 0.218-0.084 0.308-0.149l-0.003 0.002c0.085-0.063 0.152-0.145 0.195-0.24l0.002-0.004c0.042-0.095 0.066-0.207 0.066-0.323 0-0.006-0-0.012-0-0.017v0.001c0-0.004 0-0.008 0-0.013 0-0.139-0.047-0.267-0.126-0.369l0.001 0.001c-0.090-0.112-0.198-0.204-0.32-0.274l-0.005-0.003c-0.127-0.075-0.278-0.149-0.435-0.213l-0.024-0.009q-0.256-0.103-0.525-0.229c-0.206-0.097-0.378-0.193-0.543-0.299l0.018 0.011c-0.176-0.113-0.327-0.245-0.456-0.396l-0.002-0.003c-0.136-0.161-0.247-0.35-0.322-0.556l-0.004-0.013c-0.080-0.223-0.125-0.481-0.125-0.75 0-0.017 0-0.034 0.001-0.050l-0 0.002c-0-0.007-0-0.016-0-0.025 0-0.304 0.061-0.593 0.172-0.857l-0.005 0.015c0.112-0.267 0.275-0.492 0.477-0.674l0.002-0.002c0.213-0.189 0.467-0.338 0.746-0.433l0.015-0.005c0.288-0.098 0.619-0.155 0.964-0.155 0.015 0 0.030 0 0.045 0l-0.002-0c0.002 0 0.004 0 0.007 0 0.189 0 0.374 0.016 0.555 0.047l-0.019-0.003c0.185 0.030 0.345 0.069 0.501 0.118l-0.026-0.007c0.139 0.042 0.258 0.091 0.371 0.149l-0.012-0.006c0.080 0.040 0.148 0.084 0.212 0.135l-0.002-0.002c0.037 0.030 0.067 0.067 0.089 0.109l0.001 0.002c0.018 0.039 0.032 0.083 0.040 0.13l0 0.003q0.013 0.077 0.023 0.192t0.010 0.284q0 0.199-0.010 0.325c-0.004 0.073-0.016 0.141-0.035 0.206l0.002-0.007c-0.009 0.041-0.032 0.075-0.062 0.1l-0 0c-0.025 0.016-0.056 0.026-0.089 0.026-0.001 0-0.003 0-0.004-0h0c-0.071-0.011-0.135-0.039-0.189-0.078l0.001 0.001c-0.086-0.053-0.189-0.108-0.296-0.158l-0.020-0.008c-0.119-0.057-0.264-0.113-0.413-0.16l-0.025-0.007c-0.161-0.049-0.347-0.078-0.539-0.078-0.010 0-0.020 0-0.030 0h0.002c-0.007-0-0.015-0-0.023-0-0.131 0-0.258 0.019-0.378 0.054l0.009-0.002c-0.105 0.031-0.197 0.082-0.273 0.148l0.001-0.001c-0.068 0.061-0.122 0.136-0.158 0.221l-0.002 0.004c-0.034 0.080-0.053 0.174-0.053 0.272 0 0.002 0 0.004 0 0.006v-0c-0 0.006-0 0.013-0 0.021 0 0.138 0.047 0.264 0.126 0.364l-0.001-0.001c0.092 0.11 0.203 0.201 0.327 0.27l0.006 0.003c0.13 0.075 0.285 0.15 0.445 0.213l0.024 0.008q0.262 0.104 0.532 0.225c0.21 0.096 0.384 0.191 0.551 0.296l-0.019-0.011c0.18 0.112 0.334 0.245 0.467 0.396l0.002 0.002c0.138 0.16 0.25 0.346 0.328 0.55l0.004 0.013c0.082 0.219 0.129 0.472 0.129 0.736 0 0.017-0 0.034-0.001 0.051l0-0.003zM20.486 39.359c0 0.017 0 0.036 0 0.056 0 0.542-0.063 1.069-0.183 1.574l0.009-0.046c-0.103 0.454-0.274 0.856-0.504 1.215l0.009-0.015c-0.396 0.621-1.080 1.027-1.86 1.027-0.021 0-0.042-0-0.064-0.001l0.003 0c-0.005 0-0.011 0-0.017 0-0.163 0-0.321-0.020-0.472-0.059l0.013 0.003c-0.159-0.042-0.298-0.1-0.427-0.174l0.008 0.004c-0.152-0.088-0.284-0.182-0.405-0.287l0.003 0.003c-0.148-0.128-0.282-0.258-0.409-0.395l-0.003-0.003v3.102c0 0.001 0 0.002 0 0.003 0 0.049-0.015 0.094-0.041 0.131l0.001-0.001c-0.035 0.045-0.081 0.080-0.134 0.099l-0.002 0.001c-0.074 0.029-0.161 0.051-0.251 0.062l-0.005 0c-0.122 0.014-0.263 0.022-0.406 0.022s-0.284-0.008-0.423-0.024l0.017 0.002c-0.095-0.011-0.181-0.033-0.263-0.065l0.007 0.002c-0.055-0.020-0.102-0.055-0.136-0.099l-0.001-0.001c-0.025-0.037-0.040-0.082-0.040-0.13 0-0.001 0-0.002 0-0.003v0-9.201c-0-0.004-0-0.008-0-0.012 0-0.097 0.062-0.179 0.148-0.209l0.002-0c0.064-0.027 0.138-0.046 0.216-0.055l0.004-0c0.093-0.012 0.201-0.018 0.311-0.018 0.011 0 0.022 0 0.034 0h-0.002c0.009-0 0.019-0 0.029-0 0.108 0 0.215 0.007 0.319 0.020l-0.013-0.001c0.081 0.009 0.155 0.029 0.225 0.058l-0.005-0.002c0.088 0.031 0.15 0.113 0.15 0.209 0 0.004-0 0.008-0 0.012l0-0.001v0.776c0.163-0.186 0.329-0.356 0.504-0.516l0.005-0.004c0.15-0.137 0.317-0.261 0.495-0.367l0.014-0.008c0.154-0.092 0.332-0.169 0.52-0.221l0.015-0.004c0.172-0.047 0.37-0.074 0.574-0.074 0.005 0 0.010 0 0.015 0h-0.001q0.651 0 1.11 0.284c0.312 0.196 0.565 0.459 0.744 0.769l0.006 0.011c0.192 0.332 0.339 0.718 0.418 1.128l0.004 0.024c0.084 0.41 0.133 0.881 0.133 1.364 0 0.013-0 0.026-0 0.039v-0.002zM18.745 39.493c0-0.005 0-0.010 0-0.016 0-0.28-0.020-0.555-0.060-0.823l0.004 0.031c-0.035-0.256-0.103-0.488-0.199-0.704l0.007 0.017c-0.083-0.193-0.205-0.354-0.357-0.482l-0.002-0.002c-0.143-0.113-0.326-0.181-0.525-0.181-0.010 0-0.021 0-0.031 0.001l0.001-0c-0.118 0-0.231 0.021-0.336 0.058l0.007-0.002c-0.127 0.046-0.237 0.107-0.335 0.183l0.003-0.002c-0.129 0.099-0.243 0.206-0.347 0.322l-0.002 0.003c-0.13 0.148-0.255 0.309-0.368 0.478l-0.010 0.017v2.171c0.198 0.289 0.419 0.539 0.667 0.761l0.004 0.004c0.175 0.161 0.407 0.262 0.663 0.269l0.001 0c0.006 0 0.013 0 0.020 0 0.203 0 0.39-0.071 0.537-0.189l-0.002 0.001c0.157-0.13 0.284-0.292 0.371-0.475l0.004-0.008c0.096-0.195 0.171-0.422 0.214-0.66l0.002-0.016c0.043-0.222 0.067-0.478 0.067-0.74 0-0.005 0-0.010-0-0.015v0.001zM27.146 42.771c0 0.003 0 0.007 0 0.011 0 0.060-0.026 0.114-0.066 0.152l-0 0c-0.058 0.045-0.129 0.075-0.207 0.085l-0.002 0c-0.11 0.017-0.237 0.026-0.366 0.026-0.020 0-0.039-0-0.059-0.001l0.003 0c-0.020 0.001-0.044 0.001-0.068 0.001-0.131 0-0.259-0.010-0.384-0.028l0.014 0.002c-0.074-0.009-0.14-0.040-0.193-0.085l0 0c-0.035-0.040-0.057-0.092-0.057-0.149 0-0.005 0-0.009 0-0.014l-0 0.001v-0.524c-0.229 0.277-0.506 0.504-0.82 0.672l-0.015 0.007c-0.294 0.154-0.642 0.244-1.012 0.244-0.010 0-0.020-0-0.030-0h0.002c-0.008 0-0.018 0-0.028 0-0.3 0-0.589-0.050-0.858-0.143l0.019 0.006c-0.267-0.091-0.496-0.229-0.689-0.407l0.001 0.001c-0.193-0.183-0.346-0.406-0.444-0.656l-0.004-0.012c-0.101-0.261-0.16-0.563-0.16-0.879 0-0.018 0-0.036 0.001-0.054l-0 0.003c-0-0.016-0.001-0.035-0.001-0.055 0-0.342 0.075-0.668 0.209-0.96l-0.006 0.014c0.14-0.288 0.346-0.525 0.599-0.698l0.006-0.004c0.286-0.19 0.621-0.333 0.982-0.407l0.018-0.003c0.393-0.085 0.844-0.134 1.307-0.134 0.029 0 0.058 0 0.087 0.001l-0.004-0h0.578v-0.399c0-0.010 0-0.022 0-0.034 0-0.18-0.021-0.356-0.060-0.524l0.003 0.016c-0.034-0.149-0.099-0.279-0.189-0.389l0.001 0.002c-0.090-0.105-0.207-0.184-0.34-0.227l-0.005-0.002c-0.147-0.047-0.317-0.074-0.493-0.074-0.015 0-0.029 0-0.044 0.001l0.002-0c-0.012-0-0.026-0-0.039-0-0.253 0-0.498 0.038-0.728 0.108l0.018-0.005c-0.228 0.070-0.421 0.148-0.605 0.239l0.024-0.011q-0.25 0.125-0.422 0.229c-0.077 0.055-0.171 0.092-0.273 0.103l-0.002 0c-0.050-0-0.096-0.020-0.129-0.052l0 0c-0.041-0.040-0.073-0.090-0.092-0.145l-0.001-0.003c-0.025-0.068-0.045-0.148-0.056-0.231l-0.001-0.005c-0.013-0.089-0.020-0.192-0.020-0.297 0-0.005 0-0.011 0-0.016v0.001c-0-0.012-0.001-0.026-0.001-0.040 0-0.114 0.012-0.225 0.036-0.332l-0.002 0.010c0.023-0.093 0.067-0.174 0.126-0.241l-0.001 0.001c0.093-0.094 0.2-0.173 0.319-0.233l0.007-0.003c0.153-0.085 0.333-0.166 0.52-0.232l0.025-0.008c0.189-0.069 0.417-0.132 0.652-0.177l0.029-0.005c0.226-0.045 0.486-0.070 0.752-0.070 0.003 0 0.007 0 0.010 0h-0.001c0.025-0.001 0.055-0.001 0.085-0.001 0.395 0 0.776 0.056 1.138 0.159l-0.029-0.007c0.317 0.092 0.591 0.253 0.813 0.466l-0.001-0.001c0.22 0.219 0.385 0.492 0.472 0.798l0.003 0.013c0.093 0.329 0.147 0.707 0.147 1.098 0 0.027-0 0.054-0.001 0.081l0-0.004zM25.5 39.95h-0.636c-0.016-0-0.034-0-0.052-0-0.226 0-0.447 0.024-0.66 0.070l0.020-0.004c-0.177 0.037-0.333 0.106-0.469 0.202l0.004-0.003c-0.113 0.082-0.203 0.19-0.26 0.316l-0.002 0.005c-0.053 0.122-0.083 0.263-0.083 0.412 0 0.007 0 0.014 0 0.020v-0.001q0 0.414 0.236 0.65t0.652 0.236c0.002 0 0.004 0 0.005 0 0.24 0 0.463-0.075 0.647-0.202l-0.004 0.002c0.231-0.166 0.429-0.359 0.596-0.576l0.005-0.007zM34.75 42.75c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.041 0.126l0-0.001c-0.034 0.042-0.079 0.074-0.131 0.092l-0.002 0.001c-0.075 0.027-0.162 0.047-0.252 0.055l-0.004 0c-0.11 0.012-0.238 0.018-0.367 0.018-0.012 0-0.025-0-0.037-0h0.002c-0.011 0-0.025 0-0.038 0-0.131 0-0.26-0.007-0.387-0.020l0.016 0.001c-0.094-0.008-0.181-0.028-0.263-0.058l0.007 0.002c-0.054-0.018-0.099-0.050-0.133-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-3.76c0.001-0.026 0.001-0.057 0.001-0.088 0-0.235-0.023-0.465-0.067-0.688l0.004 0.022c-0.039-0.177-0.102-0.334-0.186-0.476l0.004 0.007c-0.076-0.127-0.181-0.229-0.305-0.301l-0.004-0.002c-0.122-0.067-0.267-0.107-0.422-0.107-0.007 0-0.014 0-0.021 0h0.001q-0.319 0-0.645 0.259c-0.258 0.219-0.482 0.466-0.67 0.74l-0.008 0.013v4.38c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.041 0.126l0-0.001c-0.035 0.042-0.081 0.075-0.134 0.092l-0.002 0.001c-0.075 0.027-0.161 0.047-0.251 0.055l-0.004 0c-0.122 0.012-0.263 0.019-0.406 0.019s-0.284-0.007-0.424-0.020l0.018 0.001c-0.094-0.009-0.181-0.029-0.263-0.058l0.008 0.002c-0.055-0.018-0.101-0.050-0.136-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-6.589c-0-0.004-0-0.008-0-0.012 0-0.098 0.064-0.18 0.152-0.208l0.002-0c0.065-0.026 0.14-0.046 0.218-0.055l0.004-0c0.093-0.012 0.201-0.018 0.311-0.018 0.011 0 0.022 0 0.034 0h-0.002c0.010-0 0.022-0 0.033-0 0.112 0 0.223 0.007 0.332 0.020l-0.013-0.001c0.080 0.008 0.153 0.028 0.221 0.057l-0.005-0.002c0.045 0.020 0.083 0.052 0.109 0.092l0.001 0.001c0.021 0.036 0.033 0.079 0.033 0.124 0 0.002 0 0.003-0 0.005v-0 0.761q0.492-0.591 1-0.886c0.303-0.185 0.67-0.294 1.062-0.296h0q0.605 0 1.020 0.221c0.272 0.146 0.496 0.349 0.663 0.594l0.004 0.006c0.169 0.255 0.297 0.553 0.366 0.873l0.003 0.017c0.074 0.346 0.117 0.744 0.117 1.152 0 0.026-0 0.052-0.001 0.079l0-0.004zM34.291 33.134q0 0.894-0.383 1.37t-1.063 0.476c-0.007 0-0.016 0-0.024 0-0.155 0-0.304-0.022-0.446-0.062l0.011 0.003c-0.137-0.040-0.256-0.093-0.366-0.159l0.007 0.004c-0.11-0.066-0.204-0.133-0.293-0.206l0.004 0.003q-0.129-0.107-0.25-0.199c-0.069-0.054-0.146-0.105-0.227-0.15l-0.009-0.005c-0.071-0.039-0.156-0.063-0.247-0.063-0.001 0-0.002 0-0.004 0h0c-0.007-0.001-0.015-0.001-0.024-0.001-0.125 0-0.233 0.070-0.288 0.173l-0.001 0.002c-0.059 0.121-0.094 0.264-0.094 0.414 0 0.014 0 0.028 0.001 0.042l-0-0.002c0 0.003 0 0.006 0 0.010 0 0.035-0.009 0.069-0.024 0.098l0.001-0.001c-0.019 0.029-0.046 0.051-0.079 0.062l-0.001 0c-0.047 0.017-0.102 0.027-0.158 0.029l-0.001 0q-0.103 0.008-0.263 0.008c-0.005 0-0.012 0-0.018 0-0.077 0-0.152-0.004-0.227-0.012l0.009 0.001c-0.057-0.004-0.109-0.020-0.155-0.045l0.002 0.001c-0.037-0.021-0.066-0.053-0.083-0.091l-0.001-0.001c-0.017-0.042-0.027-0.090-0.027-0.141 0-0.005 0-0.010 0-0.014v0.001q0-0.857 0.375-1.348t1.063-0.491c0.013-0 0.028-0.001 0.043-0.001 0.217 0 0.423 0.048 0.608 0.134l-0.009-0.004c0.177 0.087 0.33 0.183 0.471 0.293l-0.006-0.004q0.203 0.159 0.375 0.288c0.098 0.079 0.222 0.127 0.358 0.129h0.001c0.004 0 0.010 0 0.015 0 0.122 0 0.229-0.063 0.29-0.158l0.001-0.001q0.106-0.159 0.106-0.469c-0.001-0.005-0.001-0.011-0.001-0.017 0-0.067 0.041-0.125 0.1-0.149l0.001-0q0.1-0.041 0.406-0.041t0.409 0.056q0.111 0.054 0.111 0.239zM42.656 39.389c0 0.018 0 0.039 0 0.060 0 0.525-0.073 1.033-0.209 1.515l0.009-0.039c-0.128 0.459-0.336 0.859-0.61 1.203l0.005-0.007c-0.27 0.332-0.61 0.595-1 0.769l-0.017 0.007q-0.612 0.273-1.429 0.273-0.791 0-1.375-0.244c-0.387-0.16-0.712-0.402-0.965-0.705l-0.003-0.004c-0.26-0.321-0.458-0.705-0.567-1.124l-0.005-0.021c-0.119-0.443-0.188-0.951-0.188-1.475 0-0.026 0-0.053 0.001-0.079l-0 0.004c-0-0.018-0-0.038-0-0.059 0-0.527 0.074-1.037 0.212-1.52l-0.010 0.039c0.129-0.459 0.338-0.859 0.613-1.203l-0.005 0.007c0.269-0.329 0.608-0.59 0.994-0.764l0.017-0.007q0.608-0.273 1.426-0.273 0.797 0 1.382 0.24c0.388 0.157 0.713 0.399 0.966 0.703l0.003 0.004c0.258 0.322 0.454 0.705 0.563 1.124l0.005 0.021c0.119 0.443 0.187 0.951 0.187 1.475 0 0.029-0 0.057-0.001 0.085l0-0.004zM40.937 39.463c0-0.006 0-0.014 0-0.021 0-0.31-0.026-0.615-0.077-0.911l0.005 0.032c-0.042-0.267-0.125-0.506-0.242-0.725l0.006 0.012c-0.106-0.196-0.256-0.355-0.437-0.469l-0.005-0.003c-0.185-0.107-0.408-0.171-0.646-0.171-0.017 0-0.034 0-0.051 0.001l0.002-0c-0.009-0-0.020-0-0.031-0-0.227 0-0.44 0.056-0.628 0.155l0.007-0.004c-0.191 0.107-0.346 0.257-0.456 0.438l-0.003 0.005c-0.122 0.202-0.215 0.437-0.267 0.687l-0.003 0.015c-0.057 0.265-0.090 0.57-0.090 0.883 0 0.018 0 0.036 0 0.054l-0-0.003c-0 0.010-0 0.023-0 0.035 0 0.305 0.027 0.603 0.078 0.893l-0.005-0.031c0.044 0.267 0.127 0.506 0.242 0.725l-0.006-0.013c0.104 0.196 0.254 0.355 0.437 0.466l0.005 0.003c0.188 0.108 0.414 0.172 0.654 0.172 0.013 0 0.026-0 0.039-0.001l-0.002 0c0.009 0 0.019 0 0.030 0 0.23 0 0.446-0.057 0.636-0.158l-0.007 0.004c0.19-0.105 0.345-0.254 0.456-0.432l0.003-0.005c0.122-0.201 0.214-0.435 0.263-0.685l0.002-0.014c0.056-0.268 0.088-0.577 0.088-0.893 0-0.015-0-0.030-0-0.045v0.002zM45.926 42.75c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.041 0.126l0-0.001c-0.035 0.042-0.081 0.075-0.134 0.092l-0.002 0.001c-0.075 0.027-0.161 0.047-0.251 0.055l-0.004 0c-0.122 0.012-0.263 0.019-0.406 0.019s-0.284-0.007-0.424-0.020l0.018 0.001c-0.094-0.009-0.181-0.029-0.263-0.058l0.008 0.002c-0.055-0.018-0.101-0.050-0.136-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-9.712c0-0.001 0-0.002 0-0.003 0-0.049 0.015-0.094 0.041-0.131l-0.001 0.001c0.035-0.045 0.081-0.079 0.134-0.099l0.002-0.001c0.074-0.029 0.161-0.051 0.251-0.062l0.005-0c0.122-0.014 0.263-0.022 0.406-0.022s0.284 0.008 0.423 0.024l-0.017-0.002c0.095 0.011 0.181 0.033 0.263 0.065l-0.007-0.002c0.055 0.020 0.102 0.055 0.136 0.099l0.001 0.001c0.025 0.037 0.040 0.082 0.040 0.131 0 0.001 0 0.002 0 0.003v-0z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      fill: "#8b13b2",
      d: "M43 3h-18c-1.655 0.005-2.995 1.345-3 3v18c0.005 1.655 1.345 2.995 3 3h18c1.655-0.005 2.995-1.345 3-3v-18c-0.005-1.655-1.345-2.995-3-3h-0zM29.365 6.402q0.875-0.926 2.494-0.926 0.888 0 1.504 0.244c0.421 0.164 0.78 0.347 1.119 0.559l-0.028-0.016q0.475 0.299 0.881 0.542c0.239 0.151 0.53 0.242 0.841 0.244h0.001q0.467 0 0.717-0.299t0.25-0.884c-0-0.005-0-0.010-0-0.016 0-0.143 0.099-0.264 0.232-0.296l0.002-0q0.234-0.076 0.951-0.076 0.701 0 0.959 0.104t0.257 0.452q0 1.684-0.896 2.581t-2.486 0.898c-0.018 0-0.040 0-0.061 0-0.359 0-0.709-0.041-1.046-0.118l0.031 0.006c-0.321-0.075-0.601-0.175-0.866-0.303l0.025 0.011c-0.266-0.127-0.489-0.254-0.702-0.396l0.021 0.013q-0.304-0.202-0.584-0.375c-0.155-0.099-0.337-0.197-0.526-0.282l-0.027-0.011c-0.169-0.075-0.367-0.118-0.575-0.118-0.003 0-0.007 0-0.010 0h0.001q-0.514 0-0.733 0.327t-0.216 0.857c0 0.005 0 0.011 0 0.017 0 0.069-0.020 0.133-0.056 0.187l0.001-0.001c-0.047 0.057-0.112 0.099-0.185 0.118l-0.002 0.001c-0.111 0.032-0.24 0.052-0.373 0.056l-0.002 0q-0.242 0.014-0.616 0.014-0.328 0-0.553-0.021c-0.131-0.008-0.253-0.038-0.366-0.086l0.007 0.003c-0.083-0.037-0.15-0.097-0.194-0.172l-0.001-0.002c-0.040-0.078-0.063-0.169-0.063-0.267 0-0.009 0-0.018 0.001-0.027l-0 0.001q0.002-1.616 0.874-2.542zM40.615 24.152c0 0.001 0 0.002 0 0.004 0 0.093-0.036 0.177-0.094 0.24l0-0c-0.085 0.082-0.19 0.142-0.308 0.173l-0.005 0.001c-0.175 0.052-0.38 0.089-0.591 0.104l-0.009 0.001q-0.382 0.034-0.943 0.035-0.577 0-0.959-0.035c-0.22-0.015-0.425-0.052-0.621-0.11l0.021 0.005c-0.122-0.032-0.228-0.092-0.313-0.174l0 0c-0.058-0.063-0.094-0.147-0.094-0.24 0-0.001 0-0.003 0-0.004v0-7.083q0-0.904-0.148-1.419c-0.094-0.338-0.241-0.632-0.434-0.891l0.005 0.007c-0.189-0.245-0.433-0.439-0.713-0.566l-0.012-0.005c-0.29-0.128-0.628-0.202-0.983-0.202-0.019 0-0.037 0-0.056 0.001l0.003-0q-0.75 0-1.512 0.487t-1.59 1.419v8.25c0 0.001 0 0.002 0 0.004 0 0.093-0.036 0.177-0.094 0.24l0-0c-0.087 0.082-0.194 0.143-0.315 0.173l-0.005 0.001c-0.175 0.051-0.379 0.088-0.59 0.104l-0.010 0.001q-0.375 0.034-0.951 0.035t-0.951-0.035c-0.221-0.016-0.425-0.054-0.622-0.11l0.022 0.005c-0.125-0.031-0.233-0.091-0.32-0.174l0 0c-0.058-0.063-0.094-0.147-0.094-0.24 0-0.001 0-0.003 0-0.004v0-12.411c-0-0.002-0-0.005-0-0.008 0-0.089 0.029-0.171 0.079-0.237l-0.001 0.001c0.073-0.082 0.168-0.143 0.277-0.173l0.004-0.001c0.152-0.050 0.329-0.087 0.512-0.104l0.010-0.001c0.22-0.022 0.476-0.035 0.735-0.035 0.024 0 0.047 0 0.071 0l-0.004-0c0.021-0 0.046-0 0.071-0 0.266 0 0.529 0.013 0.788 0.038l-0.033-0.003c0.186 0.015 0.358 0.052 0.521 0.109l-0.015-0.004c0.103 0.035 0.19 0.095 0.256 0.173l0.001 0.001c0.049 0.065 0.078 0.147 0.078 0.237 0 0.003-0 0.005-0 0.008v-0 1.433q1.153-1.113 2.346-1.67c0.727-0.351 1.581-0.557 2.483-0.557 0.001 0 0.003 0 0.004 0h-0q1.418 0 2.392 0.418t1.579 1.138c0.391 0.469 0.69 1.031 0.858 1.646l0.007 0.031q0.265 0.96 0.265 2.312z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      fill: "#3f3f3f",
      d: "M19.414 13.586l-6-6c-0.362-0.362-0.862-0.586-1.414-0.586-1.105 0-2 0.896-2 2 0 0.552 0.224 1.052 0.586 1.414l2.586 2.586h-11.171v4h11.171l-2.586 2.586c-0.362 0.362-0.586 0.862-0.586 1.414 0 1.105 0.896 2 2 2 0.552 0 1.052-0.224 1.414-0.586l6-6c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414v0z"
    }))
  },
  'lang-en': {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
      fill: "#3f3f3f",
      d: "M7.097 42.239c0 0.008 0 0.018 0 0.027 0 0.117-0.006 0.232-0.018 0.345l0.001-0.014c-0.008 0.086-0.026 0.165-0.052 0.24l0.002-0.007c-0.017 0.051-0.045 0.095-0.083 0.129l-0 0c-0.029 0.025-0.067 0.040-0.109 0.041h-4.32c-0.004 0-0.009 0-0.013 0-0.138 0-0.264-0.055-0.356-0.144l0 0q-0.149-0.144-0.149-0.469v-8.331q0-0.325 0.149-0.469c0.092-0.089 0.217-0.144 0.356-0.144 0.005 0 0.009 0 0.014 0h4.294c0 0 0.001 0 0.002 0 0.040 0 0.076 0.014 0.105 0.037l-0-0c0.037 0.034 0.065 0.078 0.079 0.127l0.001 0.002c0.024 0.069 0.041 0.149 0.050 0.232l0 0.005c0.011 0.1 0.017 0.217 0.017 0.335 0 0.011-0 0.022-0 0.032v-0.002c0 0.007 0 0.016 0 0.025 0 0.115-0.006 0.228-0.018 0.34l0.001-0.014c-0.008 0.086-0.026 0.165-0.052 0.24l0.002-0.007c-0.017 0.051-0.044 0.094-0.080 0.129l-0 0c-0.028 0.025-0.065 0.041-0.105 0.041-0 0-0.001 0-0.001 0h-3.071v2.334h2.599c0.042 0 0.080 0.016 0.11 0.041l-0-0c0.037 0.033 0.066 0.075 0.082 0.123l0.001 0.002c0.024 0.067 0.042 0.144 0.050 0.225l0 0.004c0.011 0.106 0.017 0.228 0.017 0.352s-0.006 0.247-0.018 0.368l0.001-0.015c-0.008 0.083-0.026 0.159-0.052 0.232l0.002-0.007c-0.017 0.049-0.045 0.090-0.083 0.122l-0 0c-0.030 0.023-0.068 0.037-0.109 0.037-0 0-0 0-0 0v0h-2.599v2.696h3.097c0.042 0 0.080 0.016 0.11 0.041l-0-0c0.038 0.034 0.066 0.078 0.083 0.127l0.001 0.002c0.024 0.068 0.042 0.147 0.050 0.228l0 0.004c0.010 0.098 0.016 0.211 0.016 0.326 0 0.012-0 0.024-0 0.036v-0.002zM15.183 42.75c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.040 0.126l0-0.001c-0.034 0.042-0.079 0.074-0.131 0.092l-0.002 0.001c-0.075 0.027-0.162 0.047-0.252 0.055l-0.004 0c-0.11 0.012-0.238 0.018-0.367 0.018-0.012 0-0.025-0-0.037-0h0.002c-0.011 0-0.025 0-0.038 0-0.131 0-0.26-0.007-0.387-0.020l0.016 0.001c-0.094-0.008-0.181-0.028-0.263-0.058l0.007 0.002c-0.054-0.018-0.099-0.050-0.133-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-3.76c0.001-0.026 0.001-0.057 0.001-0.088 0-0.235-0.023-0.465-0.067-0.688l0.004 0.022c-0.039-0.177-0.102-0.334-0.186-0.476l0.004 0.007c-0.076-0.127-0.181-0.229-0.305-0.301l-0.004-0.002c-0.122-0.067-0.267-0.107-0.422-0.107-0.007 0-0.014 0-0.021 0h0.001q-0.319 0-0.645 0.259c-0.258 0.219-0.482 0.466-0.67 0.74l-0.008 0.013v4.38c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.040 0.126l0-0.001c-0.035 0.042-0.081 0.075-0.134 0.092l-0.002 0.001c-0.075 0.027-0.161 0.047-0.251 0.055l-0.004 0c-0.122 0.012-0.263 0.019-0.406 0.019s-0.284-0.007-0.424-0.020l0.018 0.001c-0.094-0.009-0.181-0.029-0.263-0.058l0.008 0.002c-0.055-0.018-0.101-0.050-0.136-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-6.589c-0-0.004-0-0.008-0-0.012 0-0.098 0.064-0.18 0.152-0.208l0.002-0c0.065-0.026 0.14-0.046 0.218-0.055l0.004-0c0.093-0.012 0.201-0.018 0.311-0.018 0.011 0 0.022 0 0.034 0h-0.002c0.010-0 0.022-0 0.033-0 0.112 0 0.223 0.007 0.332 0.020l-0.013-0.001c0.080 0.008 0.153 0.028 0.221 0.057l-0.005-0.002c0.045 0.020 0.083 0.052 0.109 0.092l0.001 0.001c0.021 0.036 0.033 0.079 0.033 0.124 0 0.002 0 0.003-0 0.005v-0 0.761q0.492-0.591 1-0.886c0.303-0.185 0.67-0.294 1.062-0.296h0q0.605 0 1.020 0.221c0.273 0.146 0.499 0.349 0.666 0.594l0.004 0.006c0.169 0.255 0.297 0.553 0.366 0.873l0.003 0.017c0.072 0.342 0.114 0.735 0.114 1.138 0 0.031-0 0.062-0.001 0.093l0-0.005zM23.149 36.62q0 0.354-0.073 0.524t-0.179 0.168h-0.697c0.094 0.113 0.166 0.248 0.208 0.395l0.002 0.008c0.040 0.138 0.063 0.297 0.063 0.461 0 0.003 0 0.005 0 0.008v-0c0 0.015 0 0.033 0 0.051 0 0.349-0.063 0.683-0.179 0.992l0.006-0.019c-0.113 0.296-0.281 0.547-0.494 0.753l-0.001 0.001c-0.216 0.203-0.475 0.362-0.763 0.461l-0.015 0.005c-0.291 0.101-0.625 0.159-0.974 0.159-0.014 0-0.028-0-0.042-0h0.002c-0.003 0-0.006 0-0.009 0-0.191 0-0.375-0.028-0.549-0.081l0.013 0.003c-0.152-0.041-0.284-0.102-0.403-0.184l0.005 0.003c-0.054 0.066-0.102 0.142-0.14 0.222l-0.003 0.007c-0.040 0.083-0.063 0.181-0.063 0.285 0 0.004 0 0.008 0 0.012v-0.001c-0 0.003-0 0.006-0 0.009 0 0.139 0.066 0.263 0.168 0.341l0.001 0.001c0.13 0.095 0.293 0.151 0.469 0.151 0.002 0 0.004 0 0.006-0h-0l1.442 0.059c0.325 0.010 0.633 0.068 0.923 0.165l-0.022-0.007c0.257 0.086 0.479 0.217 0.666 0.385l-0.002-0.002c0.176 0.162 0.316 0.36 0.408 0.583l0.004 0.011c0.091 0.224 0.143 0.484 0.143 0.756 0 0.012-0 0.024-0 0.036l0-0.002c0 0.003 0 0.006 0 0.010 0 0.33-0.072 0.643-0.2 0.925l0.006-0.014c-0.137 0.299-0.333 0.55-0.574 0.747l-0.004 0.003c-0.274 0.218-0.596 0.389-0.947 0.495l-0.020 0.005c-0.386 0.119-0.829 0.188-1.288 0.188-0.025 0-0.050-0-0.075-0.001l0.004 0c-0.026 0-0.057 0.001-0.087 0.001-0.427 0-0.842-0.049-1.241-0.142l0.037 0.007c-0.332-0.076-0.624-0.203-0.885-0.376l0.010 0.006c-0.213-0.141-0.383-0.331-0.496-0.554l-0.004-0.008c-0.099-0.206-0.156-0.447-0.156-0.702 0-0.006 0-0.012 0-0.019v0.001c0-0.003 0-0.006 0-0.009 0-0.162 0.021-0.319 0.059-0.469l-0.003 0.013c0.042-0.161 0.099-0.303 0.171-0.434l-0.005 0.010c0.081-0.147 0.17-0.274 0.272-0.39l-0.002 0.003c0.112-0.129 0.232-0.245 0.36-0.35l0.005-0.004c-0.189-0.113-0.34-0.271-0.44-0.461l-0.003-0.006c-0.098-0.181-0.156-0.397-0.156-0.626 0-0.005 0-0.009 0-0.014v0.001c-0-0.006-0-0.014-0-0.022 0-0.281 0.066-0.547 0.184-0.782l-0.005 0.010c0.126-0.249 0.281-0.462 0.465-0.646l-0 0c-0.157-0.175-0.284-0.381-0.37-0.607l-0.005-0.014c-0.089-0.247-0.14-0.532-0.14-0.83 0-0.025 0-0.050 0.001-0.075l-0 0.004c-0-0.014-0-0.030-0-0.046 0-0.354 0.067-0.692 0.189-1.003l-0.006 0.019c0.229-0.586 0.692-1.037 1.271-1.245l0.015-0.005c0.287-0.105 0.618-0.166 0.963-0.166 0.013 0 0.026 0 0.039 0h-0.002c0.003 0 0.007 0 0.010 0 0.185 0 0.367 0.013 0.545 0.039l-0.020-0.002c0.182 0.026 0.342 0.062 0.498 0.109l-0.023-0.006h1.881q0.113 0 0.182 0.163t0.070 0.551zM21.394 43.438c0.001-0.009 0.001-0.020 0.001-0.031 0-0.195-0.094-0.368-0.239-0.477l-0.002-0.001q-0.239-0.178-0.655-0.194l-1.187-0.037c-0.102 0.081-0.193 0.17-0.273 0.266l-0.002 0.003c-0.059 0.073-0.115 0.155-0.162 0.242l-0.004 0.008c-0.037 0.066-0.066 0.143-0.082 0.224l-0.001 0.005c-0.013 0.068-0.020 0.146-0.020 0.226 0 0.001 0 0.002 0 0.003v-0c-0 0.005-0 0.011-0 0.016 0 0.237 0.135 0.443 0.332 0.544l0.003 0.002q0.336 0.192 0.947 0.192c0.014 0 0.032 0.001 0.049 0.001 0.21 0 0.413-0.031 0.604-0.089l-0.015 0.004c0.161-0.049 0.301-0.126 0.421-0.227l-0.002 0.002c0.098-0.083 0.175-0.188 0.224-0.307l0.002-0.005c0.039-0.103 0.061-0.222 0.061-0.346 0-0.008-0-0.016-0-0.024v0.001zM21 38.177q0-0.532-0.266-0.827t-0.75-0.296c-0.006-0-0.013-0-0.020-0-0.15 0-0.291 0.034-0.417 0.095l0.006-0.002c-0.124 0.061-0.227 0.145-0.308 0.248l-0.001 0.002c-0.081 0.105-0.143 0.228-0.181 0.362l-0.002 0.008c-0.039 0.131-0.062 0.281-0.062 0.437v0q0 0.5 0.266 0.794t0.737 0.292c0.007 0 0.015 0 0.023 0 0.15 0 0.293-0.033 0.421-0.092l-0.006 0.003c0.124-0.059 0.227-0.141 0.308-0.242l0.001-0.002c0.081-0.102 0.145-0.221 0.185-0.35l0.002-0.008c0.041-0.126 0.064-0.271 0.064-0.422v-0zM26.914 42.75c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.041 0.126l0-0.001c-0.035 0.042-0.081 0.075-0.134 0.092l-0.002 0.001c-0.075 0.027-0.161 0.047-0.251 0.055l-0.004 0c-0.122 0.012-0.263 0.019-0.406 0.019s-0.284-0.007-0.424-0.020l0.018 0.001c-0.094-0.009-0.181-0.029-0.263-0.058l0.008 0.002c-0.055-0.018-0.101-0.050-0.136-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-9.712c0-0.001 0-0.002 0-0.003 0-0.049 0.015-0.094 0.041-0.131l-0.001 0.001c0.035-0.045 0.081-0.079 0.134-0.099l0.002-0.001c0.074-0.029 0.161-0.051 0.251-0.062l0.005-0c0.122-0.014 0.263-0.022 0.406-0.022s0.284 0.008 0.423 0.024l-0.017-0.002c0.095 0.011 0.181 0.033 0.263 0.065l-0.007-0.002c0.055 0.020 0.102 0.055 0.136 0.099l0.001 0.001c0.025 0.037 0.040 0.082 0.040 0.131 0 0.001 0 0.002 0 0.003v-0zM31.364 33.932q0 0.563-0.206 0.776t-0.764 0.214q-0.563 0-0.761-0.207t-0.195-0.747q0-0.563 0.203-0.779t0.767-0.218q0.558 0 0.758 0.211t0.199 0.749zM31.237 42.75c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.041 0.126l0-0.001c-0.035 0.042-0.081 0.075-0.134 0.092l-0.002 0.001c-0.075 0.027-0.161 0.047-0.251 0.055l-0.004 0c-0.122 0.012-0.263 0.019-0.406 0.019s-0.284-0.007-0.424-0.020l0.018 0.001c-0.094-0.009-0.181-0.029-0.263-0.058l0.008 0.002c-0.055-0.018-0.101-0.050-0.136-0.092l-0-0.001c-0.024-0.034-0.039-0.077-0.039-0.123 0-0.002 0-0.004 0-0.006v0-6.574c-0-0.001-0-0.003-0-0.004 0-0.047 0.015-0.090 0.041-0.126l-0 0.001c0.035-0.043 0.081-0.076 0.134-0.096l0.002-0.001c0.074-0.029 0.161-0.051 0.251-0.062l0.005-0c0.122-0.014 0.263-0.022 0.406-0.022s0.284 0.008 0.423 0.024l-0.017-0.002c0.095 0.011 0.181 0.033 0.263 0.065l-0.007-0.002c0.055 0.020 0.101 0.053 0.136 0.096l0 0.001c0.025 0.035 0.040 0.078 0.040 0.125 0 0.001 0 0.003-0 0.004v-0zM38.063 40.888c0 0.016 0.001 0.034 0.001 0.053 0 0.338-0.069 0.66-0.194 0.952l0.006-0.016c-0.125 0.285-0.307 0.525-0.532 0.714l-0.003 0.002c-0.23 0.19-0.503 0.338-0.801 0.428l-0.016 0.004c-0.306 0.091-0.658 0.144-1.021 0.144-0.225 0-0.445-0.020-0.659-0.059l0.022 0.003c-0.209-0.037-0.391-0.086-0.567-0.148l0.025 0.008c-0.155-0.053-0.287-0.112-0.413-0.181l0.014 0.007c-0.089-0.046-0.166-0.102-0.233-0.167l0 0c-0.056-0.067-0.096-0.15-0.113-0.24l-0.001-0.003c-0.026-0.129-0.041-0.276-0.041-0.428 0-0.022 0-0.045 0.001-0.067l-0 0.003q0-0.214 0.013-0.344c0.006-0.076 0.020-0.147 0.042-0.214l-0.002 0.007c0.011-0.042 0.034-0.077 0.066-0.103l0-0c0.026-0.016 0.059-0.026 0.093-0.026 0.002 0 0.005 0 0.007 0h-0c0.081 0.014 0.153 0.047 0.213 0.094l-0.001-0.001q0.143 0.092 0.356 0.203c0.137 0.072 0.301 0.142 0.47 0.2l0.025 0.007c0.183 0.061 0.393 0.096 0.612 0.096 0.010 0 0.021-0 0.031-0h-0.002c0.006 0 0.013 0 0.020 0 0.136 0 0.267-0.019 0.392-0.054l-0.010 0.002c0.117-0.033 0.218-0.084 0.308-0.149l-0.003 0.002c0.085-0.063 0.152-0.145 0.195-0.24l0.002-0.004c0.042-0.095 0.066-0.207 0.066-0.323 0-0.006-0-0.012-0-0.017v0.001c0-0.004 0-0.008 0-0.013 0-0.139-0.047-0.267-0.126-0.369l0.001 0.001c-0.090-0.112-0.198-0.204-0.32-0.274l-0.005-0.003c-0.127-0.075-0.278-0.149-0.435-0.213l-0.024-0.009q-0.256-0.103-0.525-0.229c-0.206-0.097-0.378-0.193-0.543-0.299l0.018 0.011c-0.176-0.113-0.327-0.245-0.456-0.396l-0.002-0.003c-0.136-0.161-0.247-0.35-0.322-0.556l-0.004-0.013c-0.080-0.223-0.125-0.481-0.125-0.75 0-0.017 0-0.034 0.001-0.050l-0 0.002c-0-0.007-0-0.016-0-0.025 0-0.304 0.061-0.593 0.172-0.857l-0.005 0.015c0.112-0.267 0.275-0.492 0.477-0.674l0.002-0.002c0.213-0.189 0.467-0.338 0.746-0.433l0.015-0.005c0.288-0.098 0.619-0.155 0.964-0.155 0.015 0 0.030 0 0.045 0l-0.002-0c0.002 0 0.004 0 0.007 0 0.189 0 0.374 0.016 0.555 0.047l-0.019-0.003c0.185 0.030 0.345 0.069 0.501 0.118l-0.026-0.007c0.139 0.042 0.258 0.091 0.371 0.149l-0.012-0.006c0.080 0.040 0.148 0.084 0.212 0.135l-0.002-0.002c0.037 0.030 0.067 0.067 0.089 0.109l0.001 0.002c0.018 0.039 0.032 0.083 0.040 0.13l0 0.003q0.013 0.077 0.023 0.192t0.010 0.284q0 0.199-0.010 0.325c-0.004 0.073-0.016 0.141-0.035 0.206l0.002-0.007c-0.009 0.041-0.032 0.075-0.062 0.1l-0 0c-0.025 0.016-0.056 0.026-0.089 0.026-0.001 0-0.003 0-0.004-0h0c-0.071-0.011-0.135-0.039-0.189-0.078l0.001 0.001c-0.086-0.053-0.189-0.108-0.296-0.158l-0.020-0.008c-0.119-0.057-0.264-0.113-0.413-0.16l-0.025-0.007c-0.161-0.049-0.347-0.078-0.539-0.078-0.010 0-0.020 0-0.030 0h0.002c-0.007-0-0.015-0-0.023-0-0.131 0-0.258 0.019-0.378 0.054l0.009-0.002c-0.105 0.031-0.197 0.082-0.273 0.148l0.001-0.001c-0.068 0.061-0.122 0.136-0.158 0.221l-0.002 0.004c-0.034 0.080-0.053 0.174-0.053 0.272 0 0.002 0 0.004 0 0.006v-0c-0 0.006-0 0.013-0 0.021 0 0.138 0.047 0.264 0.126 0.364l-0.001-0.001c0.092 0.11 0.203 0.201 0.327 0.27l0.006 0.003c0.13 0.075 0.285 0.15 0.445 0.213l0.024 0.008q0.263 0.104 0.532 0.225c0.21 0.096 0.384 0.191 0.551 0.296l-0.020-0.011c0.18 0.112 0.334 0.245 0.467 0.396l0.002 0.002c0.138 0.16 0.25 0.346 0.328 0.55l0.004 0.013c0.084 0.222 0.133 0.479 0.133 0.748 0 0.013-0 0.026-0 0.038l0-0.002zM45.959 42.75c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.041 0.126l0-0.001c-0.034 0.042-0.079 0.074-0.131 0.092l-0.002 0.001c-0.075 0.027-0.162 0.047-0.252 0.055l-0.004 0c-0.11 0.012-0.238 0.018-0.367 0.018-0.012 0-0.025-0-0.037-0h0.002c-0.011 0-0.025 0-0.038 0-0.131 0-0.26-0.007-0.387-0.020l0.016 0.001c-0.094-0.008-0.181-0.028-0.263-0.058l0.007 0.002c-0.054-0.018-0.099-0.050-0.133-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-3.76c0.001-0.026 0.001-0.057 0.001-0.088 0-0.235-0.023-0.465-0.067-0.688l0.004 0.022c-0.039-0.177-0.102-0.334-0.186-0.476l0.004 0.007c-0.076-0.127-0.181-0.229-0.305-0.301l-0.004-0.002c-0.122-0.067-0.267-0.107-0.422-0.107-0.007 0-0.014 0-0.021 0h0.001q-0.319 0-0.645 0.259c-0.258 0.219-0.482 0.466-0.67 0.74l-0.008 0.013v4.38c0 0.001 0 0.003 0 0.004 0 0.047-0.015 0.090-0.040 0.126l0-0.001c-0.035 0.042-0.081 0.075-0.134 0.092l-0.002 0.001c-0.075 0.027-0.161 0.047-0.251 0.055l-0.004 0c-0.122 0.012-0.263 0.019-0.406 0.019s-0.284-0.007-0.424-0.020l0.018 0.001c-0.094-0.009-0.181-0.029-0.263-0.058l0.008 0.002c-0.055-0.018-0.101-0.050-0.136-0.092l-0-0.001c-0.025-0.035-0.040-0.078-0.040-0.125 0-0.002 0-0.003 0-0.004v0-9.712c0-0.001 0-0.002 0-0.003 0-0.049 0.015-0.094 0.041-0.131l-0.001 0.001c0.035-0.045 0.081-0.079 0.134-0.099l0.002-0.001c0.074-0.029 0.161-0.051 0.251-0.062l0.005-0c0.122-0.014 0.263-0.022 0.406-0.022s0.284 0.008 0.423 0.024l-0.017-0.002c0.095 0.011 0.181 0.033 0.263 0.065l-0.007-0.002c0.055 0.020 0.102 0.055 0.136 0.099l0.001 0.001c0.025 0.037 0.040 0.082 0.040 0.131 0 0.001 0 0.002 0 0.003v-0 3.641c0.247-0.281 0.538-0.516 0.864-0.697l0.017-0.008c0.271-0.146 0.592-0.232 0.934-0.233h0q0.605 0 1.020 0.221c0.275 0.146 0.5 0.351 0.667 0.599l0.004 0.007c0.169 0.257 0.297 0.558 0.366 0.88l0.003 0.017c0.072 0.346 0.114 0.744 0.114 1.152 0 0.033-0 0.065-0.001 0.098l0-0.005z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      fill: "#8b13b2",
      d: "M23 3h-18c-1.655 0.005-2.995 1.345-3 3v18c0.005 1.655 1.345 2.995 3 3h18c1.655-0.005 2.995-1.345 3-3v-18c-0.005-1.655-1.345-2.995-3-3h-0zM22 23h-6.388v-2.532h1.594v-6.446c0-1.168-0.188-2.114-0.753-2.718s-0.988-0.844-2.050-0.844c-0.675 0.008-1.309 0.176-1.869 0.467l0.023-0.011c-0.671 0.334-1.249 0.711-1.777 1.146l0.016-0.013v8.418h1.594v2.532h-6.389v-2.532h1.562v-10.187h-1.562v-2.531h4.682v1.796h0.028c0.3-0.277 0.624-0.543 0.963-0.791l0.031-0.022c0.32-0.235 0.682-0.455 1.063-0.643l0.043-0.019c0.342-0.17 0.742-0.321 1.16-0.431l0.045-0.010c0.388-0.103 0.834-0.162 1.294-0.162 0.008 0 0.017 0 0.025 0h-0.001c0.026-0 0.056-0.001 0.087-0.001 0.726 0 1.423 0.124 2.071 0.352l-0.044-0.013c0.632 0.225 1.17 0.577 1.606 1.029l0.001 0.001q0.662 0.692 1.022 1.774t0.362 2.557v7.301h1.562z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      fill: "#3f3f3f",
      d: "M46 13h-11.171l2.586-2.586c0.362-0.362 0.586-0.862 0.586-1.414 0-1.105-0.896-2-2-2-0.552 0-1.052 0.224-1.414 0.586l-6 6c-0.362 0.362-0.586 0.862-0.586 1.414s0.224 1.052 0.586 1.414l6 6c0.362 0.362 0.862 0.586 1.414 0.586 1.105 0 2-0.896 2-2 0-0.552-0.224-1.052-0.586-1.414l-2.586-2.586h11.171z"
    }))
  },
  scratchwork: {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
      fill: "#900",
      d: "M32.916 33.392l-0.098-0.021c-0.421-0.088-1.125-0.233-1.525-0.361 0.018-0.477 0.286-0.958 0.812-1.459 0.142-0.136 0.23-0.326 0.23-0.538 0-0.41-0.332-0.743-0.742-0.743-0.048 0-0.095 0.005-0.141 0.013l0.005-0.001c-0.173 0.032-0.4 0.076-0.661 0.128-0.563 0.111-1.701 0.336-2.598 0.469 0.506-0.456 1.176-0.938 1.695-1.313 1.209-0.868 1.937-1.392 1.991-2.090 0.002-0.022 0.003-0.048 0.003-0.075 0-0.203-0.064-0.392-0.172-0.547l0.002 0.003c-0.088-0.164-0.223-0.293-0.386-0.373l-0.005-0.002c-0.681-0.33-1.766 0.088-6.112 2.348-0.71 0.369-1.349 0.702-1.809 0.923-0.209 0.101-0.427 0.212-0.651 0.331v0c0.722-0.563 1.155-0.912 1.496-1.187 0.559-0.466 1.18-0.935 1.825-1.372l0.083-0.053c0.753-0.516 1.411-0.912 2.047-1.296 1.382-0.833 2.687-1.619 4.517-3.38 0.065-0.063 0.119-0.138 0.159-0.221l0.002-0.005c0.257-0.563-0.049-0.922-0.149-1.019-0.51-0.492-1.162-0.164-2.348 0.431-0.307 0.154-0.625 0.313-0.818 0.389-0.928 0.363-4.343 1.736-5.287 2.162-0.684 0.343-3.049 1.509-4.799 2.139-0.272 0.098-0.613 0.239-0.982 0.393 0.509-0.391 0.965-0.729 1.226-0.922 1.109-0.821 1.286-0.975 1.429-1.098 0.108-0.094 0.188-0.161 1.214-0.894 1.486-1.063 3.227-2.514 3.082-3.418-0.042-0.261-0.196-0.48-0.41-0.608l-0.004-0.002c-0.64-0.516-1.793 0.062-4.562 1.655-0.233 0.134-0.449 0.258-0.636 0.362-0.281 0.158-0.636 0.366-1.026 0.593-0.344 0.201-0.822 0.481-1.313 0.759 0.112-0.103 0.229-0.209 0.354-0.319 0.151-0.133 0.339-0.285 0.538-0.445 0.415-0.334 0.844-0.681 1.148-1.012 0.046-0.050 0.135-0.125 0.239-0.222 0.706-0.637 1.131-1.063 1.082-1.596-0.024-0.271-0.175-0.501-0.391-0.636l-0.004-0.002-0.010 0.016c-0.854-0.437-3.104 0.394-4.95 1.226-0.25 0.123-0.419 0.376-0.419 0.669 0 0.41 0.333 0.743 0.743 0.743 0.103 0 0.202-0.021 0.291-0.059l-0.005 0.002c0.531-0.239 1.224-0.5 1.879-0.722-0.172 0.146-0.359 0.298-0.535 0.437-0.216 0.174-0.422 0.341-0.588 0.487-2.395 2.116-2.38 2.777-2.375 3.059 0.003 0.253 0.108 0.481 0.277 0.645l0 0c0.577 0.615 1.465 0.195 4.789-1.75 0.382-0.223 0.728-0.426 1.004-0.581 0.188-0.107 0.41-0.233 0.647-0.369 0.158-0.090 0.355-0.204 0.574-0.329-0.098 0.074-0.192 0.143-0.278 0.205-1.086 0.773-1.171 0.847-1.326 0.981-0.109 0.096-0.276 0.239-1.339 1.026-1.293 0.958-3.099 2.329-3.851 3.167-0.071 0.079-0.126 0.174-0.158 0.279l-0.001 0.005c-0.029 0.084-0.046 0.18-0.046 0.28 0 0.257 0.11 0.488 0.286 0.649l0.001 0.001c0.552 0.496 1.355 0.219 3.695-0.766 0.467-0.197 0.909-0.382 1.219-0.495 1.826-0.658 4.259-1.856 4.933-2.195 0.483-0.218 1.736-0.732 2.912-1.208l-0.394 0.238c-0.654 0.394-1.331 0.802-2.125 1.343-1.082 0.746-1.408 1.012-2 1.493-0.335 0.273-0.759 0.617-1.469 1.169l-0.509 0.393c-1.688 1.296-2.725 2.094-2.49 3.012 0.043 0.276 0.21 0.507 0.441 0.636l0.004 0.002c0.625 0.351 1.449-0.071 3.247-1.063 0.518-0.285 1.054-0.58 1.512-0.801 0.47-0.226 1.125-0.563 1.85-0.944 0.619-0.321 1.453-0.755 2.267-1.159-1.037 0.779-1.946 1.596-2.148 2.504-0.011 0.049-0.018 0.105-0.018 0.162 0 0.246 0.119 0.463 0.303 0.598l0.002 0.001c0.4 0.291 1.039 0.313 3.675-0.177-0.109 0.292-0.173 0.629-0.173 0.98 0 0.212 0.023 0.419 0.067 0.618l-0.004-0.019c0.040 0.185 0.145 0.341 0.29 0.446l0.002 0.002c0.417 0.301 1.168 0.471 2.354 0.718l0.098 0.020c0.045 0.010 0.096 0.016 0.149 0.016 0.001 0 0.002 0 0.003 0h-0c0 0 0 0 0 0 0.41 0 0.743-0.333 0.743-0.743 0-0.358-0.253-0.657-0.59-0.727l-0.005-0.001z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      fill: "#3f3f3f",
      d: "M36 9h-2v-2c0-1.105-0.895-2-2-2s-2 0.895-2 2v0 2h-4v-2c0-1.105-0.895-2-2-2s-2 0.895-2 2v0 2h-4v-2c0-1.105-0.895-2-2-2s-2 0.895-2 2v0 2h-2c-2.76 0.003-4.997 2.24-5 5v24c0.003 2.76 2.24 4.997 5 5h24c2.76-0.003 4.997-2.24 5-5v-24c-0.003-2.76-2.24-4.997-5-5h-0zM37 38c0 0.552-0.448 1-1 1v0h-24c-0.552 0-1-0.448-1-1v0-24c0-0.552 0.448-1 1-1v0h2v1c0 1.105 0.895 2 2 2s2-0.895 2-2v0-1h4v1c0 1.105 0.895 2 2 2s2-0.895 2-2v0-1h4v1c0 1.105 0.895 2 2 2s2-0.895 2-2v0-1h2c0.552 0 1 0.448 1 1v0z"
    }))
  },
  placeholder: {
    viewBox: '0 0 512 512',
    path: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
      d: "M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"
    }))
  },
  'zoom-out': {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M39.121 34.879l-8.918-8.918c1.128-1.836 1.797-4.060 1.797-6.441 0-0.007 0-0.014 0-0.021v0.001c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c0.006 0 0.013 0 0.020 0 2.38 0 4.604-0.668 6.495-1.828l-0.054 0.031 8.918 8.918c0.545 0.553 1.302 0.896 2.139 0.896 1.657 0 3-1.343 3-3 0-0.837-0.343-1.594-0.896-2.138l-0-0zM12.782 26.218c-1.719-1.719-2.782-4.094-2.782-6.718 0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5c0 5.247-4.253 9.5-9.5 9.5 0 0 0 0-0 0v0c-0.008 0-0.017 0-0.026 0-2.615 0-4.982-1.064-6.691-2.782l-0-0zM25 21h-11v-3h11z"
    })
  },
  'dropdown-arrow': {
    viewBox: '0 0 512 512',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M128 192l128 128 128-128z"
    })
  },
  'zoom-in': {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M39.121 34.879l-8.918-8.918c1.128-1.836 1.797-4.060 1.797-6.441 0-0.007 0-0.014 0-0.021v0.001c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c0.006 0 0.013 0 0.020 0 2.38 0 4.604-0.668 6.495-1.828l-0.054 0.031 8.918 8.918c0.545 0.553 1.302 0.896 2.139 0.896 1.657 0 3-1.343 3-3 0-0.837-0.343-1.594-0.896-2.138l-0-0zM12.782 26.218c-1.719-1.719-2.782-4.094-2.782-6.718 0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5c0 5.247-4.253 9.5-9.5 9.5 0 0 0 0-0 0v0c-0.008 0-0.017 0-0.026 0-2.615 0-4.982-1.064-6.691-2.782l-0-0zM25 21h-4v4h-3v-4h-4v-3h4v-4h3v4h4z"
    })
  },
  'arrow-left': {
    viewBox: '0 0 32 32',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M26 14h-15.172l5.586-5.586c0.374-0.364 0.607-0.872 0.607-1.435 0-1.105-0.895-2-2-2-0.563 0-1.071 0.232-1.434 0.606l-9 9c-0.362 0.362-0.586 0.862-0.586 1.414s0.224 1.052 0.586 1.414l9 9c0.364 0.374 0.872 0.607 1.435 0.607 1.105 0 2-0.895 2-2 0-0.563-0.232-1.071-0.606-1.434l-5.586-5.587h15.172c1.105 0 2-0.895 2-2s-0.895-2-2-2v0z"
    })
  },
  'arrow-right': {
    viewBox: '0 0 32 32',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M27.414 14.586l-9-9c-0.36-0.35-0.851-0.565-1.393-0.565-1.105 0-2 0.895-2 2 0 0.542 0.216 1.034 0.566 1.394l5.585 5.586h-15.172c-1.105 0-2 0.895-2 2s0.895 2 2 2v0h15.172l-5.586 5.586c-0.374 0.364-0.607 0.872-0.607 1.435 0 1.105 0.895 2 2 2 0.563 0 1.071-0.232 1.434-0.606l9-9c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414v0z"
    })
  },
  'chevron-down': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M20.395 5.395l-8.395 8.395-8.395-8.395-3.605 3.605 12 12 12-12-3.605-3.605z"
    })
  },
  'chevron-up': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M20.395 18.605l-8.395-8.395-8.395 8.395-3.605-3.605 12-12 12 12-3.605 3.605z"
    })
  },
  timer: {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M37.284 15.716l2.716-2.716s0-1-1.5-2.5-2.5-1.5-2.5-1.5l-2.88 2.88c-1.749-1.17-3.801-2.049-6.007-2.51l-0.113-0.020v-4.351s-1.167-1-3.5-1-3.5 1-3.5 1v4.351c-7.987 1.621-14 8.683-14 17.149 0 9.665 7.835 17.5 17.5 17.5s17.5-7.835 17.5-17.5c0-0.008 0-0.018 0-0.028 0-4.076-1.399-7.825-3.744-10.793l0.028 0.037zM33.046 36.046c-2.443 2.443-5.818 3.954-9.546 3.954-7.456 0-13.5-6.044-13.5-13.5s6.044-13.5 13.5-13.5c7.456 0 13.5 6.044 13.5 13.5v0c0 0.011 0 0.023 0 0.036 0 3.717-1.512 7.080-3.954 9.509l-0.001 0.001zM32 26.5c0 0.828-0.672 1.5-1.5 1.5v0h-7c-0.828 0-1.5-0.672-1.5-1.5v0-9c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5v0 7.5h5.5c0.828 0 1.5 0.672 1.5 1.5v0z"
    })
  },
  'change-theme': {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M35.76 25.589c0 0.004 0 0.008 0 0.012 0 0.089-0.041 0.169-0.106 0.221l-0.001 0c-0.094 0.066-0.208 0.111-0.331 0.125l-0.003 0c-0.176 0.024-0.378 0.038-0.585 0.038-0.032 0-0.063-0-0.095-0.001l0.005 0c-0.031 0.001-0.068 0.001-0.105 0.001-0.208 0-0.414-0.014-0.615-0.041l0.024 0.003c-0.118-0.013-0.223-0.058-0.309-0.126l0.001 0.001c-0.056-0.055-0.090-0.132-0.090-0.217 0-0.006 0-0.012 0.001-0.018l-0 0.001v-0.754c-0.371 0.401-0.813 0.729-1.307 0.966l-0.026 0.011c-0.473 0.222-1.027 0.351-1.611 0.351-0.018 0-0.035-0-0.053-0l0.003 0c-0.014 0-0.031 0-0.048 0-0.477 0-0.937-0.072-1.37-0.205l0.033 0.009c-0.421-0.128-0.786-0.328-1.099-0.588l0.005 0.004c-0.305-0.258-0.548-0.579-0.71-0.945l-0.007-0.017c-0.162-0.374-0.256-0.81-0.256-1.268 0-0.025 0-0.049 0.001-0.074l-0 0.004q0-0.828 0.324-1.438c0.23-0.421 0.558-0.762 0.955-1.002l0.012-0.007q0.643-0.398 1.598-0.589c0.627-0.122 1.348-0.192 2.085-0.192 0.047 0 0.094 0 0.141 0.001l-0.007-0h0.924v-0.575c0-0.014 0-0.031 0-0.048 0-0.26-0.033-0.513-0.095-0.754l0.005 0.021c-0.055-0.217-0.159-0.405-0.298-0.559l0.001 0.001c-0.148-0.153-0.334-0.267-0.544-0.327l-0.009-0.002c-0.236-0.068-0.507-0.107-0.787-0.107-0.024 0-0.047 0-0.071 0.001l0.004-0c-0.018-0-0.039-0-0.059-0-0.404 0-0.795 0.054-1.166 0.156l0.031-0.007c-0.367 0.102-0.675 0.214-0.973 0.347l0.044-0.017q-0.404 0.181-0.674 0.328t-0.441 0.149c-0.001 0-0.002 0-0.003 0-0.078 0-0.149-0.028-0.204-0.075l0 0c-0.065-0.057-0.116-0.128-0.147-0.209l-0.001-0.004c-0.041-0.098-0.072-0.213-0.089-0.332l-0.001-0.008c-0.020-0.128-0.032-0.276-0.032-0.427 0-0.007 0-0.014 0-0.020v0.001c-0.001-0.017-0.001-0.037-0.001-0.057 0-0.164 0.020-0.324 0.057-0.477l-0.003 0.014c0.039-0.135 0.109-0.252 0.202-0.345l-0 0q0.149-0.154 0.521-0.34c0.241-0.121 0.529-0.238 0.827-0.333l0.043-0.012c0.299-0.099 0.665-0.189 1.041-0.253l0.048-0.007c0.361-0.064 0.776-0.101 1.2-0.101 0.006 0 0.012 0 0.017 0h-0.001q1.115 0 1.906 0.217t1.301 0.669c0.34 0.307 0.597 0.7 0.738 1.145l0.005 0.018q0.234 0.712 0.234 1.688zM33.135 21.532h-1.018c-0.024-0-0.053-0.001-0.082-0.001-0.362 0-0.715 0.035-1.057 0.102l0.035-0.006c-0.28 0.052-0.53 0.152-0.752 0.292l0.009-0.005c-0.178 0.115-0.321 0.271-0.416 0.455l-0.003 0.007c-0.084 0.174-0.133 0.378-0.133 0.593 0 0.010 0 0.020 0 0.029l-0-0.001q0 0.595 0.375 0.938t1.046 0.34c0.004 0 0.010 0 0.015 0 0.377 0 0.73-0.107 1.029-0.292l-0.008 0.005c0.369-0.238 0.685-0.515 0.956-0.833l0.005-0.006zM14.6 21.628c-0.28 0.052-0.53 0.152-0.752 0.292l0.009-0.005c-0.178 0.114-0.321 0.27-0.416 0.453l-0.003 0.007c-0.084 0.174-0.133 0.378-0.133 0.593 0 0.010 0 0.020 0 0.029l-0-0.001q0 0.595 0.375 0.938t1.046 0.34c0.004 0 0.010 0 0.015 0 0.377 0 0.73-0.107 1.029-0.292l-0.008 0.005c0.369-0.238 0.685-0.515 0.956-0.833l0.005-0.006v-1.616h-1.019c-0.024-0-0.053-0.001-0.082-0.001-0.362 0-0.715 0.035-1.057 0.102l0.035-0.006zM43 33v-25h-38v25h16v4h-5v3h16v-3h-5v-4zM19.347 25.589c0 0.004 0 0.008 0 0.012 0 0.089-0.041 0.169-0.106 0.221l-0.001 0c-0.094 0.066-0.208 0.111-0.331 0.125l-0.003 0c-0.176 0.024-0.378 0.038-0.585 0.038-0.032 0-0.063-0-0.095-0.001l0.005 0c-0.031 0.001-0.068 0.001-0.105 0.001-0.208 0-0.414-0.014-0.615-0.041l0.024 0.003c-0.118-0.013-0.223-0.058-0.309-0.126l0.001 0.001c-0.056-0.055-0.090-0.132-0.090-0.217 0-0.006 0-0.012 0.001-0.018l-0 0.001v-0.754c-0.371 0.401-0.813 0.729-1.307 0.966l-0.026 0.011c-0.473 0.222-1.027 0.351-1.611 0.351-0.018 0-0.035-0-0.053-0l0.003 0c-0.014 0-0.031 0-0.048 0-0.477 0-0.937-0.072-1.37-0.205l0.033 0.009c-0.421-0.128-0.786-0.328-1.099-0.588l0.005 0.004c-0.305-0.258-0.548-0.579-0.71-0.945l-0.007-0.017c-0.162-0.374-0.256-0.81-0.256-1.268 0-0.025 0-0.049 0.001-0.074l-0 0.004q0-0.828 0.324-1.438c0.23-0.421 0.558-0.762 0.955-1.002l0.012-0.007q0.643-0.398 1.598-0.589c0.627-0.122 1.348-0.192 2.085-0.192 0.047 0 0.094 0 0.141 0.001l-0.007-0h0.924v-0.575c0-0.015 0-0.033 0-0.051 0-0.259-0.033-0.511-0.094-0.752l0.005 0.021c-0.055-0.217-0.159-0.405-0.298-0.559l0.001 0.001c-0.148-0.153-0.334-0.267-0.544-0.327l-0.009-0.002c-0.236-0.068-0.507-0.107-0.787-0.107-0.024 0-0.047 0-0.071 0.001l0.004-0c-0.018-0-0.039-0-0.059-0-0.404 0-0.795 0.054-1.166 0.156l0.031-0.007c-0.367 0.102-0.675 0.214-0.973 0.347l0.044-0.017q-0.404 0.181-0.674 0.329t-0.443 0.149c-0.001 0-0.002 0-0.003 0-0.078 0-0.149-0.028-0.204-0.075l0 0c-0.065-0.057-0.116-0.128-0.147-0.209l-0.001-0.004c-0.041-0.098-0.072-0.213-0.089-0.332l-0.001-0.008c-0.020-0.128-0.032-0.276-0.032-0.427 0-0.007 0-0.014 0-0.020v0.001c-0.001-0.017-0.001-0.037-0.001-0.057 0-0.164 0.020-0.324 0.057-0.477l-0.003 0.014c0.039-0.135 0.109-0.252 0.202-0.345l-0 0q0.149-0.154 0.521-0.34c0.241-0.121 0.529-0.238 0.827-0.333l0.043-0.012c0.299-0.099 0.665-0.189 1.041-0.253l0.048-0.007c0.361-0.064 0.776-0.101 1.2-0.101 0.006 0 0.012 0 0.017 0h-0.001q1.115 0 1.906 0.217t1.301 0.669c0.34 0.307 0.597 0.7 0.738 1.145l0.005 0.018q0.234 0.712 0.234 1.688zM24 30v-19h16v19z"
    })
  },
  'question-circle': {
    viewBox: '0 0 48 48',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M24 6c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18zM26.737 35.312c0 0 0 0 0 0.001 0 0.331-0.268 0.599-0.599 0.599-0 0-0 0-0.001 0h-4.071c-0.331 0-0.6-0.269-0.6-0.6v0-3.931c0-0.331 0.269-0.6 0.6-0.6v0h4.071c0 0 0 0 0.001 0 0.331 0 0.599 0.268 0.599 0.599 0 0 0 0 0 0.001v-0zM30.508 21.833c-0.381 0.544-1.069 1.2-2.104 2.006l-0.962 0.75c-0.432 0.336-0.707 0.707-0.843 1.138-0.062 0.193-0.137 0.598-0.148 1.432-0.005 0.328-0.271 0.592-0.6 0.592 0 0-0 0-0 0h-3.688c-0.332-0-0.6-0.269-0.6-0.601 0-0.007 0-0.014 0-0.022l-0 0.001c0.057-1.618 0.214-2.723 0.478-3.382 0.278-0.691 0.934-1.433 2.003-2.269l1-0.784c0.257-0.189 0.475-0.411 0.653-0.663l0.006-0.009c0.268-0.355 0.429-0.804 0.429-1.291 0-0.002 0-0.003 0-0.005v0c0-0.006 0-0.014 0-0.022 0-0.57-0.186-1.097-0.499-1.523l0.005 0.007c-0.281-0.397-0.859-0.598-1.716-0.598-0.836 0-1.401 0.25-1.726 0.766-0.381 0.607-0.563 1.214-0.563 1.859 0 0.331-0.269 0.6-0.6 0.6v0h-3.933c-0.331-0-0.6-0.269-0.6-0.6 0-0.009 0-0.018 0.001-0.026l-0 0.001c0.116-2.78 1.121-4.791 2.983-5.977 1.164-0.75 2.602-1.129 4.271-1.129 2.167 0 4.004 0.533 5.461 1.582 1.516 1.094 2.284 2.723 2.284 4.841-0.001 1.304-0.337 2.429-0.994 3.327z"
    })
  },
  'chevron-circle-down': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M12 0c-6.625 0-12 5.375-12 12s5.375 12 12 12 12-5.375 12-12-5.375-12-12-12zM19.797 11.203l-7.094 7.094c-0.179 0.181-0.428 0.293-0.703 0.293s-0.524-0.112-0.703-0.293l-7.094-7.094c-0.181-0.179-0.293-0.428-0.293-0.703s0.112-0.524 0.293-0.703l1.594-1.594c0.179-0.181 0.428-0.293 0.703-0.293s0.524 0.112 0.703 0.293l4.797 4.797 4.797-4.797c0.179-0.181 0.428-0.293 0.703-0.293s0.524 0.112 0.703 0.293l1.594 1.594c0.181 0.179 0.293 0.428 0.293 0.703s-0.112 0.524-0.293 0.703l-0 0z"
    })
  },
  'checkbox-selected': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M19 0h-14c-2.758 0.009-4.992 2.242-5 4.999v14.001c0.009 2.758 2.242 4.992 4.999 5h14.001c2.758-0.009 4.992-2.242 5-4.999v-14.001c-0.009-2.758-2.242-4.992-4.999-5h-0.001zM20.292 8.708l-9.584 9.584c-0.181 0.182-0.432 0.294-0.708 0.294s-0.527-0.112-0.708-0.294l-5.583-5.584c-0.182-0.181-0.294-0.432-0.294-0.708s0.112-0.527 0.294-0.708l1.583-1.583c0.181-0.182 0.432-0.294 0.708-0.294s0.527 0.112 0.708 0.294l3.292 3.292 7.292-7.292c0.181-0.182 0.432-0.294 0.708-0.294s0.527 0.112 0.708 0.294l1.583 1.583c0.182 0.181 0.294 0.432 0.294 0.708s-0.112 0.527-0.294 0.708l-0 0z"
    })
  },
  'checkbox-unselected': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M19 2c1.653 0.008 2.992 1.347 3 2.999v14.001c-0.008 1.653-1.347 2.992-2.999 3h-14.001c-1.653-0.008-2.992-1.347-3-2.999v-14.001c0.008-1.653 1.347-2.992 2.999-3h14.001zM19 0h-14c-2.758 0.009-4.992 2.242-5 4.999v14.001c0.009 2.758 2.242 4.992 4.999 5h14.001c2.758-0.009 4.992-2.242 5-4.999v-14.001c-0.009-2.758-2.242-4.992-4.999-5h-0.001z"
    })
  },
  'radio-selected': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.418 0-8-3.582-8-8 0-2.209 0.895-4.209 2.343-5.657v0c1.44-1.447 3.433-2.343 5.635-2.343 0.008 0 0.015 0 0.023 0h-0.001zM12 0c-6.625 0-12 5.375-12 12s5.375 12 12 12 12-5.375 12-12-5.375-12-12-12zM12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0c0-2.209-1.791-4-4-4v0z"
    })
  },
  'radio-unselected': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement("path", {
      d: "M12 2c0 0 0 0 0 0 5.523 0 10 4.477 10 10 0 2.762-1.119 5.262-2.929 7.071v0c-1.81 1.81-4.31 2.929-7.071 2.929-5.523 0-10-4.477-10-10 0-2.761 1.119-5.262 2.929-7.071v0c1.8-1.809 4.292-2.929 7.045-2.929 0.009 0 0.018 0 0.028 0h-0.001zM12 0c-6.625 0-12 5.375-12 12s5.375 12 12 12 12-5.375 12-12-5.375-12-12-12z"
    })
  },
  'eliminate-unselected': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
      d: "M12 2C17.523 2 22 6.477 22 12C22 14.762 20.881 17.262 19.071 19.071C17.261 20.881 14.761 22 12 22C6.477 22 2 17.523 2 12C2 9.239 3.119 6.738 4.929 4.929C6.729 3.12 9.221 2 11.974 2C11.983 2 11.992 2 12.002 2H12.001H12ZM12 0C5.375 0 0 5.375 0 12C0 18.625 5.375 24 12 24C18.625 24 24 18.625 24 12C24 5.375 18.625 0 12 0Z"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "6",
      y: "11",
      width: "12",
      height: "2"
    }))
  },
  'eliminate-selected': {
    viewBox: '0 0 24 24',
    path: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
      d: "M12 2C17.523 2 22 6.477 22 12C22 14.762 20.881 17.262 19.071 19.071C17.261 20.881 14.761 22 12 22C6.477 22 2 17.523 2 12C2 9.239 3.119 6.738 4.929 4.929C6.729 3.12 9.221 2 11.974 2C11.983 2 11.992 2 12.002 2H12.001H12ZM12 0C5.375 0 0 5.375 0 12C0 18.625 5.375 24 12 24C18.625 24 24 18.625 24 12C24 5.375 18.625 0 12 0Z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M6 11H18V13H6V11Z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M13 6V18H11V6H13Z"
    }))
  }
};
var _default = icons;
exports.default = _default;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Column = _interopRequireDefault(__webpack_require__(332));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Column.default;
exports.default = _default;

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Columns({
  children,
  id
}) {
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    id: id
  }, children);
}

Columns.propTypes = {
  id: _propTypes.default.string
};
var _default = Columns;
exports.default = _default;

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Dropdown = _interopRequireDefault(__webpack_require__(334));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Dropdown.default;
exports.default = _default;

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Heading = _interopRequireDefault(__webpack_require__(335));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Heading.default;
exports.default = _default;

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Image.default;
  }
});

var _Image = _interopRequireDefault(__webpack_require__(336));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _MultipleSelect.default;
  }
});
Object.defineProperty(exports, "MultipleSelectChoice", {
  enumerable: true,
  get: function () {
    return _MultipleSelect.MultipleSelectChoice;
  }
});

var _MultipleSelect = _interopRequireWildcard(__webpack_require__(337));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _autoId = __webpack_require__(144);

var _Button = _interopRequireDefault(__webpack_require__(26));

var _RadioButton = _interopRequireDefault(__webpack_require__(208));

var _Checkbox = _interopRequireDefault(__webpack_require__(207));

var _Icon = _interopRequireDefault(__webpack_require__(48));

var _VisuallyHidden = _interopRequireDefault(__webpack_require__(729));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Choice({
  children,
  isSelected = false,
  isEliminated = false,
  isDisabled = false,
  variant = 'radio',
  label,
  value,
  onEliminate,
  onChange,
  ...props
}) {
  if (typeof children === 'string' && !label) {
    label = children;
  }

  const optionId = `option-${(0, _autoId.useId)()}`;

  function handleEliminate(event, value) {
    onEliminate(value); // prevent onChange event from firing on the
    // parent container component

    event.stopPropagation();
  }

  function handleClick(event, value) {
    if (!isDisabled) {
      onChange(value);
      event.stopPropagation();
    }
  }

  const InputControl = variant === 'radio' ? _RadioButton.default : _Checkbox.default;
  return /*#__PURE__*/_react.default.createElement(_Base.Flex, _extends({}, props, {
    "data-testid": "option-element",
    border: "2",
    borderRadius: "lg",
    borderColor: "n.300",
    disabled: isEliminated,
    onClick: e => handleClick(e, value),
    sx: {
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'opacity .2s, border .2s, color .2s',
      ':hover': {
        borderColor: isEliminated || isDisabled ? null : 'p.400'
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    flexGrow: "1",
    opacity: isEliminated ? '50%' : '100%'
  }, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    bg: "secondary",
    px: "3",
    py: "3",
    flexShrink: "0",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(InputControl, {
    checked: isSelected,
    disabled: isDisabled,
    size: "24px",
    label: label,
    "aria-labelledby": optionId
  })), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    px: "3",
    py: "3",
    flexGrow: "1",
    alignItems: "center",
    sx: {
      opacity: isDisabled ? '.5' : null
    }
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    id: optionId,
    fontSize: 3
  }, children))), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    px: "3",
    py: "3",
    flexShrink: "0",
    alignContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "bare",
    onClick: e => handleEliminate(e, value),
    disabled: isDisabled,
    color: "n.600",
    sx: {
      transition: 'color .2s',
      ':hover': {
        color: 'n.800'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_VisuallyHidden.default, null, isEliminated ? 'Enable' : 'Eliminate', " Option"), isEliminated ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "eliminate-selected",
    size: "24px"
  }) : /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "eliminate-unselected",
    size: "24px"
  }))));
}

var _default = Choice;
exports.default = _default;

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _VisuallyHidden = _interopRequireDefault(__webpack_require__(730));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _VisuallyHidden.default;
exports.default = _default;

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const VisuallyHidden = props => /*#__PURE__*/_react.default.createElement("span", _extends({
  style: {
    // https://accessible360.com/accessible360-blog/use-aria-label-screen-reader-text/
    position: 'absolute',
    height: '1px',
    width: '1px',
    clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
    overflow: 'hidden !important',
    // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
    whiteSpace: 'nowrap'
  }
}, props));

var _default = VisuallyHidden;
exports.default = _default;

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Modal = _interopRequireDefault(__webpack_require__(341));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Modal.default;
exports.default = _default;

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _SingleSelect.default;
  }
});
Object.defineProperty(exports, "SingleSelectChoice", {
  enumerable: true,
  get: function () {
    return _SingleSelect.SingleSelectChoice;
  }
});
Object.defineProperty(exports, "SingleSelectClear", {
  enumerable: true,
  get: function () {
    return _SingleSelect.SingleSelectClear;
  }
});

var _SingleSelect = _interopRequireWildcard(__webpack_require__(344));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;
exports.initialState = void 0;
const initialState = {
  selected: null,
  eliminated: []
};
exports.initialState = initialState;

function reducer(state, action = {}) {
  switch (action.type) {
    case 'MCSS_SELECT':
      return {
        selected: action.optionId,
        eliminated: state.eliminated.filter(i => i !== action.optionId)
      };

    case 'MCSS_ELIMINATE':
      let eliminated = state.eliminated.includes(action.optionId) ? state.eliminated.filter(i => i !== action.optionId) : [...state.eliminated, action.optionId];
      let selected = action.optionId === state.selected ? null : state.selected;
      return {
        selected,
        eliminated
      };

    case 'MCSS_CLEAR':
      return initialState;

    default:
      throw new Error();
  }
}

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Slider = _interopRequireDefault(__webpack_require__(345));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Slider.default;
exports.default = _default;

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Switch = _interopRequireDefault(__webpack_require__(346));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Switch.default;
exports.default = _default;

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = __webpack_require__(349);

Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tabs[key];
    }
  });
});

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;
exports.initialState = void 0;
const initialState = {
  activeTab: 0
};
exports.initialState = initialState;

function reducer(state, action = {}) {
  switch (action.type) {
    case 'SELECT_TAB':
      return {
        activeTab: action.tabIndex
      };

    default:
      throw new Error();
  }
}

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  tab: {
    // A border must be applied to the left and right as
    // both sides will be visible when the tab is selected.
    // We then apply a negative margin hack to prevent the
    // doubling up of borders between tabs.
    border: '2',
    borderColor: 'n.400',
    borderBottom: '0',
    ml: '-2px',
    // Add a margin to the top for non-selected tabs.
    // Selected tabs have no margin.
    mt: '2',
    px: '3',
    py: '2',
    bg: 'n.25',
    ':focus': {
      outline: '1px dotted',
      outlineColor: 'black',
      outlineOffset: '-5px'
    },
    ':hover': {
      cursor: 'pointer',
      bg: 'white'
    },
    ':last-of-type': {
      borderTopRightRadius: 'lg'
    },
    ':first-of-type': {
      borderTopLeftRadius: 'lg'
    },
    '&[aria-selected=true]': {
      borderTopLeftRadius: 'lg',
      borderTopRightRadius: 'lg',
      bg: 'white',
      mt: 0,
      pt: 2,
      mb: '-1px',
      zIndex: '2'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TTS = _interopRequireDefault(__webpack_require__(350));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _TTS.default;
exports.default = _default;

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tag = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _Tag.default;
exports.default = _default;

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TextInput = _interopRequireDefault(__webpack_require__(351));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = _TextInput.default;
exports.default = _default;

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;
exports.initialState = void 0;
const initialState = {
  value: ''
};
exports.initialState = initialState;

function reducer(state, action = {}) {
  switch (action.type) {
    case 'TEXTINPUT_UPDATE':
      return {
        value: action.value
      };

    case 'TEXTINPUT_CLEAR':
      return initialState;

    default:
      throw new Error();
  }
}

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Zones.default;
  }
});
Object.defineProperty(exports, "Zone", {
  enumerable: true,
  get: function () {
    return _Zones.Zone;
  }
});
Object.defineProperty(exports, "ZonesBackground", {
  enumerable: true,
  get: function () {
    return _Zones.ZonesBackground;
  }
});

var _Zones = _interopRequireWildcard(__webpack_require__(354));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var _react=__webpack_require__(263);module._StorybookPreserveDecorators=!0;(0,_react.configure)([__webpack_require__(745)],module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76)(module)))

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/Alert/Alert.stories.js": 355,
	"./components/Base/Text.stories.js": 746,
	"./components/Button/Button.stories.js": 747,
	"./components/Checkbox/Checkbox.stories.js": 748,
	"./components/Column/Column.stories.js": 749,
	"./components/Dropdown/Dropdown.stories.js": 750,
	"./components/Grid/Grid.stories.js": 751,
	"./components/Heading/Heading.stories.js": 753,
	"./components/Image/Image.stories.js": 754,
	"./components/Modal/Modal.stories.js": 755,
	"./components/MultipleSelect/MultipleSelect.stories.js": 756,
	"./components/Paragraph/Paragraph.stories.js": 757,
	"./components/QuestionsButton/QuestionsButton.stories.js": 758,
	"./components/RadioButton/RadioButton.stories.js": 760,
	"./components/SingleSelect/SingleSelect.stories.js": 761,
	"./components/Slider/Slider.stories.js": 762,
	"./components/Stack/Stack.stories.js": 763,
	"./components/Switch/Switch.stories.js": 764,
	"./components/TTS/TTS.stories.js": 765,
	"./components/Tabs/Tabs.stories.js": 775,
	"./components/Tag/Tag.stories.js": 776,
	"./components/TextInput/TextInput.stories.js": 777,
	"./components/Toolbar/Toolbar.stories.js": 791,
	"./components/Zones/Zones.stories.js": 792,
	"./components/stories/AllButtons.stories.js": 794,
	"./components/stories/Colors.stories.js": 797
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 745;

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Base = __webpack_require__(326);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Typography/Text',
  component: _Base.Text
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 1
  }, "Size 1"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 2
  }, "Size 2"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 3
  }, "Size 3"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 4
  }, "Size 4"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 5
  }, "Size 5"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 6
  }, "Size 6"), /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontSize: 7
  }, "Size 7"));
}

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _ScrollButton = _interopRequireDefault(__webpack_require__(347));

var _ToolbarButtons = __webpack_require__(92);

var _ToolbarGroup = _interopRequireDefault(__webpack_require__(210));

var _ToolbarScratchButton = _interopRequireDefault(__webpack_require__(211));

var _ToolbarTimerButton = _interopRequireDefault(__webpack_require__(212));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Button',
  component: _Button.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 3,
    p: "3"
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: "2",
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: true
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    disabled: true
  }, "Secondary")), /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Clear Answer"))), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, null)), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, {
    direction: "up"
  })), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, {
    direction: "up",
    disabled: true
  }))), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.PrevButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.PrevButton, {
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.NextButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.NextButton, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    bg: "n.100"
  }, /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null)), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null)), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null))), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: false
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: true
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: false,
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: true,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarScratchButton.default, {
    isScratchActive: false
  }), /*#__PURE__*/_react.default.createElement(_ToolbarScratchButton.default, {
    title: "Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions.",
    isScratchActive: true
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "pencil-btn",
    title: "Pencil. Turns on write mode. This lets you write on the screen.",
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "highlighter-btn",
    title: "Highlighter. Turns on highlight mode. This lets you highlight parts of the screen.",
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "eraser-btn",
    title: "Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights.",
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    id: "clear-scratch-btn",
    title: "Clear Scratchwork. Clears all scratchwork on the screen.",
    size: "sm"
  }))), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarTimerButton.default, {
    isTimerActive: false
  }), /*#__PURE__*/_react.default.createElement(_ToolbarTimerButton.default, {
    isTimerActive: true
  })));
}

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _hooks = __webpack_require__(70);

var _Checkbox = _interopRequireDefault(__webpack_require__(329));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Checkbox',
  component: _Checkbox.default
};
exports.default = _default;

function Basic() {
  const [selected, setSelected] = (0, _hooks.useArrayToggle)(['b']);
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "group"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    value: "a",
    name: "radio",
    checked: selected.includes('a'),
    onChange: value => setSelected(value)
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    value: "b",
    name: "radio",
    checked: selected.includes('b'),
    onChange: value => setSelected(value)
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    disabled: true,
    value: "c",
    name: "radio",
    checked: selected.includes('c'),
    onChange: value => setSelected(value)
  }, "Disabled"));
}

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Columns = _interopRequireDefault(__webpack_require__(333));

var _Column = _interopRequireDefault(__webpack_require__(332));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Layout/Column',
  column: _Column.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, null, "Column A"), /*#__PURE__*/_react.default.createElement(_Column.default, null, "Column B"));
}

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Base = __webpack_require__(2);

var _Dropdown = _interopRequireDefault(__webpack_require__(334));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Item Types/Dropdown',
  component: _Dropdown.default
};
exports.default = _default;

function Basic() {
  const [selected, setSelected] = (0, _react.useState)();
  const [open, setOpen] = (0, _react.useState)(true);

  function handleClick() {
    setOpen(!open);
  }

  function handleClickOutside() {
    setOpen(false);
  }

  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: "3"
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    isOpen: open,
    selected: selected,
    onSelect: setSelected,
    onClick: handleClick,
    onClickOutside: handleClickOutside
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, {
    value: "a"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "One Fish")), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    value: "b"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    sx: {
      textDecoration: 'underline'
    }
  }, "Two"), /*#__PURE__*/_react.default.createElement(_Base.Text, null, " Fish")), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    value: "c"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "bold"
  }, "Little Red"), /*#__PURE__*/_react.default.createElement(_Base.Text, null, " Fish")), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    value: "d"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontStyle: "italic"
  }, "Blue"), /*#__PURE__*/_react.default.createElement(_Base.Text, null, " Fish"))));
}

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboxes = Checkboxes;
exports.Radios = Radios;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _examples = __webpack_require__(752);

var _Grid = _interopRequireDefault(__webpack_require__(356));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Item Types/Grid',
  component: _Grid.default
};
exports.default = _default;

function Checkboxes() {
  return /*#__PURE__*/_react.default.createElement(_examples.GridCheckboxes, null);
}

function Radios() {
  return /*#__PURE__*/_react.default.createElement(_examples.GridRadioButtons, null);
}

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridCheckboxes = GridCheckboxes;
exports.GridRadioButtons = GridRadioButtons;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Grid = _interopRequireDefault(__webpack_require__(356));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function GridCheckboxes() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Text")), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Text")))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Lorem ipsum dolor sit amet.")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Checkbox, {
    inputId: "1A"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Checkbox, {
    inputId: "1B"
  }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Consectetur adipiscing elit.")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Checkbox, {
    inputId: "2A"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Checkbox, {
    inputId: "2B"
  }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Aenean commodo ligula eget dolor.")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Checkbox, {
    inputId: "3A"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Checkbox, {
    inputId: "3B"
  }))))), /*#__PURE__*/_react.default.createElement(_Grid.default.ClearButton, null, "Clear Answer")));
}

function GridRadioButtons() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Text")), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Text")))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Lorem ipsum dolor sit amet.")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Radio, {
    inputId: "A1",
    inputGroup: "A"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Radio, {
    inputId: "A2",
    inputGroup: "A"
  }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Consectetur adipiscing elit.")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Radio, {
    inputId: "B1",
    inputGroup: "B"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Radio, {
    inputId: "B2",
    inputGroup: "B"
  }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Base.Text, null, "Aenean commodo ligula eget dolor.")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Radio, {
    inputId: "C1",
    inputGroup: "C"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Grid.default.Radio, {
    inputId: "C2",
    inputGroup: "C"
  }))))), /*#__PURE__*/_react.default.createElement(_Grid.default.ClearButton, null, "Clear Answer")));
}

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Heading = _interopRequireDefault(__webpack_require__(335));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Typography/Heading',
  component: _Heading.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Heading.default, null, "Heading 1"), /*#__PURE__*/_react.default.createElement(_Heading.default, {
    level: 2
  }, "Heading 2"), /*#__PURE__*/_react.default.createElement(_Heading.default, {
    level: 3
  }, "Heading 3"), /*#__PURE__*/_react.default.createElement(_Heading.default, {
    level: 4
  }, "Heading 4"), /*#__PURE__*/_react.default.createElement(_Heading.default, {
    level: 5
  }, "Heading 5"), /*#__PURE__*/_react.default.createElement(_Heading.default, {
    level: 6
  }, "Heading 6"));
}

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Image = _interopRequireDefault(__webpack_require__(336));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Image',
  component: _Image.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_Image.default, {
    width: "300",
    height: "200"
  });
}

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Modal = _interopRequireDefault(__webpack_require__(341));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Elements/Modal',
  component: _Modal.default
};
exports.default = _default;

function Basic() {
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    isOpen: open,
    onClickBg: () => setOpen(false)
  }, "Click outside to close"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => setOpen(true)
  }, "Open Modal"));
}

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.Disabled = Disabled;
exports.OptionDisabled = OptionDisabled;
exports.LongLabels = LongLabels;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _hooks = __webpack_require__(70);

var _Base = __webpack_require__(2);

var _MultipleSelect = _interopRequireWildcard(__webpack_require__(337));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Item Types/MultiSelect',
  component: _MultipleSelect.default
};
exports.default = _default;

function Basic() {
  const [selected, toggleSelected, resetSelected] = (0, _hooks.useArrayToggle)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected.includes(value)) {
      toggleSelected(value);
    }
  }

  function handleChange(value) {
    toggleSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_MultipleSelect.default, {
    onClear: () => resetSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated,
    maxChoices: 2
  }, /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "a"
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "b"
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "c"
  }, "Option C"));
}

function Disabled() {
  const [selected, toggleSelected, resetSelected] = (0, _hooks.useArrayToggle)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected.includes(value)) {
      toggleSelected(value);
    }
  }

  function handleChange(value) {
    toggleSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_MultipleSelect.default, {
    onClear: () => resetSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated,
    isDisabled: true,
    maxChoices: 2
  }, /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "a"
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "b"
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "c"
  }, "Option C"));
}

function OptionDisabled() {
  const [selected, toggleSelected, resetSelected] = (0, _hooks.useArrayToggle)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected.includes(value)) {
      toggleSelected(value);
    }
  }

  function handleChange(value) {
    toggleSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_MultipleSelect.default, {
    onClear: () => resetSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated,
    maxChoices: 2
  }, /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "a",
    isDisabled: true
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "b"
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "c"
  }, "Option C"));
}

function LongLabels() {
  const [selected, toggleSelected, resetSelected] = (0, _hooks.useArrayToggle)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected.includes(value)) {
      toggleSelected(value);
    }
  }

  function handleChange(value) {
    toggleSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    width: "400px"
  }, /*#__PURE__*/_react.default.createElement(_MultipleSelect.default, {
    onClear: () => resetSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated,
    maxChoices: 2
  }, /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "a"
  }, "This is a really long label to test how well the text wraps"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "b"
  }, "It is in a really small container"), /*#__PURE__*/_react.default.createElement(_MultipleSelect.MultipleSelectChoice, {
    value: "c"
  }, "Small option")));
}

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Paragraph = _interopRequireDefault(__webpack_require__(343));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Typography/Paragraph',
  component: Text
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Paragraph.default, null, "This is a sample paragraph. The main difference between this and the text component is that it will display as a block whereas the Text component will display inline."), /*#__PURE__*/_react.default.createElement(_Paragraph.default, null, "Here is a second paragraph."));
}

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _hooks = __webpack_require__(70);

var _QuestionsButton = _interopRequireDefault(__webpack_require__(759));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'SBT/QuestionsButton',
  component: _QuestionsButton.default
};
exports.default = _default;

function Basic() {
  const [open, setOpen] = (0, _hooks.useToggle)(false);
  return /*#__PURE__*/_react.default.createElement(_QuestionsButton.default, {
    isOpen: open,
    onClick: setOpen
  });
}

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(22));

var _Base = __webpack_require__(2);

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Icon = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function QuestionsButton({
  isOpen = false,
  onClick
}) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    p: "2",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    sx: {
      transform: isOpen ? 'rotate(180deg)' : null,
      transition: 'transform .5s ease,-webkit-transform .5s ease'
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    size: "2em",
    name: "chevron-circle-down"
  })), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    flexDirection: "column",
    alignItems: "flex-start",
    pl: "2"
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, {
    fontWeight: "light",
    textAlign: "left",
    lineHeight: "1",
    letterSpacing: "1px"
  }, isOpen ? 'Hide' : 'Show', " ", /*#__PURE__*/_react.default.createElement("br", null), "Questions")));
}

QuestionsButton.propTypes = {
  isOpen: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = QuestionsButton;
exports.default = _default;

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _RadioButton = _interopRequireDefault(__webpack_require__(339));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Elements/Radio',
  component: _RadioButton.default
};
exports.default = _default;

function Basic() {
  const [selected, setSelected] = (0, _react.useState)('a');
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "radiogroup"
  }, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    value: "a",
    name: "radio",
    checked: selected === 'a',
    onChange: setSelected
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    value: "b",
    name: "radio",
    checked: selected === 'b',
    onChange: setSelected
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    disabled: true,
    value: "c",
    name: "radio",
    checked: selected === 'c',
    onChange: setSelected
  }, "Disabled"));
}

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.OptionDisabled = OptionDisabled;
exports.Disabled = Disabled;
exports.LongLabels = LongLabels;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _hooks = __webpack_require__(70);

var _Base = __webpack_require__(2);

var _SingleSelect = _interopRequireWildcard(__webpack_require__(344));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Item Types/SingleSelect',
  component: _SingleSelect.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_SingleSelect.default, null, /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "a"
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "b"
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "c"
  }, "Option C"));
}

function OptionDisabled() {
  const [selected, setSelected] = (0, _react.useState)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_SingleSelect.default, {
    onClear: () => setSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated
  }, /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "a"
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "b",
    isDisabled: true
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "c"
  }, "Option C"));
}

function Disabled() {
  const [selected, setSelected] = (0, _react.useState)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_SingleSelect.default, {
    onClear: () => setSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated,
    isDisabled: true
  }, /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "a"
  }, "Option A"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "b"
  }, "Option B"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "c"
  }, "Option C"));
}

function LongLabels() {
  const [selected, setSelected] = (0, _react.useState)();
  const [eliminated, toggleEliminated] = (0, _hooks.useArrayToggle)();

  function handleEliminate(value) {
    toggleEliminated(value);

    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);

    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    width: "400px"
  }, /*#__PURE__*/_react.default.createElement(_SingleSelect.default, {
    onClear: () => setSelected(),
    onEliminate: option => handleEliminate(option),
    onChange: option => handleChange(option),
    selected: selected,
    eliminated: eliminated
  }, /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "a"
  }, "This is a really long label to test how well the text wraps"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "b"
  }, "It is in a really small container"), /*#__PURE__*/_react.default.createElement(_SingleSelect.SingleSelectChoice, {
    value: "c"
  }, "Small option")));
}

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Slider = _interopRequireDefault(__webpack_require__(345));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Slider',
  component: _Slider.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_Slider.default, {
    min: "1",
    max: "1000"
  });
}

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(340));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Layout/Stack',
  component: _Stack.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: "2",
    border: "1",
    borderColor: "n.500"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, {
    bg: "blue.100",
    p: "2"
  }, "Column"), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    bg: "green.100",
    p: "2"
  }, "Column"), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    bg: "orange.100",
    p: "2"
  }, "Column")), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    mt: "3",
    direction: "row",
    border: "1",
    borderColor: "n.500"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, {
    bg: "blue.100",
    p: "2"
  }, "Row"), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    bg: "green.100",
    p: "2"
  }, "Row"), /*#__PURE__*/_react.default.createElement(_Base.Box, {
    bg: "orange.100",
    p: "2"
  }, "Row")));
}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _hooks = __webpack_require__(70);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Switch = _interopRequireDefault(__webpack_require__(346));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Switch',
  component: _Switch.default
};
exports.default = _default;

function Basic() {
  const [checked, setChecked] = (0, _hooks.useToggle)();
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: "4"
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Switch.default, {
    checked: true
  }), /*#__PURE__*/_react.default.createElement(_Switch.default, {
    checked: false
  }), /*#__PURE__*/_react.default.createElement(_Switch.default, {
    checked: false,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Switch.default, {
    checked: checked,
    onClick: setChecked
  })));
}

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _addonKnobs = __webpack_require__(357);

var _Base = __webpack_require__(2);

var _TTS = _interopRequireDefault(__webpack_require__(350));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Lab/TTS',
  component: _TTS.default
};
exports.default = _default;

function Basic() {
  const txt = (0, _addonKnobs.text)('Text', 'Hello World');
  const active = (0, _addonKnobs.boolean)('Active', true);
  let voices = {
    default: null
  };
  window.speechSynthesis.getVoices().forEach(v => {
    voices[`${v.voiceURI} (${v.lang})`] = v.voiceURI;
  });
  const voice = (0, _addonKnobs.select)('Voice', voices);
  return /*#__PURE__*/_react.default.createElement(_TTS.default, {
    active: active,
    voice: voice
  }, /*#__PURE__*/_react.default.createElement(_Base.Text, null, txt));
}

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.LocalState = LocalState;
exports.DisabledTab = DisabledTab;
exports.TabAlignment = TabAlignment;
exports.TabActioned = TabActioned;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Paragraph = _interopRequireDefault(__webpack_require__(342));

var _Tabs = __webpack_require__(349);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Elements/Tabs',
  component: _Tabs.Tabs
};
exports.default = _default;

function Basic() {
  let [selectedTab, setSelectedTab] = (0, _react.useState)(0);
  return /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    selectedTab: selectedTab,
    setSelectedTab: tabIndex => setSelectedTab(tabIndex),
    label: "questions"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.TabList, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "1"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "2"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "3"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "Review")), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, /*#__PURE__*/_react.default.createElement(_Paragraph.default, null, "Arrow keys to navigate tabs. Tab key to focus below."), /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Example Button"))), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Two Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Three Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Review Content")));
}

function LocalState() {
  return /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    label: "questions"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.TabList, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "1"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "2"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "3"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "Review")), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "One Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Two Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Three Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Review Content")));
}

function DisabledTab() {
  return /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    label: "questions"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.TabList, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "1"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    isDisabled: true
  }, "2"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "3"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "Review")), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "One Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Two Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Three Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Review Content")));
}

function TabAlignment() {
  let alignments = ['left', 'center', 'right'];
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    flexDirection: "column",
    width: "400px"
  }, alignments.map(alignment => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Base.Text, {
      p: "1",
      fontSize: "1"
    }, alignment), /*#__PURE__*/_react.default.createElement(_Base.Box, {
      p: "3",
      width: "100%",
      key: alignment,
      border: "1",
      borderColor: "n.100"
    }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
      label: "questions",
      align: alignment
    }, /*#__PURE__*/_react.default.createElement(_Tabs.TabList, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "1"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "2"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "3"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "Review")), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "One Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Two Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Three Content"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Review Content"), ">"))));
  }));
}

function TabActioned() {
  return /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    label: "questions"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.TabList, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    isActioned: true
  }, "1"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "2"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    isActioned: true
  }, "3"), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, null, "Review")), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Answered Item"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Unanswered Item"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Answered Item"), /*#__PURE__*/_react.default.createElement(_Tabs.TabPanel, null, "Review Content")));
}

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _examples = __webpack_require__(358);

var _Tag = _interopRequireDefault(__webpack_require__(209));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Elements/Tag',
  component: _Tag.default
};
exports.default = _default;

function Basic() {
  return /*#__PURE__*/_react.default.createElement(_examples.AllTags, null);
}

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _addonKnobs = __webpack_require__(357);

var _addonActions = __webpack_require__(778);

var _Base = __webpack_require__(2);

var _TextInput = _interopRequireDefault(__webpack_require__(351));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Item Types/TextInput',
  component: _TextInput.default
};
exports.default = _default;

function Basic() {
  let [value, setValue] = (0, _react.useState)('');
  const maxLength = (0, _addonKnobs.number)('Maximum Length', 3000);
  const rows = (0, _addonKnobs.number)('Rows', 5);
  const label = (0, _addonKnobs.text)('Label', 'Item response text input');
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    width: "500px"
  }, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    label: label,
    rows: rows,
    maxLength: maxLength,
    value: value,
    onChange: setValue,
    onMaxLength: (0, _addonActions.action)('onMaxLength')
  }));
}

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = Basic;
exports.Buttons = Buttons;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _hooks = __webpack_require__(70);

var _Toolbar = _interopRequireDefault(__webpack_require__(353));

var _ToolbarGroup = _interopRequireDefault(__webpack_require__(210));

var _ToolbarScratchButton = _interopRequireDefault(__webpack_require__(211));

var _ToolbarTimerButton = _interopRequireDefault(__webpack_require__(212));

var _ToolbarButtons = __webpack_require__(92);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Toolbar',
  component: _Toolbar.default
};
exports.default = _default;

function Basic() {
  const [helpActive, setHelpActive] = (0, _hooks.useToggle)();
  const [timerActive, setTimerActive] = (0, _hooks.useToggle)();
  const [ttsActive, setTTSActive] = (0, _hooks.useToggle)();
  const [scratchActive, setSratchActive] = (0, _hooks.useToggle)();
  const [calcActive, setCalcActive] = (0, _hooks.useToggle)();
  const [pencilActive, setPencilActive] = (0, _hooks.useToggle)();
  const [highlighterActive, setHighlighterActive] = (0, _hooks.useToggle)();
  const [eraserActive, setEraserActive] = (0, _hooks.useToggle)();
  const [language, setLanguage] = (0, _react.useState)('en');
  const progress = 50;
  const itemTitle = 'VH12345';
  const blockTitle = 'Block Title';
  return /*#__PURE__*/_react.default.createElement(_Base.Box, {
    sx: {
      width: '100vw',
      top: '0',
      left: '0',
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default // data
  , {
    progress: progress,
    language: language,
    itemTitle: itemTitle,
    blockTitle: blockTitle // toggle button states
    ,
    isHelpActive: helpActive,
    isTTSActive: ttsActive,
    isTimerActive: timerActive,
    isScratchActive: scratchActive,
    isPencilActive: pencilActive,
    isEraserActive: eraserActive,
    isHighlighterActive: highlighterActive,
    isCalcActive: calcActive // event handlers
    ,
    onClickHelp: setHelpActive,
    onClickTTS: setTTSActive,
    onClickScratch: setSratchActive,
    onClickPencil: setPencilActive,
    onClickHighlighter: setHighlighterActive,
    onClickEraser: setEraserActive,
    onClickCalc: setCalcActive,
    onClickTimer: setTimerActive,
    onClickLang: () => setLanguage(language === 'en' ? 'es' : 'en')
  }));
}

function Buttons() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 3,
    p: "3"
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.PrevButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.PrevButton, {
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.NextButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.NextButton, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Base.Flex, {
    bg: "n.100"
  }, /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null)), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null)), /*#__PURE__*/_react.default.createElement(_ToolbarGroup.default, null, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, null))), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: false
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: true
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: false,
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    isActive: true,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarScratchButton.default, {
    isScratchActive: false
  }), /*#__PURE__*/_react.default.createElement(_ToolbarScratchButton.default, {
    title: "Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions.",
    isScratchActive: true
  }, /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "pencil-btn",
    title: "Pencil. Turns on write mode. This lets you write on the screen.",
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "highlighter-btn",
    title: "Highlighter. Turns on highlight mode. This lets you highlight parts of the screen.",
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarToggleButton, {
    id: "eraser-btn",
    title: "Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights.",
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement(_ToolbarButtons.ToolbarButton, {
    id: "clear-scratch-btn",
    title: "Clear Scratchwork. Clears all scratchwork on the screen.",
    size: "sm"
  }))), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_ToolbarTimerButton.default, {
    isTimerActive: false
  }), /*#__PURE__*/_react.default.createElement(_ToolbarTimerButton.default, {
    isTimerActive: true
  })));
}

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circles = Circles;
exports.Rectangles = Rectangles;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Zones = _interopRequireWildcard(__webpack_require__(354));

var _example = _interopRequireDefault(__webpack_require__(793));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var _default = {
  title: 'Item Types/Zones',
  component: _Zones.default
};
exports.default = _default;

function Circles() {
  const [selected, setSelected] = (0, _react.useState)();
  return /*#__PURE__*/_react.default.createElement(_Zones.default, {
    selected: selected,
    onChange: setSelected,
    onClear: () => setSelected()
  }, /*#__PURE__*/_react.default.createElement(_Zones.ZonesBackground, {
    width: "301",
    height: "301",
    src: _example.default
  }, /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "circle",
    value: "a",
    cx: "100",
    cy: "100",
    r: "22"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "circle",
    value: "b",
    cx: "200",
    cy: "100",
    r: "22"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "circle",
    value: "c",
    cx: "100",
    cy: "200",
    r: "22"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "circle",
    value: "d",
    cx: "200",
    cy: "200",
    r: "22"
  })));
}

function Rectangles() {
  const [selected, setSelected] = (0, _react.useState)();
  return /*#__PURE__*/_react.default.createElement(_Zones.default, {
    selected: selected,
    onChange: setSelected,
    onClear: () => setSelected()
  }, /*#__PURE__*/_react.default.createElement(_Zones.ZonesBackground, {
    width: "610",
    height: "250"
  }, /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "rect",
    value: "a",
    x: "10",
    y: "10",
    width: "190",
    height: "110"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "rect",
    value: "b",
    x: "210",
    y: "10",
    width: "190",
    height: "110"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "rect",
    value: "c",
    x: "410",
    y: "10",
    width: "190",
    height: "110"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "rect",
    value: "d",
    x: "10",
    y: "128",
    width: "190",
    height: "110"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "rect",
    value: "e",
    x: "210",
    y: "128",
    width: "190",
    height: "110"
  }), /*#__PURE__*/_react.default.createElement(_Zones.Zone, {
    type: "rect",
    value: "f",
    x: "410",
    y: "128",
    width: "190",
    height: "110"
  })));
}

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c9969e4323be863f86e9b802099459b3.svg");

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllButtons = AllButtons;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Toolbar = __webpack_require__(352);

var _examples = _interopRequireDefault(__webpack_require__(795));

var _examples2 = _interopRequireDefault(__webpack_require__(796));

var _ThemeProvider = _interopRequireDefault(__webpack_require__(325));

var _themes = _interopRequireDefault(__webpack_require__(327));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Base = __webpack_require__(2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Collections'
};
exports.default = _default;

function ButtonCollection() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 3,
    p: "3"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_examples.default, null)), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_examples2.default, null)), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    bg: "n.100",
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.PrevButton, null), /*#__PURE__*/_react.default.createElement(_Toolbar.PrevButton, {
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_Toolbar.NextButton, null), /*#__PURE__*/_react.default.createElement(_Toolbar.NextButton, {
    disabled: true
  })));
}

function AllButtons() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, null, /*#__PURE__*/_react.default.createElement(ButtonCollection, null))), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, {
    theme: _themes.default.dark
  }, /*#__PURE__*/_react.default.createElement(ButtonCollection, null))), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, {
    theme: _themes.default.beiege
  }, /*#__PURE__*/_react.default.createElement(ButtonCollection, null))));
}

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Variants = Variants;
exports.Secondary = Secondary;
exports.Cases = Cases;
exports.All = All;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _Base = __webpack_require__(2);

var _Button = _interopRequireDefault(__webpack_require__(330));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Variants() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: true
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    disabled: true
  }, "Secondary"));
}

function Secondary() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  });
}

function Cases() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Clear Answer"));
}

function All() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(Variants, null)));
}

var _default = All;
exports.default = _default;

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = examples;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Base = __webpack_require__(2);

var _Stack = _interopRequireDefault(__webpack_require__(15));

var _ScrollButton = _interopRequireDefault(__webpack_require__(348));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function examples() {
  return /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, null)), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, {
    direction: "up"
  })), /*#__PURE__*/_react.default.createElement(_Base.Box, null, /*#__PURE__*/_react.default.createElement(_ScrollButton.default, {
    direction: "up",
    disabled: true
  })));
}

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SemanticColors = SemanticColors;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _examples = __webpack_require__(358);

var _Alert = __webpack_require__(355);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = {
  title: 'Collections'
};
exports.default = _default;

function SemanticColors() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_examples.AllTags, null), /*#__PURE__*/_react.default.createElement(_Alert.Basic, null));
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevButton = PrevButton;
exports.NextButton = NextButton;
exports.default = exports.ToolbarToggleButton = exports.ToolbarButton = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Button = _interopRequireDefault(__webpack_require__(26));

var _Base = __webpack_require__(2);

var _Icon = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const ToolbarButton = ({
  children,
  icon = 'placeholder',
  size = 'md',
  ...rest
}) => {
  const iconSize = size === 'md' ? 42 : 32;
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    variant: "toolbar",
    roving: true
  }, rest), children || /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: icon,
    size: iconSize
  }));
};

exports.ToolbarButton = ToolbarButton;

const ToolbarToggleButton = ({
  isActive = false,
  sx,
  ...rest
}) => {
  const isActiveStyle = {
    bg: 'blue.100',
    borderColor: 'blue.400',
    borderWidth: 1,
    ':hover': {
      bg: 'blue.50',
      borderColor: 'blue.300'
    },
    ':active': {
      bg: 'blue.200',
      borderColor: 'blue.700'
    },
    ...sx
  };
  return /*#__PURE__*/_react.default.createElement(ToolbarButton, _extends({
    "aria-pressed": isActive ? 'true' : 'false',
    sx: isActive && isActiveStyle
  }, rest));
};

exports.ToolbarToggleButton = ToolbarToggleButton;

function PrevButton({ ...rest
}) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    variant: "prev",
    flexShrink: 0,
    roving: true
  }, rest), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "arrow-left",
    size: "30px"
  }));
}

function NextButton({ ...rest
}) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    variant: "next",
    flexShrink: 0,
    roving: true
  }, rest), /*#__PURE__*/_react.default.createElement(_Base.Text // todo: add adjustments into base text component
  , {
    sx: {
      '::before': {
        content: "''",
        height: 0,
        display: 'block',
        mt: '-3px'
      }
    }
  }, "Next"), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "arrow-right",
    size: "32px"
  }));
}

var _default = ToolbarButton;
exports.default = _default;

/***/ })

},[[371,1,2]]]);
//# sourceMappingURL=main.306ab4008d2973145530.bundle.js.map