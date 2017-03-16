var app = angular.module('myApp', []);

app.controller('books',function($scope)
{

var employee=[
{sno:1,IDno:"13IT028",name: "Mr.Admin",subject:"Hi.. Welcome to anunaul day function",Attachment:"header.html",time:"21-2-2016 12:02:12", reply:"1"},
{sno:2,IDno:"13IT001",name: "Student",subject:"I am absent today",Attachment:"",time:"02-6-2016 15:02:12", reply:"0"},
{sno:3,IDno:"13IT004",name: "Teacher",subject:"I need stipen for this month",Attachment:"footer.html",time:"05-7-2017 05:35:12", reply:"1"},
{sno:4,IDno:"13IT022",name: "Staff",subject:"I am unable to come for one month",Attachment:"admin.js",time:"10-10-2017 23:25:06", reply:"1"}
];

$scope.employee=employee;
$scope.rowLimit=100;
$scope.sortcol="name";
$scope.reversesort=false;
 
            });