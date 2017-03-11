var app = angular.module('myApp', []);

app.controller('menu',['$scope',function($scope)
{
$scope.items = [

 { "id": 1, 
 "text": "Home", 
 "icon": "icon-home3", 
 "submenu": "file-menu.json", 
 "hasChildren": true,
		"menulist": [
				 { "id": 11, 
				"text": "logout"},

				 ]},
		

{ "id": 2, 
"text": "Teachers",
 "icon": "icon-user-tie", 
 "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "Add Teacher"},

				 { "id": 12, 
				 "text": "Delete Teacher"},

				 ]},

{ "id": 3,
 "text": "Students",
  "icon": "icon-user",
   "hasChildren": true,
   "menulist": [
				 { "id": 11, 
				"text": "view Students"},

				 { "id": 12, 
				 "text": "Add student"},

				 ]},

{ "id": 4, 
"text": "Timetable",
 "icon": "icon-calendar", 
 "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "view Subjects"},

				 { "id": 12, 
				 "text": "view staffs"},

				 ]},

 { "id": 5, 
 "text": "Attendance", 
 "icon": "icon-clipboard", 
 "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "view sub attendance"},

				 { "id": 12, 
				 "text": "view marks"},

				 ]},

 { "id": 6, 
"text": "Examination",
 "icon": "icon-pencil", 
 "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "view exam date"},

				 { "id": 12, 
				 "text": "view subjects"},

				 ]},

 { "id": 7,
 "text": "Payroll",
  "icon": "icon-database",
   "hasChildren": true ,
 "menulist": [
				 { "id": 11, 
				"text": "view salary"},

				 { "id": 12, 
				 "text": "view pending"},

				 ]},

{ "id": 8, 
"text": "Finance",
 "icon": "icon-briefcase", 
 "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "view tution fees"},

				 { "id": 12, 
				 "text": "view transport fees"},

				 ]},

 { "id": 9,
 "text": "Emergency",
  "icon": "icon-plus",
   "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "Add emergency case"},

				 { "id": 12, 
				 "text": "view emergency"},

				 ]},

{ "id": 10, 
"text": "Transport",
 "icon": "icon-truck", 
 "hasChildren": true,
 "menulist": [
				 { "id": 11, 
				"text": "view Transport"},

				 { "id": 12, 
				 "text": "view fees"},

				 ]},

];

$scope.data=[
		{ "option":"c"},
		{ "option":"c++"},
		{ "option":"c#"},
		{ "option":"Java"},
		{ "option":"Erlang"},
		{ "option":"Python"},
		{ "option":"Perl"},
		{ "option":"Ruby"},
		{ "option":"Html"},
		{ "option":"css"},
		{ "option":"Javascript"},
		{ "option":"Jquery"},
		{ "option":"JSON"}

	];
}]);
