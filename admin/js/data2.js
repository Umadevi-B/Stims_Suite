var app = angular.module('myApp', []);

app.controller('books',function($scope)
{

var employee=[
{id:1,subject_name: "Maths",subject_code:"13GE011",staff:"Anupriya",staff_id:"ATS001"},
{id:2,subject_name: "Science",subject_code:"13IT022",staff:"Bhavana",staff_id:"ATS101"},
{id:3,subject_name: "Social",subject_code:"13IT211",staff:"Vignesh",staff_id:"ATS201"},
{id:4,subject_name: "English",subject_code:"14IT212",staff:"Dinesh",staff_id:"ATS102"}
];

$scope.employee=employee;
$scope.rowLimit=100;
$scope.sortcol="name";
$scope.reversesort=false;
 
});