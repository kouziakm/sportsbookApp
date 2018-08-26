webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'nav' },
        _react2.default.createElement(
          'div',
          { className: 'account-dropdown' },
          _react2.default.createElement(
            'div',
            { className: 'logo' },
            _react2.default.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'name' },
            'Tuff Fish'
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon' },
            ' ',
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' }),
            ' '
          )
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Baseball'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Basketball'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Boxing'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Football'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Ice Hockey'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Soccer'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'Tennis'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'a',
              { href: '/jquery/' },
              'UFC/MMA'
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nfl = function Nfl(props) {

  return _react2.default.createElement(
    'div',
    { id: 'nfl-section' },
    _react2.default.createElement(
      'div',
      { className: 'games-section' },
      _react2.default.createElement(
        'div',
        { className: 'title-headers' },
        _react2.default.createElement(
          'div',
          { className: 'game-header' },
          _react2.default.createElement(
            'h5',
            null,
            'Team'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'spread-header' },
          _react2.default.createElement(
            'h5',
            null,
            'Spread'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'moneyline-header' },
          _react2.default.createElement(
            'h5',
            null,
            'MoneyLine'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'overunder-header' },
          _react2.default.createElement(
            'h5',
            null,
            'Total'
          )
        )
      ),
      props.gameLoopNfl()
    )
  );
};
exports.default = Nfl;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mlbdata = [{
    "ID": "2a36755e-48f0-4725-a23c-b3903a472ecc",
    "HomeTeam": "Tampa Bay Rays",
    "AwayTeam": "Boston Red Sox",
    "Sport": 0,
    "MatchTime": "2018-08-25T22:10:00",
    "Details": "Boston Red Sox at Tampa Bay Rays",
    "HomePitcher": "Ryan Yarbrough",
    "AwayPitcher": "Rick Porcello",
    "HomeROT": "918",
    "AwayROT": "917",
    "Odds": [{
        "ID": "2a36755e-48f0-4725-a23c-b3903a472ecc",
        "EventID": "2a36755e-48f0-4725-a23c-b3903a472ecc",
        "OddType": "Game",
        "MoneyLineAway": "-154",
        "MoneyLineHome": "137",
        "OverLine": "-100",
        "TotalNumber": "8.5",
        "UnderLine": "-120",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "102",
        "PointSpreadHomeLine": "-119",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "7e1e3ed5-0161-44f6-aa3a-87db36a992ee",
        "EventID": "2a36755e-48f0-4725-a23c-b3903a472ecc",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-138",
        "MoneyLineHome": "118",
        "OverLine": "110",
        "TotalNumber": "4.5",
        "UnderLine": "-130",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "100",
        "PointSpreadHomeLine": "-122",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "64968193-b8a7-4da1-b2e3-d64bd0bf88c5",
    "HomeTeam": "Detroit Tigers",
    "AwayTeam": "Chicago White Sox",
    "Sport": 0,
    "MatchTime": "2018-08-25T22:10:00",
    "Details": "Chicago White Sox at Detroit Tigers",
    "HomePitcher": "Ryan Carpenter",
    "AwayPitcher": "Lucas Giolito",
    "HomeROT": "916",
    "AwayROT": "915",
    "Odds": [{
        "ID": "374cbf13-bfee-4a5f-900c-6bb4c019a4bb",
        "EventID": "64968193-b8a7-4da1-b2e3-d64bd0bf88c5",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-110",
        "MoneyLineHome": "-110",
        "OverLine": "-110",
        "TotalNumber": "5.0",
        "UnderLine": "-110",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "126",
        "PointSpreadHomeLine": "-147",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "64968193-b8a7-4da1-b2e3-d64bd0bf88c5",
        "EventID": "64968193-b8a7-4da1-b2e3-d64bd0bf88c5",
        "OddType": "Game",
        "MoneyLineAway": "-105",
        "MoneyLineHome": "-109",
        "OverLine": "-110",
        "TotalNumber": "9.0",
        "UnderLine": "-110",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "158",
        "PointSpreadHomeLine": "-176",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "d4708e17-7a84-46ba-b8d4-073d42fec6f8",
    "HomeTeam": "Baltimore Orioles",
    "AwayTeam": "New York Yankees",
    "Sport": 0,
    "MatchTime": "2018-08-25T23:05:00",
    "Details": "Game 2",
    "HomePitcher": "Andrew Cashner",
    "AwayPitcher": "Sonny Gray",
    "HomeROT": "920",
    "AwayROT": "919",
    "Odds": [{
        "ID": "4a1ac606-94ac-4b00-96a1-3a181a8fa755",
        "EventID": "d4708e17-7a84-46ba-b8d4-073d42fec6f8",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-194",
        "MoneyLineHome": "165",
        "OverLine": "-121",
        "TotalNumber": "5.0",
        "UnderLine": "101",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "-135",
        "PointSpreadHomeLine": "115",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "d4708e17-7a84-46ba-b8d4-073d42fec6f8",
        "EventID": "d4708e17-7a84-46ba-b8d4-073d42fec6f8",
        "OddType": "Game",
        "MoneyLineAway": "-201",
        "MoneyLineHome": "176",
        "OverLine": "-122",
        "TotalNumber": "9.0",
        "UnderLine": "105",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-124",
        "PointSpreadHomeLine": "106",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "1b9aa9c0-056a-4dba-942a-73a6bf92eb74",
    "HomeTeam": "Minnesota Twins",
    "AwayTeam": "Oakland Athletics",
    "Sport": 0,
    "MatchTime": "2018-08-25T23:10:00",
    "Details": "Oakland Athletics at Minnesota Twins",
    "HomePitcher": "Stephen Gonsalves",
    "AwayPitcher": "Mike Fiers",
    "HomeROT": "922",
    "AwayROT": "921",
    "Odds": [{
        "ID": "1b9aa9c0-056a-4dba-942a-73a6bf92eb74",
        "EventID": "1b9aa9c0-056a-4dba-942a-73a6bf92eb74",
        "OddType": "Game",
        "MoneyLineAway": "-165",
        "MoneyLineHome": "147",
        "OverLine": "-115",
        "TotalNumber": "9.5",
        "UnderLine": "-105",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-113",
        "PointSpreadHomeLine": "-104",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "78b78871-045b-4937-8516-19d42667fc45",
        "EventID": "1b9aa9c0-056a-4dba-942a-73a6bf92eb74",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-180",
        "MoneyLineHome": "159",
        "OverLine": "-105",
        "TotalNumber": "5.5",
        "UnderLine": "-115",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "-128",
        "PointSpreadHomeLine": "107",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "366f2646-fd83-4339-99b9-7ed7e577c9fb",
    "HomeTeam": "Milwaukee Brewers",
    "AwayTeam": "Pittsburgh Pirates",
    "Sport": 0,
    "MatchTime": "2018-08-25T23:10:00",
    "Details": "Pittsburgh Pirates at Milwaukee Brewers",
    "HomePitcher": "Jhoulys Chacin",
    "AwayPitcher": "Jameson Taillon",
    "HomeROT": "908",
    "AwayROT": "907",
    "Odds": [{
        "ID": "366f2646-fd83-4339-99b9-7ed7e577c9fb",
        "EventID": "366f2646-fd83-4339-99b9-7ed7e577c9fb",
        "OddType": "Game",
        "MoneyLineAway": "121",
        "MoneyLineHome": "-134",
        "OverLine": "-119",
        "TotalNumber": "8.5",
        "UnderLine": "101",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-155",
        "PointSpreadHomeLine": "137",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "d434507f-95c4-4355-a969-324311fea4df",
        "EventID": "366f2646-fd83-4339-99b9-7ed7e577c9fb",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "114",
        "MoneyLineHome": "-135",
        "OverLine": "-110",
        "TotalNumber": "4.5",
        "UnderLine": "-110",
        "PointSpreadAway": "0.5",
        "PointSpreadHome": "-0.5",
        "PointSpreadAwayLine": "-120",
        "PointSpreadHomeLine": "-100",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "8ccc9957-d4d0-41a2-8bcc-d096e5d3bf23",
    "HomeTeam": "Miami Marlins",
    "AwayTeam": "Atlanta Braves",
    "Sport": 0,
    "MatchTime": "2018-08-25T23:10:00",
    "Details": "Atlanta Braves at Miami Marlins",
    "HomePitcher": "Wei-Yin Chen",
    "AwayPitcher": "Anibal Sanchez",
    "HomeROT": "906",
    "AwayROT": "905",
    "Odds": [{
        "ID": "8ccc9957-d4d0-41a2-8bcc-d096e5d3bf23",
        "EventID": "8ccc9957-d4d0-41a2-8bcc-d096e5d3bf23",
        "OddType": "Game",
        "MoneyLineAway": "-171",
        "MoneyLineHome": "152",
        "OverLine": "-115",
        "TotalNumber": "7.5",
        "UnderLine": "-105",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-113",
        "PointSpreadHomeLine": "-104",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "b7b1f8c4-06c5-45af-827d-1abda7f0020b",
        "EventID": "8ccc9957-d4d0-41a2-8bcc-d096e5d3bf23",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-165",
        "MoneyLineHome": "145",
        "OverLine": "-110",
        "TotalNumber": "4.0",
        "UnderLine": "-110",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "-115",
        "PointSpreadHomeLine": "-105",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "784ee36c-f845-454f-baf0-aa1a1dfaa969",
    "HomeTeam": "Kansas City Royals",
    "AwayTeam": "Cleveland Indians",
    "Sport": 0,
    "MatchTime": "2018-08-25T23:15:00",
    "Details": "Cleveland Indians at Kansas City Royals",
    "HomePitcher": "Heath Fillmyer",
    "AwayPitcher": "Corey Kluber",
    "HomeROT": "924",
    "AwayROT": "923",
    "Odds": [{
        "ID": "784ee36c-f845-454f-baf0-aa1a1dfaa969",
        "EventID": "784ee36c-f845-454f-baf0-aa1a1dfaa969",
        "OddType": "Game",
        "MoneyLineAway": "-297",
        "MoneyLineHome": "251",
        "OverLine": "-125",
        "TotalNumber": "8.5",
        "UnderLine": "105",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-175",
        "PointSpreadHomeLine": "155",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "bf9516f8-c3d8-45bc-87d1-13d10861e779",
        "EventID": "784ee36c-f845-454f-baf0-aa1a1dfaa969",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-329",
        "MoneyLineHome": "267",
        "OverLine": "-110",
        "TotalNumber": "5.0",
        "UnderLine": "-110",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "-196",
        "PointSpreadHomeLine": "165",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "7a9aa094-10ef-4fde-b434-69a29bbb074b",
    "HomeTeam": "Colorado Rockies",
    "AwayTeam": "St. Louis Cardinals",
    "Sport": 0,
    "MatchTime": "2018-08-26T00:10:00",
    "Details": "St. Louis Cardinals at Colorado Rockies",
    "HomePitcher": "German Marquez",
    "AwayPitcher": "John Gant",
    "HomeROT": "910",
    "AwayROT": "909",
    "Odds": [{
        "ID": "06ef7586-68ae-4b3f-bace-aea2677cd06d",
        "EventID": "7a9aa094-10ef-4fde-b434-69a29bbb074b",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "140",
        "MoneyLineHome": "-160",
        "OverLine": "-109",
        "TotalNumber": "6.0",
        "UnderLine": "-111",
        "PointSpreadAway": "0.5",
        "PointSpreadHome": "-0.5",
        "PointSpreadAwayLine": "-105",
        "PointSpreadHomeLine": "-115",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "7a9aa094-10ef-4fde-b434-69a29bbb074b",
        "EventID": "7a9aa094-10ef-4fde-b434-69a29bbb074b",
        "OddType": "Game",
        "MoneyLineAway": "134",
        "MoneyLineHome": "-155",
        "OverLine": "-104",
        "TotalNumber": "11.0",
        "UnderLine": "-113",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-125",
        "PointSpreadHomeLine": "109",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "7e3e766b-fbee-4300-b06f-1274de338e49",
    "HomeTeam": "Arizona Diamondbacks",
    "AwayTeam": "Seattle Mariners",
    "Sport": 0,
    "MatchTime": "2018-08-26T00:10:00",
    "Details": "Seattle Mariners at Arizona Diamondbacks",
    "HomePitcher": "Robbie Ray",
    "AwayPitcher": "Wade LeBlanc",
    "HomeROT": "932",
    "AwayROT": "931",
    "Odds": [{
        "ID": "7e3e766b-fbee-4300-b06f-1274de338e49",
        "EventID": "7e3e766b-fbee-4300-b06f-1274de338e49",
        "OddType": "Game",
        "MoneyLineAway": "137",
        "MoneyLineHome": "-154",
        "OverLine": "-110",
        "TotalNumber": "8.5",
        "UnderLine": "-110",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-154",
        "PointSpreadHomeLine": "136",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "81411f71-a9bf-4f71-9a43-08b423b05dbe",
        "EventID": "7e3e766b-fbee-4300-b06f-1274de338e49",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "138",
        "MoneyLineHome": "-159",
        "OverLine": "-115",
        "TotalNumber": "4.5",
        "UnderLine": "-105",
        "PointSpreadAway": "0.5",
        "PointSpreadHome": "-0.5",
        "PointSpreadAwayLine": "-106",
        "PointSpreadHomeLine": "-116",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "ce8c5b35-7309-4af5-a622-fcc6ead291ee",
    "HomeTeam": "Los Angeles Angels",
    "AwayTeam": "Houston Astros",
    "Sport": 0,
    "MatchTime": "2018-08-26T01:05:00",
    "Details": "Houston Astros at Los Angeles Angels",
    "HomePitcher": "Jaime Barria",
    "AwayPitcher": "Justin Verlander",
    "HomeROT": "926",
    "AwayROT": "925",
    "Odds": [{
        "ID": "bf18b2d3-cfac-49fc-98f7-de9c147db647",
        "EventID": "ce8c5b35-7309-4af5-a622-fcc6ead291ee",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "-207",
        "MoneyLineHome": "176",
        "OverLine": "-120",
        "TotalNumber": "4.0",
        "UnderLine": "-100",
        "PointSpreadAway": "-0.5",
        "PointSpreadHome": "0.5",
        "PointSpreadAwayLine": "-139",
        "PointSpreadHomeLine": "118",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "ce8c5b35-7309-4af5-a622-fcc6ead291ee",
        "EventID": "ce8c5b35-7309-4af5-a622-fcc6ead291ee",
        "OddType": "Game",
        "MoneyLineAway": "-179",
        "MoneyLineHome": "164",
        "OverLine": "-106",
        "TotalNumber": "8.0",
        "UnderLine": "-112",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-129",
        "PointSpreadHomeLine": "111",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "0ab746fa-0222-4588-9db6-3ea6ef7be6b0",
    "HomeTeam": "Los Angeles Dodgers",
    "AwayTeam": "San Diego Padres",
    "Sport": 0,
    "MatchTime": "2018-08-26T01:10:00",
    "Details": "San Diego Padres at Los Angeles Dodgers",
    "HomePitcher": "Clayton Kershaw",
    "AwayPitcher": "Brett Kennedy",
    "HomeROT": "912",
    "AwayROT": "911",
    "Odds": [{
        "ID": "0ab746fa-0222-4588-9db6-3ea6ef7be6b0",
        "EventID": "0ab746fa-0222-4588-9db6-3ea6ef7be6b0",
        "OddType": "Game",
        "MoneyLineAway": "309",
        "MoneyLineHome": "-352",
        "OverLine": "-110",
        "TotalNumber": "7.5",
        "UnderLine": "-110",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "156",
        "PointSpreadHomeLine": "-175",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }, {
        "ID": "7421eefc-13cf-4bb8-b091-3b8a162cc269",
        "EventID": "0ab746fa-0222-4588-9db6-3ea6ef7be6b0",
        "OddType": "FirstFiveInnings",
        "MoneyLineAway": "351",
        "MoneyLineHome": "-450",
        "OverLine": "-118",
        "TotalNumber": "4.0",
        "UnderLine": "-103",
        "PointSpreadAway": "0.5",
        "PointSpreadHome": "-0.5",
        "PointSpreadAwayLine": "194",
        "PointSpreadHomeLine": "-232",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "6814b1dd-661b-4e6d-aa5c-c5ffc0f6a1fb",
    "HomeTeam": "Toronto Blue Jays",
    "AwayTeam": "Philadelphia Phillies",
    "Sport": 0,
    "MatchTime": "2018-08-26T17:05:00",
    "Details": "Philadelphia Phillies at Toronto Blue Jays",
    "HomePitcher": "Marco Estrada",
    "AwayPitcher": "Vince Velasquez",
    "HomeROT": "976",
    "AwayROT": "975",
    "Odds": [{
        "ID": "6814b1dd-661b-4e6d-aa5c-c5ffc0f6a1fb",
        "EventID": "6814b1dd-661b-4e6d-aa5c-c5ffc0f6a1fb",
        "OddType": "Game",
        "MoneyLineAway": "-113",
        "MoneyLineHome": "103",
        "OverLine": "-100",
        "TotalNumber": "9.0",
        "UnderLine": "-120",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "135",
        "PointSpreadHomeLine": "-155",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "30e58efb-a8c5-44e4-99cd-9bed66a16917",
    "HomeTeam": "Tampa Bay Rays",
    "AwayTeam": "Boston Red Sox",
    "Sport": 0,
    "MatchTime": "2018-08-26T17:10:00",
    "HomePitcher": "Blake Snell",
    "AwayPitcher": "Nathan Eovaldi",
    "HomeROT": "966",
    "AwayROT": "965",
    "Odds": [{
        "ID": "30e58efb-a8c5-44e4-99cd-9bed66a16917",
        "EventID": "30e58efb-a8c5-44e4-99cd-9bed66a16917",
        "OddType": "Game",
        "MoneyLineAway": "107",
        "MoneyLineHome": "-117",
        "OverLine": "-115",
        "TotalNumber": "7.5",
        "UnderLine": "-105",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-205",
        "PointSpreadHomeLine": "175",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "451cdb57-dd3e-45b1-a5fd-fd186f1bbea9",
    "HomeTeam": "New York Mets",
    "AwayTeam": "Washington Nationals",
    "Sport": 0,
    "MatchTime": "2018-08-26T17:10:00",
    "Details": "Washington Nationals at New York Mets",
    "HomePitcher": "Steven Matz",
    "AwayPitcher": "Jefry Rodriguez",
    "HomeROT": "952",
    "AwayROT": "951",
    "Odds": [{
        "ID": "451cdb57-dd3e-45b1-a5fd-fd186f1bbea9",
        "EventID": "451cdb57-dd3e-45b1-a5fd-fd186f1bbea9",
        "OddType": "Game",
        "MoneyLineAway": "-102",
        "MoneyLineHome": "-108",
        "OverLine": "100",
        "TotalNumber": "9.0",
        "UnderLine": "-120",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-205",
        "PointSpreadHomeLine": "175",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "4959bc26-a7c3-4d34-b220-0cbdb97cec8c",
    "HomeTeam": "Miami Marlins",
    "AwayTeam": "Atlanta Braves",
    "Sport": 0,
    "MatchTime": "2018-08-26T17:10:00",
    "Details": "Atlanta Braves at Miami Marlins",
    "HomePitcher": "Pablo Lopez",
    "AwayPitcher": "Kevin Gausman",
    "HomeROT": "954",
    "AwayROT": "953",
    "Odds": [{
        "ID": "4959bc26-a7c3-4d34-b220-0cbdb97cec8c",
        "EventID": "4959bc26-a7c3-4d34-b220-0cbdb97cec8c",
        "OddType": "Game",
        "MoneyLineAway": "-180",
        "MoneyLineHome": "170",
        "OverLine": "-115",
        "TotalNumber": "7.5",
        "UnderLine": "-105",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-115",
        "PointSpreadHomeLine": "-105",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "8c842061-12e6-4118-9481-9d6eae832d8e",
    "HomeTeam": "Detroit Tigers",
    "AwayTeam": "Chicago White Sox",
    "Sport": 0,
    "MatchTime": "2018-08-26T17:10:00",
    "Details": "Chicago White Sox at Detroit Tigers",
    "HomePitcher": "Jordan Zimmermann",
    "AwayPitcher": "Michael Kopech",
    "HomeROT": "968",
    "AwayROT": "967",
    "Odds": [{
        "ID": "8c842061-12e6-4118-9481-9d6eae832d8e",
        "EventID": "8c842061-12e6-4118-9481-9d6eae832d8e",
        "OddType": "Game",
        "MoneyLineAway": "-112",
        "MoneyLineHome": "102",
        "OverLine": "-117",
        "TotalNumber": "8.5",
        "UnderLine": "-103",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "145",
        "PointSpreadHomeLine": "-165",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "28ec79a3-2ebb-48f4-8087-4fc397db6f2f",
    "HomeTeam": "Minnesota Twins",
    "AwayTeam": "Oakland Athletics",
    "Sport": 0,
    "MatchTime": "2018-08-26T18:10:00",
    "Details": "Oakland Athletics at Minnesota Twins",
    "HomePitcher": "Jose Berrios",
    "AwayPitcher": "Brett Anderson",
    "HomeROT": "970",
    "AwayROT": "969",
    "Odds": [{
        "ID": "28ec79a3-2ebb-48f4-8087-4fc397db6f2f",
        "EventID": "28ec79a3-2ebb-48f4-8087-4fc397db6f2f",
        "OddType": "Game",
        "MoneyLineAway": "-105",
        "MoneyLineHome": "-105",
        "OverLine": "-100",
        "TotalNumber": "9.0",
        "UnderLine": "-120",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-210",
        "PointSpreadHomeLine": "180",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "a7fa15a9-6278-401f-8538-0efdf1699fca",
    "HomeTeam": "Milwaukee Brewers",
    "AwayTeam": "Pittsburgh Pirates",
    "Sport": 0,
    "MatchTime": "2018-08-26T18:10:00",
    "Details": "Pittsburgh Pirates at Milwaukee Brewers",
    "HomePitcher": "Chase Anderson",
    "AwayPitcher": "Chris Archer",
    "HomeROT": "956",
    "AwayROT": "955",
    "Odds": [{
        "ID": "a7fa15a9-6278-401f-8538-0efdf1699fca",
        "EventID": "a7fa15a9-6278-401f-8538-0efdf1699fca",
        "OddType": "Game",
        "MoneyLineAway": "127",
        "MoneyLineHome": "-137",
        "OverLine": "-120",
        "TotalNumber": "8.5",
        "UnderLine": "-100",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-170",
        "PointSpreadHomeLine": "150",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "346f1f13-5e38-49d4-b3a7-feb50ad2d41b",
    "HomeTeam": "Kansas City Royals",
    "AwayTeam": "Cleveland Indians",
    "Sport": 0,
    "MatchTime": "2018-08-26T18:15:00",
    "Details": "Cleveland Indians at Kansas City Royals",
    "HomePitcher": "Jorge Lopez",
    "AwayPitcher": "Shane Bieber",
    "HomeROT": "972",
    "AwayROT": "971",
    "Odds": [{
        "ID": "346f1f13-5e38-49d4-b3a7-feb50ad2d41b",
        "EventID": "346f1f13-5e38-49d4-b3a7-feb50ad2d41b",
        "OddType": "Game",
        "MoneyLineAway": "-218",
        "MoneyLineHome": "198",
        "OverLine": "-105",
        "TotalNumber": "9.5",
        "UnderLine": "-115",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "-145",
        "PointSpreadHomeLine": "125",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "803f0ccf-e66e-4389-b0e7-aaec6e4004b9",
    "HomeTeam": "Chicago Cubs",
    "AwayTeam": "Cincinnati Reds",
    "Sport": 0,
    "MatchTime": "2018-08-26T18:20:00",
    "Details": "Cincinnati Reds at Chicago Cubs",
    "HomePitcher": "Kyle Hendricks",
    "AwayPitcher": "Homer Bailey",
    "HomeROT": "958",
    "AwayROT": "957",
    "Odds": [{
        "ID": "803f0ccf-e66e-4389-b0e7-aaec6e4004b9",
        "EventID": "803f0ccf-e66e-4389-b0e7-aaec6e4004b9",
        "OddType": "Game",
        "MoneyLineAway": "216",
        "MoneyLineHome": "-235",
        "OverLine": "0",
        "TotalNumber": "0.0",
        "UnderLine": "0",
        "PointSpreadAway": "0.0",
        "PointSpreadHome": "0.0",
        "PointSpreadAwayLine": "0",
        "PointSpreadHomeLine": "0",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "3fb3de5e-52e1-4969-989d-1bd62557e5dd",
    "HomeTeam": "Colorado Rockies",
    "AwayTeam": "St. Louis Cardinals",
    "Sport": 0,
    "MatchTime": "2018-08-26T19:10:00",
    "Details": "St. Louis Cardinals at Colorado Rockies",
    "HomePitcher": "Tyler Anderson",
    "AwayPitcher": "Austin Gomber",
    "HomeROT": "960",
    "AwayROT": "959",
    "Odds": [{
        "ID": "3fb3de5e-52e1-4969-989d-1bd62557e5dd",
        "EventID": "3fb3de5e-52e1-4969-989d-1bd62557e5dd",
        "OddType": "Game",
        "MoneyLineAway": "125",
        "MoneyLineHome": "-135",
        "OverLine": "-120",
        "TotalNumber": "11.0",
        "UnderLine": "-100",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-140",
        "PointSpreadHomeLine": "120",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "0b9577c3-4ad9-428a-bc23-514afe468907",
    "HomeTeam": "Los Angeles Angels",
    "AwayTeam": "Houston Astros",
    "Sport": 0,
    "MatchTime": "2018-08-26T20:05:00",
    "Details": "Houston Astros at Los Angeles Angels",
    "HomePitcher": "Felix Pena",
    "AwayPitcher": "Framber Valdez",
    "HomeROT": "974",
    "AwayROT": "973",
    "Odds": [{
        "ID": "0b9577c3-4ad9-428a-bc23-514afe468907",
        "EventID": "0b9577c3-4ad9-428a-bc23-514afe468907",
        "OddType": "Game",
        "MoneyLineAway": "-139",
        "MoneyLineHome": "128",
        "OverLine": "-100",
        "TotalNumber": "9.0",
        "UnderLine": "-120",
        "PointSpreadAway": "-1.5",
        "PointSpreadHome": "1.5",
        "PointSpreadAwayLine": "115",
        "PointSpreadHomeLine": "-135",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "efd9b1d5-6d69-4938-bbce-1f9d6bb6ce41",
    "HomeTeam": "San Francisco Giants",
    "AwayTeam": "Texas Rangers",
    "Sport": 0,
    "MatchTime": "2018-08-26T20:05:00",
    "Details": "Texas Rangers at San Francisco Giants",
    "HomePitcher": "Derek Holland",
    "AwayPitcher": "Yovani Gallardo",
    "HomeROT": "978",
    "AwayROT": "977",
    "Odds": [{
        "ID": "efd9b1d5-6d69-4938-bbce-1f9d6bb6ce41",
        "EventID": "efd9b1d5-6d69-4938-bbce-1f9d6bb6ce41",
        "OddType": "Game",
        "MoneyLineAway": "146",
        "MoneyLineHome": "-157",
        "OverLine": "-110",
        "TotalNumber": "8.5",
        "UnderLine": "-110",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-150",
        "PointSpreadHomeLine": "130",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "21832bf2-5b1a-416f-b033-a499e654334c",
    "HomeTeam": "Los Angeles Dodgers",
    "AwayTeam": "San Diego Padres",
    "Sport": 0,
    "MatchTime": "2018-08-26T20:10:00",
    "Details": "San Diego Padres at Los Angeles Dodgers",
    "HomePitcher": "Alex Wood",
    "AwayPitcher": "Robbie Erlin",
    "HomeROT": "962",
    "AwayROT": "961",
    "Odds": [{
        "ID": "21832bf2-5b1a-416f-b033-a499e654334c",
        "EventID": "21832bf2-5b1a-416f-b033-a499e654334c",
        "OddType": "Game",
        "MoneyLineAway": "212",
        "MoneyLineHome": "-234",
        "OverLine": "-110",
        "TotalNumber": "8.0",
        "UnderLine": "-110",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-100",
        "PointSpreadHomeLine": "-120",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "6885f5bb-3bcc-485e-a575-eeb19c6d46a9",
    "HomeTeam": "Arizona Diamondbacks",
    "AwayTeam": "Seattle Mariners",
    "Sport": 0,
    "MatchTime": "2018-08-26T20:10:00",
    "Details": "Seattle Mariners at Arizona Diamondbacks",
    "HomePitcher": "Zack Greinke",
    "AwayPitcher": "Mike Leake",
    "HomeROT": "980",
    "AwayROT": "979",
    "Odds": [{
        "ID": "6885f5bb-3bcc-485e-a575-eeb19c6d46a9",
        "EventID": "6885f5bb-3bcc-485e-a575-eeb19c6d46a9",
        "OddType": "Game",
        "MoneyLineAway": "175",
        "MoneyLineHome": "-189",
        "OverLine": "-110",
        "TotalNumber": "8.0",
        "UnderLine": "-110",
        "PointSpreadAway": "1.5",
        "PointSpreadHome": "-1.5",
        "PointSpreadAwayLine": "-130",
        "PointSpreadHomeLine": "110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}, {
    "ID": "07205dff-527c-4cb8-9372-83d7655e6927",
    "HomeTeam": "Baltimore Orioles",
    "AwayTeam": "New York Yankees",
    "Sport": 0,
    "MatchTime": "2018-08-27T00:05:00",
    "Details": "New York Yankees at Baltimore Orioles",
    "HomePitcher": "Dylan Bundy",
    "AwayPitcher": "Luis Severino",
    "HomeROT": "964",
    "AwayROT": "963",
    "Odds": [{
        "ID": "07205dff-527c-4cb8-9372-83d7655e6927",
        "EventID": "07205dff-527c-4cb8-9372-83d7655e6927",
        "OddType": "Game",
        "MoneyLineAway": "-272",
        "MoneyLineHome": "245",
        "OverLine": "-105",
        "TotalNumber": "9.0",
        "UnderLine": "-115",
        "PointSpreadAway": "0.0",
        "PointSpreadHome": "0.0",
        "PointSpreadAwayLine": "0",
        "PointSpreadHomeLine": "0",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-25T21:00:36"
    }]
}];

exports.default = mlbdata;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var nfldata = [{
    "ID": "25cbf6c2-179a-406f-9021-a18a98f880e0",
    "HomeTeam": "New England Patriots",
    "AwayTeam": "Philadelphia Eagles",
    "Sport": 4,
    "MatchTime": "2018-08-16T23:30:00",
    "Details": "Philadelphia Eagles at New England Patriots - Preseason - Week 2",
    "HomeROT": "402",
    "AwayROT": "401",
    "Odds": [{
        "ID": "25cbf6c2-179a-406f-9021-a18a98f880e0",
        "EventID": "25cbf6c2-179a-406f-9021-a18a98f880e0",
        "OddType": "Game",
        "MoneyLineAway": "159",
        "MoneyLineHome": "-179",
        "OverLine": "-112",
        "TotalNumber": "42.5",
        "UnderLine": "-106",
        "PointSpreadAway": "3.5",
        "PointSpreadHome": "-3.5",
        "PointSpreadAwayLine": "-108",
        "PointSpreadHomeLine": "-108",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "0d83d365-de6a-4f1c-bcb9-cfe189286f3d",
    "HomeTeam": "Washington Redskins",
    "AwayTeam": "New York Jets",
    "Sport": 4,
    "MatchTime": "2018-08-17T00:00:00",
    "Details": "New York Jets at Washington Redskins - Preseason - Week 2",
    "HomeROT": "404",
    "AwayROT": "403",
    "Odds": [{
        "ID": "0d83d365-de6a-4f1c-bcb9-cfe189286f3d",
        "EventID": "0d83d365-de6a-4f1c-bcb9-cfe189286f3d",
        "OddType": "Game",
        "MoneyLineAway": "100",
        "MoneyLineHome": "-117",
        "OverLine": "-105",
        "TotalNumber": "38.5",
        "UnderLine": "-115",
        "PointSpreadAway": "1.0",
        "PointSpreadHome": "-1.0",
        "PointSpreadAwayLine": "-109",
        "PointSpreadHomeLine": "-109",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "45a368dc-6b47-43cd-a9ad-47c39f20593f",
    "HomeTeam": "Green Bay Packers",
    "AwayTeam": "Pittsburgh Steelers",
    "Sport": 4,
    "MatchTime": "2018-08-17T00:00:00",
    "Details": "Pittsburgh Steelers at Green Bay Packers - Preseason - Week 2",
    "HomeROT": "406",
    "AwayROT": "405",
    "Odds": [{
        "ID": "45a368dc-6b47-43cd-a9ad-47c39f20593f",
        "EventID": "45a368dc-6b47-43cd-a9ad-47c39f20593f",
        "OddType": "Game",
        "MoneyLineAway": "208",
        "MoneyLineHome": "-243",
        "OverLine": "-115",
        "TotalNumber": "42.5",
        "UnderLine": "-105",
        "PointSpreadAway": "5.5",
        "PointSpreadHome": "-5.5",
        "PointSpreadAwayLine": "-108",
        "PointSpreadHomeLine": "-110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "2f47e334-a6b0-40c2-8e73-83f312c2e68b",
    "HomeTeam": "Detroit Lions",
    "AwayTeam": "New York Giants",
    "Sport": 4,
    "MatchTime": "2018-08-17T23:00:00",
    "Details": "New York Giants at Detroit Lions - Preseason - Week 2",
    "HomeROT": "408",
    "AwayROT": "407",
    "Odds": [{
        "ID": "2f47e334-a6b0-40c2-8e73-83f312c2e68b",
        "EventID": "2f47e334-a6b0-40c2-8e73-83f312c2e68b",
        "OddType": "Game",
        "MoneyLineAway": "142",
        "MoneyLineHome": "-162",
        "OverLine": "-104",
        "TotalNumber": "40.5",
        "UnderLine": "-114",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "-105",
        "PointSpreadHomeLine": "-113",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "ae59045f-d8ef-4b9d-a789-aff622a321be",
    "HomeTeam": "Atlanta Falcons",
    "AwayTeam": "Kansas City Chiefs",
    "Sport": 4,
    "MatchTime": "2018-08-17T23:00:00",
    "Details": "Kansas City Chiefs at Atlanta Falcons - Preseason - Week 2",
    "HomeROT": "410",
    "AwayROT": "409",
    "Odds": [{
        "ID": "ae59045f-d8ef-4b9d-a789-aff622a321be",
        "EventID": "ae59045f-d8ef-4b9d-a789-aff622a321be",
        "OddType": "Game",
        "MoneyLineAway": "-101",
        "MoneyLineHome": "-118",
        "OverLine": "-107",
        "TotalNumber": "39.5",
        "UnderLine": "-112",
        "PointSpreadAway": "1.0",
        "PointSpreadHome": "-1.0",
        "PointSpreadAwayLine": "-110",
        "PointSpreadHomeLine": "-109",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "07b0a5bb-4b6c-4aab-8cfe-7eaa4daaee22",
    "HomeTeam": "Carolina Panthers",
    "AwayTeam": "Miami Dolphins",
    "Sport": 4,
    "MatchTime": "2018-08-17T23:30:00",
    "Details": "Miami Dolphins at Carolina Panthers - Preseason - Week 2",
    "HomeROT": "412",
    "AwayROT": "411",
    "Odds": [{
        "ID": "07b0a5bb-4b6c-4aab-8cfe-7eaa4daaee22",
        "EventID": "07b0a5bb-4b6c-4aab-8cfe-7eaa4daaee22",
        "OddType": "Game",
        "MoneyLineAway": "150",
        "MoneyLineHome": "-170",
        "OverLine": "-110",
        "TotalNumber": "43.0",
        "UnderLine": "-110",
        "PointSpreadAway": "3.5",
        "PointSpreadHome": "-3.5",
        "PointSpreadAwayLine": "-115",
        "PointSpreadHomeLine": "-105",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "47f4a469-451f-4a9a-9aac-481d57b5d221",
    "HomeTeam": "Cleveland Browns",
    "AwayTeam": "Buffalo Bills",
    "Sport": 4,
    "MatchTime": "2018-08-17T23:30:00",
    "Details": "Buffalo Bills at Cleveland Browns - Preseason - Week 2",
    "HomeROT": "414",
    "AwayROT": "413",
    "Odds": [{
        "ID": "47f4a469-451f-4a9a-9aac-481d57b5d221",
        "EventID": "47f4a469-451f-4a9a-9aac-481d57b5d221",
        "OddType": "Game",
        "MoneyLineAway": "151",
        "MoneyLineHome": "-171",
        "OverLine": "-110",
        "TotalNumber": "40.5",
        "UnderLine": "-109",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "107",
        "PointSpreadHomeLine": "-125",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "6b0a0579-0ab3-4133-9332-30ba1ab9c000",
    "HomeTeam": "New Orleans Saints",
    "AwayTeam": "Arizona Cardinals",
    "Sport": 4,
    "MatchTime": "2018-08-18T00:00:00",
    "Details": "Arizona Cardinals at New Orleans Saints - Preseason - Week 2",
    "HomeROT": "416",
    "AwayROT": "415",
    "Odds": [{
        "ID": "6b0a0579-0ab3-4133-9332-30ba1ab9c000",
        "EventID": "6b0a0579-0ab3-4133-9332-30ba1ab9c000",
        "OddType": "Game",
        "MoneyLineAway": "159",
        "MoneyLineHome": "-180",
        "OverLine": "-108",
        "TotalNumber": "41.0",
        "UnderLine": "-111",
        "PointSpreadAway": "3.5",
        "PointSpreadHome": "-3.5",
        "PointSpreadAwayLine": "-108",
        "PointSpreadHomeLine": "-110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "56e2ef48-805b-4b04-a014-bd148ff20497",
    "HomeTeam": "Minnesota Vikings",
    "AwayTeam": "Jacksonville Jaguars",
    "Sport": 4,
    "MatchTime": "2018-08-18T17:00:00",
    "Details": "Jacksonville Jaguars at Minnesota Vikings - Preseason - Week 2",
    "HomeROT": "418",
    "AwayROT": "417",
    "Odds": [{
        "ID": "56e2ef48-805b-4b04-a014-bd148ff20497",
        "EventID": "56e2ef48-805b-4b04-a014-bd148ff20497",
        "OddType": "Game",
        "MoneyLineAway": "172",
        "MoneyLineHome": "-202",
        "OverLine": "-110",
        "TotalNumber": "40.0",
        "UnderLine": "-110",
        "PointSpreadAway": "4.0",
        "PointSpreadHome": "-4.0",
        "PointSpreadAwayLine": "-109",
        "PointSpreadHomeLine": "-109",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "364d9f9b-f708-435b-be6c-05008183ac63",
    "HomeTeam": "Los Angeles Rams",
    "AwayTeam": "Oakland Raiders",
    "Sport": 4,
    "MatchTime": "2018-08-18T20:00:00",
    "Details": "Oakland Raiders at Los Angeles Rams - Preseason - Week 2",
    "HomeROT": "420",
    "AwayROT": "419",
    "Odds": [{
        "ID": "364d9f9b-f708-435b-be6c-05008183ac63",
        "EventID": "364d9f9b-f708-435b-be6c-05008183ac63",
        "OddType": "Game",
        "MoneyLineAway": "115",
        "MoneyLineHome": "-136",
        "OverLine": "-105",
        "TotalNumber": "38.5",
        "UnderLine": "-115",
        "PointSpreadAway": "2.5",
        "PointSpreadHome": "-2.5",
        "PointSpreadAwayLine": "-110",
        "PointSpreadHomeLine": "-110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "7b906eb8-8bd4-4ca0-834b-963b347e0a94",
    "HomeTeam": "Dallas Cowboys",
    "AwayTeam": "Cincinnati Bengals",
    "Sport": 4,
    "MatchTime": "2018-08-18T23:00:00",
    "Details": "Cincinnati Bengals at Dallas Cowboys - Preseason - Week 2",
    "HomeROT": "422",
    "AwayROT": "421",
    "Odds": [{
        "ID": "7b906eb8-8bd4-4ca0-834b-963b347e0a94",
        "EventID": "7b906eb8-8bd4-4ca0-834b-963b347e0a94",
        "OddType": "Game",
        "MoneyLineAway": "149",
        "MoneyLineHome": "-170",
        "OverLine": "-108",
        "TotalNumber": "41.5",
        "UnderLine": "-111",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "102",
        "PointSpreadHomeLine": "-120",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "2639df02-7526-4970-84b5-ab15aff4abaf",
    "HomeTeam": "Tennessee Titans",
    "AwayTeam": "Tampa Bay Buccaneers",
    "Sport": 4,
    "MatchTime": "2018-08-19T00:00:00",
    "Details": "Tampa Bay Buccaneers at Tennessee Titans - Preseason - Week 2",
    "HomeROT": "426",
    "AwayROT": "425",
    "Odds": [{
        "ID": "2639df02-7526-4970-84b5-ab15aff4abaf",
        "EventID": "2639df02-7526-4970-84b5-ab15aff4abaf",
        "OddType": "Game",
        "MoneyLineAway": "130",
        "MoneyLineHome": "-150",
        "OverLine": "-110",
        "TotalNumber": "41.0",
        "UnderLine": "-110",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "-120",
        "PointSpreadHomeLine": "-100",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "8fcd3952-c985-43b0-bff3-c1b2c7d96de0",
    "HomeTeam": "Houston Texans",
    "AwayTeam": "San Francisco 49ers",
    "Sport": 4,
    "MatchTime": "2018-08-19T00:00:00",
    "Details": "San Francisco 49ers at Houston Texans - Preseason - Week 2",
    "HomeROT": "424",
    "AwayROT": "423",
    "Odds": [{
        "ID": "8fcd3952-c985-43b0-bff3-c1b2c7d96de0",
        "EventID": "8fcd3952-c985-43b0-bff3-c1b2c7d96de0",
        "OddType": "Game",
        "MoneyLineAway": "119",
        "MoneyLineHome": "-139",
        "OverLine": "-110",
        "TotalNumber": "41.0",
        "UnderLine": "-110",
        "PointSpreadAway": "2.5",
        "PointSpreadHome": "-2.5",
        "PointSpreadAwayLine": "-110",
        "PointSpreadHomeLine": "-110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "a1e2aa7f-1974-4786-a90b-8c2d20c22b9e",
    "HomeTeam": "Denver Broncos",
    "AwayTeam": "Chicago Bears",
    "Sport": 4,
    "MatchTime": "2018-08-19T01:05:00",
    "Details": "Chicago Bears at Denver Broncos - Preseason - Week 2",
    "HomeROT": "428",
    "AwayROT": "427",
    "Odds": [{
        "ID": "a1e2aa7f-1974-4786-a90b-8c2d20c22b9e",
        "EventID": "a1e2aa7f-1974-4786-a90b-8c2d20c22b9e",
        "OddType": "Game",
        "MoneyLineAway": "137",
        "MoneyLineHome": "-158",
        "OverLine": "-110",
        "TotalNumber": "40.5",
        "UnderLine": "-110",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "-110",
        "PointSpreadHomeLine": "-110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "181dfb91-1205-4eca-946e-e3f565edb97a",
    "HomeTeam": "Los Angeles Chargers",
    "AwayTeam": "Seattle Seahawks",
    "Sport": 4,
    "MatchTime": "2018-08-19T02:00:00",
    "Details": "Seattle Seahawks at Los Angeles Chargers - Preseason - Week 2",
    "HomeROT": "430",
    "AwayROT": "429",
    "Odds": [{
        "ID": "181dfb91-1205-4eca-946e-e3f565edb97a",
        "EventID": "181dfb91-1205-4eca-946e-e3f565edb97a",
        "OddType": "Game",
        "MoneyLineAway": "144",
        "MoneyLineHome": "-165",
        "OverLine": "-106",
        "TotalNumber": "39.5",
        "UnderLine": "-113",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "-100",
        "PointSpreadHomeLine": "-120",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "43ba647e-3e0c-42c4-9966-5a9b0bfd5111",
    "HomeTeam": "Indianapolis Colts",
    "AwayTeam": "Baltimore Ravens",
    "Sport": 4,
    "MatchTime": "2018-08-21T00:00:00",
    "Details": "Baltimore Ravens at Indianapolis Colts - Preseason - Week 2",
    "HomeROT": "432",
    "AwayROT": "431",
    "Odds": [{
        "ID": "43ba647e-3e0c-42c4-9966-5a9b0bfd5111",
        "EventID": "43ba647e-3e0c-42c4-9966-5a9b0bfd5111",
        "OddType": "Game",
        "MoneyLineAway": "-106",
        "MoneyLineHome": "-110",
        "OverLine": "-105",
        "TotalNumber": "41.0",
        "UnderLine": "-115",
        "PointSpreadAway": "1.0",
        "PointSpreadHome": "-1.0",
        "PointSpreadAwayLine": "-115",
        "PointSpreadHomeLine": "-105",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "ae4299b9-0bbb-4620-a322-93202723d913",
    "HomeTeam": "Philadelphia Eagles",
    "AwayTeam": "Atlanta Falcons",
    "Sport": 4,
    "MatchTime": "2018-09-07T00:20:00",
    "HomeROT": "452",
    "AwayROT": "451",
    "Odds": [{
        "ID": "ae4299b9-0bbb-4620-a322-93202723d913",
        "EventID": "ae4299b9-0bbb-4620-a322-93202723d913",
        "OddType": "Game",
        "MoneyLineAway": "178",
        "MoneyLineHome": "-203",
        "OverLine": "-105",
        "TotalNumber": "46.5",
        "UnderLine": "-115",
        "PointSpreadAway": "4.0",
        "PointSpreadHome": "-4.0",
        "PointSpreadAwayLine": "-107",
        "PointSpreadHomeLine": "-107",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "0c9046a2-89a5-49af-aad2-89487d0b8e19",
    "HomeTeam": "Cleveland Browns",
    "AwayTeam": "Pittsburgh Steelers",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "454",
    "AwayROT": "453",
    "Odds": [{
        "ID": "0c9046a2-89a5-49af-aad2-89487d0b8e19",
        "EventID": "0c9046a2-89a5-49af-aad2-89487d0b8e19",
        "OddType": "Game",
        "MoneyLineAway": "-237",
        "MoneyLineHome": "205",
        "OverLine": "108",
        "TotalNumber": "47.0",
        "UnderLine": "-119",
        "PointSpreadAway": "-5.5",
        "PointSpreadHome": "5.5",
        "PointSpreadAwayLine": "-103",
        "PointSpreadHomeLine": "-111",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "1776489f-5ec2-4839-830c-b6da3c726bb4",
    "HomeTeam": "New England Patriots",
    "AwayTeam": "Houston Texans",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "466",
    "AwayROT": "465",
    "Odds": [{
        "ID": "1776489f-5ec2-4839-830c-b6da3c726bb4",
        "EventID": "1776489f-5ec2-4839-830c-b6da3c726bb4",
        "OddType": "Game",
        "MoneyLineAway": "246",
        "MoneyLineHome": "-285",
        "OverLine": "-103",
        "TotalNumber": "51.0",
        "UnderLine": "-111",
        "PointSpreadAway": "7.0",
        "PointSpreadHome": "-7.0",
        "PointSpreadAwayLine": "-118",
        "PointSpreadHomeLine": "107",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "2b3c2616-dc8b-4cc8-ac60-4937cce9e493",
    "HomeTeam": "Baltimore Ravens",
    "AwayTeam": "Buffalo Bills",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "460",
    "AwayROT": "459",
    "Odds": [{
        "ID": "2b3c2616-dc8b-4cc8-ac60-4937cce9e493",
        "EventID": "2b3c2616-dc8b-4cc8-ac60-4937cce9e493",
        "OddType": "Game",
        "MoneyLineAway": "224",
        "MoneyLineHome": "-257",
        "OverLine": "-106",
        "TotalNumber": "41.0",
        "UnderLine": "-109",
        "PointSpreadAway": "6.0",
        "PointSpreadHome": "-6.0",
        "PointSpreadAwayLine": "101",
        "PointSpreadHomeLine": "-116",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "413d8601-cc61-4820-a251-ce4e363f40e7",
    "HomeTeam": "Indianapolis Colts",
    "AwayTeam": "Cincinnati Bengals",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "458",
    "AwayROT": "457",
    "Odds": [{
        "ID": "413d8601-cc61-4820-a251-ce4e363f40e7",
        "EventID": "413d8601-cc61-4820-a251-ce4e363f40e7",
        "OddType": "Game",
        "MoneyLineAway": "161",
        "MoneyLineHome": "-180",
        "OverLine": "-105",
        "TotalNumber": "46.5",
        "UnderLine": "-110",
        "PointSpreadAway": "3.5",
        "PointSpreadHome": "-3.5",
        "PointSpreadAwayLine": "-113",
        "PointSpreadHomeLine": "-102",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "635dd1d4-00ba-4c3e-8b60-79e71fa85253",
    "HomeTeam": "Miami Dolphins",
    "AwayTeam": "Tennessee Titans",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "468",
    "AwayROT": "467",
    "Odds": [{
        "ID": "635dd1d4-00ba-4c3e-8b60-79e71fa85253",
        "EventID": "635dd1d4-00ba-4c3e-8b60-79e71fa85253",
        "OddType": "Game",
        "MoneyLineAway": "-117",
        "MoneyLineHome": "102",
        "OverLine": "-102",
        "TotalNumber": "45.5",
        "UnderLine": "-112",
        "PointSpreadAway": "-2.0",
        "PointSpreadHome": "2.0",
        "PointSpreadAwayLine": "-105",
        "PointSpreadHomeLine": "-115",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "7283402c-2a3b-4764-af00-ce210c62149c",
    "HomeTeam": "Minnesota Vikings",
    "AwayTeam": "San Francisco 49ers",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "456",
    "AwayROT": "455",
    "Odds": [{
        "ID": "7283402c-2a3b-4764-af00-ce210c62149c",
        "EventID": "7283402c-2a3b-4764-af00-ce210c62149c",
        "OddType": "Game",
        "MoneyLineAway": "202",
        "MoneyLineHome": "-234",
        "OverLine": "-105",
        "TotalNumber": "46.0",
        "UnderLine": "-109",
        "PointSpreadAway": "5.5",
        "PointSpreadHome": "-5.5",
        "PointSpreadAwayLine": "-106",
        "PointSpreadHomeLine": "-108",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "7a74e93f-acdf-42c6-96fa-e43f2eab15c8",
    "HomeTeam": "New Orleans Saints",
    "AwayTeam": "Tampa Bay Buccaneers",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "464",
    "AwayROT": "463",
    "Odds": [{
        "ID": "7a74e93f-acdf-42c6-96fa-e43f2eab15c8",
        "EventID": "7a74e93f-acdf-42c6-96fa-e43f2eab15c8",
        "OddType": "Game",
        "MoneyLineAway": "358",
        "MoneyLineHome": "-422",
        "OverLine": "-107",
        "TotalNumber": "49.5",
        "UnderLine": "-107",
        "PointSpreadAway": "9.5",
        "PointSpreadHome": "-9.5",
        "PointSpreadAwayLine": "-106",
        "PointSpreadHomeLine": "-108",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "a41ce498-ef07-41c5-acdf-5f56780fc2f1",
    "HomeTeam": "New York Giants",
    "AwayTeam": "Jacksonville Jaguars",
    "Sport": 4,
    "MatchTime": "2018-09-09T17:00:00",
    "HomeROT": "462",
    "AwayROT": "461",
    "Odds": [{
        "ID": "a41ce498-ef07-41c5-acdf-5f56780fc2f1",
        "EventID": "a41ce498-ef07-41c5-acdf-5f56780fc2f1",
        "OddType": "Game",
        "MoneyLineAway": "-166",
        "MoneyLineHome": "148",
        "OverLine": "105",
        "TotalNumber": "44.0",
        "UnderLine": "-116",
        "PointSpreadAway": "-3.0",
        "PointSpreadHome": "3.0",
        "PointSpreadAwayLine": "-111",
        "PointSpreadHomeLine": "-103",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "4bb7bf40-f392-4e08-8dce-8d26edec81d4",
    "HomeTeam": "Los Angeles Chargers",
    "AwayTeam": "Kansas City Chiefs",
    "Sport": 4,
    "MatchTime": "2018-09-09T20:05:00",
    "HomeROT": "470",
    "AwayROT": "469",
    "Odds": [{
        "ID": "4bb7bf40-f392-4e08-8dce-8d26edec81d4",
        "EventID": "4bb7bf40-f392-4e08-8dce-8d26edec81d4",
        "OddType": "Game",
        "MoneyLineAway": "160",
        "MoneyLineHome": "-179",
        "OverLine": "-102",
        "TotalNumber": "47.5",
        "UnderLine": "-113",
        "PointSpreadAway": "3.0",
        "PointSpreadHome": "-3.0",
        "PointSpreadAwayLine": "106",
        "PointSpreadHomeLine": "-122",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "1199111a-a2bf-4834-b815-eb4f3f446c9e",
    "HomeTeam": "Carolina Panthers",
    "AwayTeam": "Dallas Cowboys",
    "Sport": 4,
    "MatchTime": "2018-09-09T20:25:00",
    "HomeROT": "474",
    "AwayROT": "473",
    "Odds": [{
        "ID": "1199111a-a2bf-4834-b815-eb4f3f446c9e",
        "EventID": "1199111a-a2bf-4834-b815-eb4f3f446c9e",
        "OddType": "Game",
        "MoneyLineAway": "122",
        "MoneyLineHome": "-138",
        "OverLine": "-109",
        "TotalNumber": "44.0",
        "UnderLine": "-106",
        "PointSpreadAway": "2.5",
        "PointSpreadHome": "-2.5",
        "PointSpreadAwayLine": "-102",
        "PointSpreadHomeLine": "-113",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "36807495-8897-4222-8bab-f6f08fdcfe82",
    "HomeTeam": "Denver Broncos",
    "AwayTeam": "Seattle Seahawks",
    "Sport": 4,
    "MatchTime": "2018-09-09T20:25:00",
    "HomeROT": "472",
    "AwayROT": "471",
    "Odds": [{
        "ID": "36807495-8897-4222-8bab-f6f08fdcfe82",
        "EventID": "36807495-8897-4222-8bab-f6f08fdcfe82",
        "OddType": "Game",
        "MoneyLineAway": "127",
        "MoneyLineHome": "-143",
        "OverLine": "-106",
        "TotalNumber": "42.0",
        "UnderLine": "-108",
        "PointSpreadAway": "2.5",
        "PointSpreadHome": "-2.5",
        "PointSpreadAwayLine": "103",
        "PointSpreadHomeLine": "-118",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "d30f4b57-18db-41a1-9d12-3e2b3a1e3106",
    "HomeTeam": "Arizona Cardinals",
    "AwayTeam": "Washington Redskins",
    "Sport": 4,
    "MatchTime": "2018-09-09T20:25:00",
    "HomeROT": "476",
    "AwayROT": "475",
    "Odds": [{
        "ID": "d30f4b57-18db-41a1-9d12-3e2b3a1e3106",
        "EventID": "d30f4b57-18db-41a1-9d12-3e2b3a1e3106",
        "OddType": "Game",
        "MoneyLineAway": "0",
        "MoneyLineHome": "0",
        "OverLine": "-105",
        "TotalNumber": "44.0",
        "UnderLine": "-115",
        "PointSpreadAway": "0.0",
        "PointSpreadHome": "0.0",
        "PointSpreadAwayLine": "-110",
        "PointSpreadHomeLine": "-110",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "9ca95164-dd85-4c99-8be2-478c01013498",
    "HomeTeam": "Green Bay Packers",
    "AwayTeam": "Chicago Bears",
    "Sport": 4,
    "MatchTime": "2018-09-10T00:20:00",
    "HomeROT": "478",
    "AwayROT": "477",
    "Odds": [{
        "ID": "9ca95164-dd85-4c99-8be2-478c01013498",
        "EventID": "9ca95164-dd85-4c99-8be2-478c01013498",
        "OddType": "Game",
        "MoneyLineAway": "312",
        "MoneyLineHome": "-365",
        "OverLine": "-106",
        "TotalNumber": "47.5",
        "UnderLine": "-108",
        "PointSpreadAway": "8.0",
        "PointSpreadHome": "-8.0",
        "PointSpreadAwayLine": "-113",
        "PointSpreadHomeLine": "-101",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "ffa88251-af4d-4dd0-b643-31a6c54c2256",
    "HomeTeam": "Detroit Lions",
    "AwayTeam": "New York Jets",
    "Sport": 4,
    "MatchTime": "2018-09-10T23:10:00",
    "HomeROT": "480",
    "AwayROT": "479",
    "Odds": [{
        "ID": "ffa88251-af4d-4dd0-b643-31a6c54c2256",
        "EventID": "ffa88251-af4d-4dd0-b643-31a6c54c2256",
        "OddType": "Game",
        "MoneyLineAway": "248",
        "MoneyLineHome": "-286",
        "OverLine": "-109",
        "TotalNumber": "44.0",
        "UnderLine": "-105",
        "PointSpreadAway": "7.0",
        "PointSpreadHome": "-7.0",
        "PointSpreadAwayLine": "-121",
        "PointSpreadHomeLine": "106",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}, {
    "ID": "92d6a4a7-8dac-4911-9973-0c16ae4940b3",
    "HomeTeam": "Oakland Raiders",
    "AwayTeam": "Los Angeles Rams",
    "Sport": 4,
    "MatchTime": "2018-09-11T02:20:00",
    "HomeROT": "482",
    "AwayROT": "481",
    "Odds": [{
        "ID": "92d6a4a7-8dac-4911-9973-0c16ae4940b3",
        "EventID": "92d6a4a7-8dac-4911-9973-0c16ae4940b3",
        "OddType": "Game",
        "MoneyLineAway": "-157",
        "MoneyLineHome": "140",
        "OverLine": "-107",
        "TotalNumber": "49.5",
        "UnderLine": "-103",
        "PointSpreadAway": "-3.0",
        "PointSpreadHome": "3.0",
        "PointSpreadAwayLine": "-107",
        "PointSpreadHomeLine": "-107",
        "DrawLine": "0",
        "SiteID": 11,
        "LastUpdated": "2018-08-16T05:49:47"
    }]
}];

exports.default = nfldata;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nfldata = __webpack_require__(103);

var _nfldata2 = _interopRequireDefault(_nfldata);

var _mlbdata = __webpack_require__(102);

var _mlbdata2 = _interopRequireDefault(_mlbdata);

var _Nav = __webpack_require__(100);

var _Nav2 = _interopRequireDefault(_Nav);

var _Nfl = __webpack_require__(101);

var _Nfl2 = _interopRequireDefault(_Nfl);

var _Mlb = __webpack_require__(99);

var _Mlb2 = _interopRequireDefault(_Mlb);

var _Gameselected = __webpack_require__(97);

var _Gameselected2 = _interopRequireDefault(_Gameselected);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.handleBetRisk = function (item, win, bet) {
      _this.setState(function (state) {
        return {
          gameSelected: state.gameSelected.map(function (i) {
            if (i === item) {
              return _extends({}, i, { win: win, risk: bet });
            } else {
              return i;
            }
          })
        };
      });
    };

    _this.gameLoopNfl = function () {
      return _this.state.nfldata.map(function (item) {
        return _react2.default.createElement(
          'div',
          { className: 'games-container', key: item.ID },
          _react2.default.createElement(
            'div',
            { className: 'games match-time' },
            _react2.default.createElement(
              'h5',
              null,
              _this.convertTime(item.MatchTime)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'gamelist' },
            _react2.default.createElement(
              'div',
              { className: 'games teams' },
              _react2.default.createElement(
                'h5',
                { className: 'hometeam' },
                item.AwayTeam
              )
            ),
            _react2.default.createElement(
              'h5',
              { className: 'spread', onClick: function onClick(e) {
                  return _this.wagersAwaySpread(item);
                } },
              item.Odds[0].PointSpreadAway,
              ' (',
              item.Odds[0].PointSpreadAwayLine,
              ')'
            ),
            _react2.default.createElement(
              'h5',
              { className: 'moneyline', onClick: function onClick(e) {
                  return _this.wagersAwayMoneyLine(item);
                } },
              item.Odds[0].MoneyLineAway
            ),
            _react2.default.createElement(
              'h5',
              { className: 'total', onClick: function onClick(e) {
                  return _this.wagersAwayTotalOver(item);
                } },
              '0 ',
              item.Odds[0].TotalNumber,
              ' ( ',
              item.Odds[0].OverLine,
              ' )'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'gamelist' },
            _react2.default.createElement(
              'div',
              { className: 'games teams' },
              _react2.default.createElement(
                'h5',
                { className: 'hometeam' },
                item.HomeTeam
              )
            ),
            _react2.default.createElement(
              'h5',
              { className: 'spread', onClick: function onClick(e) {
                  return _this.wagersHomeSpread(item);
                } },
              item.Odds[0].PointSpreadHome,
              ' (',
              item.Odds[0].PointSpreadHomeLine,
              ')'
            ),
            _react2.default.createElement(
              'h5',
              { className: 'moneyline', onClick: function onClick(e) {
                  return _this.wagersHomeMoneyLine(item);
                } },
              item.Odds[0].MoneyLineHome
            ),
            _react2.default.createElement(
              'h5',
              { className: 'total', onClick: function onClick(e) {
                  return _this.wagersHomeTotalUnder(item);
                } },
              'U ',
              item.Odds[0].TotalNumber,
              ' ( ',
              item.Odds[0].UnderLine,
              ' )'
            )
          )
        );
      });
    };

    _this.convertTime = function (convert) {
      var date = new Date(convert);
      return date.toLocaleString(); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    };

    _this.cancelBet = function (name) {
      _this.setState({
        gameSelected: _this.state.gameSelected.filter(function (el) {
          return el !== name;
        })
      });
    };

    _this.wagersHomeSpread = function (item) {
      var currentWagers = _this.state.gameSelected;
      var line = item.Odds[0].PointSpreadHome;
      var juice = item.Odds[0].PointSpreadHomeLine;
      var teamChosen = item.HomeTeam;
      var matchTime = item.MatchTime;
      var currentBet = {
        ID: item.ID,
        Details: item.Details,
        teamChosen: teamChosen,
        wagerType: "spread",
        juice: juice,
        line: line,
        matchTime: matchTime,
        risk: '',
        win: ''

      };
      var allBets = [].concat(_toConsumableArray(currentWagers), [currentBet]);
      var allUniqueBets = [].concat(_toConsumableArray(new Set(allBets.map(function (a) {
        return a;
      }))));
      _this.setState({
        gameSelected: allUniqueBets
      });
    };

    _this.wagersHomeMoneyLine = function (item) {
      var currentWagers = _this.state.gameSelected;
      var line = item.Odds[0].MoneyLineHome;
      var juice = item.Odds[0].MoneyLineHome;
      var teamChosen = item.HomeTeam;
      var matchTime = item.MatchTime;
      var currentBet = {
        ID: item.ID,
        Details: item.Details,
        teamChosen: teamChosen,
        wagerType: "moneyline",
        juice: juice,
        line: line,
        matchTime: matchTime,
        risk: '',
        win: ''
      };
      var allBets = [].concat(_toConsumableArray(currentWagers), [currentBet]);
      var allUniqueBets = [].concat(_toConsumableArray(new Set(allBets.map(function (a) {
        return a;
      }))));
      _this.setState({
        gameSelected: allUniqueBets
      });
    };

    _this.wagersHomeTotalUnder = function (item) {
      var currentWagers = _this.state.gameSelected;
      var line = item.Odds[0].TotalNumber;
      var juice = item.Odds[0].UnderLine;
      var teamChosen = item.HomeTeam;
      var matchTime = item.MatchTime;;
      var currentBet = {
        ID: item.ID,
        Details: item.Details,
        teamChosen: "under",
        wagerType: "total",
        juice: juice,
        line: line,
        matchTime: matchTime,
        risk: '',
        win: ''

      };
      var allBets = [].concat(_toConsumableArray(currentWagers), [currentBet]);
      var allUniqueBets = [].concat(_toConsumableArray(new Set(allBets.map(function (a) {
        return a;
      }))));
      _this.setState({
        gameSelected: allUniqueBets
      });
    };

    _this.wagersAwaySpread = function (item) {
      var currentWagers = _this.state.gameSelected;
      var line = item.Odds[0].PointSpreadAway;
      var juice = item.Odds[0].PointSpreadAwayLine;
      var teamChosen = item.AwayTeam;
      var matchTime = item.MatchTime;
      var currentBet = {
        ID: item.ID,
        Details: item.Details,
        teamChosen: teamChosen,
        wagerType: "spread",
        juice: juice,
        line: line,
        matchTime: matchTime,
        risk: '',
        win: ''
      };
      var allBets = [].concat(_toConsumableArray(currentWagers), [currentBet]);
      var allUniqueBets = [].concat(_toConsumableArray(new Set(allBets.map(function (a) {
        return a;
      }))));
      _this.setState({
        gameSelected: allUniqueBets
      });
    };

    _this.wagersAwayMoneyLine = function (item) {
      var _currentBet;

      var currentWagers = _this.state.gameSelected;
      var line = item.Odds[0].MoneyLineAway;
      var juice = item.Odds[0].MoneyLineAway;
      var teamChosen = item.AwayTeam;
      var matchTime = item.MatchTime;
      var currentBet = (_currentBet = {
        ID: item.ID,
        Details: item.Details,
        teamChosen: teamChosen,
        wagerType: "moneyline",
        juice: juice,
        line: line,
        matchTime: matchTime,
        risk: '',
        win: ''
      }, _defineProperty(_currentBet, 'risk', ''), _defineProperty(_currentBet, 'win', ''), _currentBet);
      var allBets = [].concat(_toConsumableArray(currentWagers), [currentBet]);
      var allUniqueBets = [].concat(_toConsumableArray(new Set(allBets.map(function (a) {
        return a;
      }))));
      _this.setState({
        gameSelected: allUniqueBets
      });
    };

    _this.wagersAwayTotalOver = function (item) {
      var currentWagers = _this.state.gameSelected;
      var line = item.Odds[0].TotalNumber;
      var juice = item.Odds[0].OverLine;
      var teamChosen = item.AwayTeam;
      var matchTime = item.MatchTime;

      var currentBet = {
        ID: item.ID,
        Details: item.Details,
        teamChosen: "over",
        wagerType: "total",
        juice: juice,
        line: line,
        matchTime: matchTime,
        risk: '',
        win: ''
      };
      var allBets = [].concat(_toConsumableArray(currentWagers), [currentBet]);
      var allUniqueBets = [].concat(_toConsumableArray(new Set(allBets.map(function (a) {
        return a;
      }))));
      _this.setState({
        gameSelected: allUniqueBets
      });
    };

    _this.state = {
      nfldata: _nfldata2.default,
      gameSelected: []
    };
    return _this;
  }

  // changes gameslected object based on users input of Risk bet in gameSelected.js


  //Loops through the nfl data and displays all games for spread, moneyline, and total.


  //converts UTC to PST game time


  //is called from gameSelected.js which passes in the item to cancel a bet.


  //NFL Home Teams

  // NFL Away teams


  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-container' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Nav2.default, null),
        _react2.default.createElement(_Mlb2.default, { gameLoopNfl: this.gameLoopNfl }),
        _react2.default.createElement(_Gameselected2.default, { gameSelected: this.state.gameSelected,
          cancelBet: this.cancelBet,
          wagers: this.state.wagers,
          handleBetRisk: this.handleBetRisk,
          convertTime: this.convertTime })
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__(132);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gameselected = function (_Component) {
  _inherits(Gameselected, _Component);

  function Gameselected() {
    _classCallCheck(this, Gameselected);

    var _this = _possibleConstructorReturn(this, (Gameselected.__proto__ || Object.getPrototypeOf(Gameselected)).call(this));

    _this.cancelBet = function (item) {
      _this.props.cancelBet(item);
    };

    _this.handleBetRisk = function (e, item) {
      var bet = e.target.value;
      if (item.juice < 0) {
        var calcBet = function calcBet(bet) {
          var newAmount = 100 / item.juice * bet;
          return newAmount;
        };
        var win = calcBet(bet);
        win = Math.round(win * 100) / 100;
        win = Math.abs(win);
        _this.props.handleBetRisk(item, win, bet);
      } else {
        var _calcBet = function _calcBet(bet) {
          var newAmount = item.juice * .01 * bet;
          return newAmount;
        };
        var _win = _calcBet(bet);
        _win = Math.round(_win * 100) / 100;
        _this.props.handleBetRisk(item, _win, bet);
      }
    };

    _this.displaySelectedBets = function () {
      var games = _this.props.gameSelected;
      return games.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'game-selected-container', key: i },
          _react2.default.createElement(
            'div',
            { className: 'close-btn', onClick: function onClick() {
                return _this.cancelBet(item);
              } },
            _react2.default.createElement('img', { src: './img/sportIcons/close-btn.svg' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'bet-container' },
            _react2.default.createElement(
              'div',
              { className: 'bet-chosen' },
              _react2.default.createElement(
                'span',
                { className: 'teamChozen' },
                item.teamChosen,
                '  ',
                item.line > 0 && item.wagerType === 'moneyline' || item.line > 0 && item.wagerType === 'spread' ? '+ ' + item.line : item.line,
                ' '
              ),
              _react2.default.createElement(
                'span',
                { className: 'wager-type' },
                item.wagerType
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'wager-type' },
              item.wagerType === 'moneyline' ? '' : item.juice
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'match-container' },
            _react2.default.createElement(
              'span',
              { className: 'game' },
              item.Details
            ),
            _react2.default.createElement(
              'span',
              { className: 'match-time' },
              _this.props.convertTime(item.matchTime)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'wager-amount' },
            _react2.default.createElement(
              'div',
              { className: 'group-risk' },
              _react2.default.createElement('input', { type: 'number', name: 'risk', value: item.risk, onChange: function onChange(e) {
                  return _this.handleBetRisk(e, item);
                } }),
              _react2.default.createElement(
                'span',
                null,
                'Risk'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'group-winbox' },
              _react2.default.createElement(
                'h5',
                null,
                item.win
              ),
              _react2.default.createElement(
                'span',
                null,
                'Win'
              )
            )
          )
        );
      });
    };

    _this.totalMoneyRisked = function () {
      var s = _lodash2.default.reduce(_this.props.gameSelected, function (s, entry) {
        return s + parseFloat(entry.risk);
      }, 0);
      s = Math.abs(Math.round(s * 100) / 100);
      return s;
    };

    _this.totalMoneyWinPossible = function () {
      var s = _lodash2.default.reduce(_this.props.gameSelected, function (s, entry) {
        return s + parseFloat(entry.win);
      }, 0);
      s = Math.abs(Math.round(s * 100) / 100);

      return s;
    };

    _this.state = {};
    return _this;
  }

  //passes the item to parent container method to filter/cancel a bet when user clicks the cancel icon

  // Takes in the bet amount and passes the newly calculated risk & win amount to the parent method, to update the state of gameselected with it.


  // displays/renders all bets the user has selected to bet on

  //Updates the toal amount the user is wanting to wager on the current betslip

  //Updates the toal amount the user can win based on total bets on the current betslip


  _createClass(Gameselected, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'game-selected' },
        _react2.default.createElement(
          'h1',
          null,
          'Bet Slip'
        ),
        this.displaySelectedBets(),
        _react2.default.createElement(
          'div',
          { className: 'wager-confirmation-container' },
          _react2.default.createElement(
            'div',
            { className: 'confirmation-group bets' },
            _react2.default.createElement(
              'h5',
              null,
              'Total Bets:'
            ),
            _react2.default.createElement(
              'h5',
              null,
              this.props.gameSelected.length
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'confirmation-group bet-risk' },
            _react2.default.createElement(
              'h5',
              null,
              'Total Stake:'
            ),
            _react2.default.createElement(
              'h5',
              null,
              ' ',
              isNaN(this.totalMoneyRisked()) ? ' Fill-in bet' : '$' + this.totalMoneyRisked()
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'confirmation-group bet-win' },
            _react2.default.createElement(
              'h5',
              null,
              'Possible Winnings'
            ),
            _react2.default.createElement(
              'h5',
              null,
              ' ',
              isNaN(this.totalMoneyWinPossible()) ? '' : '$' + this.totalMoneyWinPossible()
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'text' },
            'Place Wager'
          )
        )
      );
    }
  }]);

  return Gameselected;
}(_react.Component);

exports.default = Gameselected;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'header-logo' },
          _react2.default.createElement('img', { src: './img/sportIcons/nflLogo.svg' })
        ),
        _react2.default.createElement('div', { className: 'account-section' }),
        _react2.default.createElement(
          'div',
          { className: 'sport-icons' },
          _react2.default.createElement(
            'div',
            { className: 'sports-group' },
            _react2.default.createElement('img', { src: '/img/sportIcons/soccer.svg' }),
            _react2.default.createElement('img', { src: '/img/sportIcons/football.svg' }),
            _react2.default.createElement('img', { src: '/img/sportIcons/mma.svg' }),
            _react2.default.createElement('img', { src: '/img/sportIcons/baseball.svg' })
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mlb = function Mlb(props) {

  return _react2.default.createElement(
    'div',
    { id: 'nfl-section' },
    _react2.default.createElement(
      'div',
      { className: 'games-section' },
      _react2.default.createElement(
        'div',
        { className: 'title-headers' },
        _react2.default.createElement(
          'div',
          { className: 'game-header' },
          _react2.default.createElement(
            'h5',
            null,
            'Team'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'spread-header' },
          _react2.default.createElement(
            'h5',
            null,
            'Spread'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'moneyline-header' },
          _react2.default.createElement(
            'h5',
            null,
            'MoneyLine'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'overunder-header' },
          _react2.default.createElement(
            'h5',
            null,
            'Total'
          )
        )
      ),
      props.gameLoopNfl()
    )
  );
};
exports.default = Mlb;

/***/ })

},[105]);