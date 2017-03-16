var app = angular.module('myApp', []);

app.controller('books',function($scope)
{

var employee=[
{id:1,regno:"13IT028",Image: "images/1.jpg",name:"kavitha",gender:"female",DOB:new Date("March 7,1994"), releaving:"Medical"},
{id:2,regno:"13IT001",Image: "images/1.jpg",name:"bhagesh",gender:"male",DOB:new Date("september 10,1995"),releaving:"Marriage"},
{id:3,regno:"13IT004",Image: "images/1.jpg",name:"sakthi",gender:"female",DOB:new Date("March 17,1994"), releaving:"Transfer"},
{id:4,regno:"13IT022",Image: "images/1.jpg",name:"vinoth",gender:"male",DOB:new Date("april 7,1996"), releaving:"Not Interested"}
];

$scope.employee=employee;
$scope.rowLimit=100;
$scope.sortcol="name";
$scope.reversesort=false;
 
});