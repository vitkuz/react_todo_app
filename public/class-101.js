'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var fullname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anoni Mus';

    _classCallCheck(this, Person);

    this.name1 = fullname.split(' ')[0];
    this.name2 = fullname.split(' ')[1];
  }

  _createClass(Person, [{
    key: 'firstName',
    value: function firstName() {
      return this.name1;
    }
  }, {
    key: 'lastName',
    value: function lastName() {
      return this.name2;
    }
  }, {
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hello ' + this.name1;
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(fullname) {
    var grade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, fullname));

    _this.grade = grade;
    return _this;
  }

  _createClass(Student, [{
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getGreeting', this).call(this);
      if (this.hasGrade()) {
        greeting += '!!! ' + this.grade;
      }
      return greeting;
    }
  }, {
    key: 'hasGrade',
    value: function hasGrade() {
      return !!this.grade;
    }
  }]);

  return Student;
}(Person);

var me = new Person('Vitali Kuzmenka');
var student = new Student('Varvara Turovets', 4);

console.log(me);
console.log(student);
console.log(student.getGreeting());
