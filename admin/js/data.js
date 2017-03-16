var app = angular.module('myApp', []);

app.controller('books',function($scope)
{

var employee=[
{id:1,regno:"13IT028",Image: "images/Tulips.jpg",name:"kavitha",gender:"female",DOB:new Date("March 7,1994"),Activity:"quiz"},
{id:2,regno:"13IT001",Image: "images/Tulips.jpg",name:"bhagesh",gender:"male",DOB:new Date("september 10,1995"),Activity:"Workshop"},
{id:3,regno:"13IT004",Image: "images/Tulips.jpg",name:"sakthi",gender:"female",DOB:new Date("March 17,1994"),Activity:"Presentation"},
{id:4,regno:"13IT022",Image: "images/Tulips.jpg",name:"vinoth",gender:"male",DOB:new Date("april 7,1996"),Activity:"Quiz"}
];

$scope.employee=employee;
$scope.rowLimit=100;
$scope.sortcol="name";
$scope.reversesort=false;
 
});