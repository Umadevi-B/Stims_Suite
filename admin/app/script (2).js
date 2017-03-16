var app=angular.module("myapp",[]).controller("mycontroller",function($scope)
    {
var clg={
code:01,
name:"SAN TECHNO SOLUTIONS",
img:"1.jpg",
dno_street:"12-E.K.VALASU",
city:"ERODE",
state:"TAMILNADU",
country:"INDIA",
zipcode:638011,
phone:22454,
mobile:9098765432,
faxno:22143,
contact_person:"Mr.ADMIN",
established_on:"01/01/2017",
academic_year_from:"JUN-2016",
academic_year_to:"MAY-2017"
};
$scope.clg=clg;
});