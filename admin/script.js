// angular js json code
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
var dept=[{sno:1,dcode:"mca01",dname:"MCA",dtype:"Academic"},{sno:2,dcode:"it02",dname:"IT",dtype:"Academic"},{sno:3,dcode:"cse03",dname:"CSE",dtype:"Academic"},{sno:4,dcode:"101",dname:"Accounts",dtype:"NonAcademic"}];


var academic=[{sno:1,Start_Month_Year:"jun-2016",End_Month_Year:"may-2017",Status:"Active"},{sno:2,Start_Month_Year:"jun-2015",End_Month_Year:"may-2016",Status:"Deactive"},{sno:3,Start_Month_Year:"jun-2014",End_Month_Year:"may-2015",Status:"Deactive"},{sno:4,Start_Month_Year:"jun-2013",End_Month_Year:"may-2014",Status:"Deactive"}];

 $scope.academicyear=[
        {Id : 1, name : "2015-2016" },
        {Id : 2, name : "2016-2017"},
        {Id : 3, name : "2017-2018"}
    ];

    var sec=[{sno:1,sname:"A"},{sno:2,sname:"B"},{sno:3,sname:"C"},{sno:4,sname:"D"}];

var exam=[{sno:1,ename:"TERM-1",date:"15/3/2017"},{sno:2,ename:"TERM-2",date:"15/4/2017"},{sno:3,ename:"TERM-3",date:"25/4/2017"},{sno:4,ename:"TERM-4",date:"15/5/2017"}];

var mark=[{id:1,sno:1,regno:"14car01",name:"Vijay",tamil:90,english:90,maths:90,science:90,socialscience:90,total:450,avg:90,result:"pass",grade:"A",
attendance:90,img:"2.jpg"},{id:2,sno:2,regno:"14car02",name:"sakthi",tamil:80,english:80,maths:80,science:80,socialscience:80,total:400,avg:80,result:"pass",grade:"B",
attendance:80,img:"1.jpg"},{id:3,sno:3,regno:"14car03",name:"kiruthiga",tamil:70,english:70,maths:70,science:70,socialscience:70,total:350,avg:70,result:"pass",grade:"C",
attendance:70}]
$scope.selectedacademicyear = angular.copy($scope.academicyear[0]);
$scope.dept=dept;
$scope.rowLimit=20;
$scope.sortcol="sno";
$scope.reversesort=false;
$scope.clg=clg;
$scope.academic=academic;
$scope.sec=sec;
$scope.exam=exam;
$scope.mark=mark;
$scope.sortData=function (column)
{

$scope.reversesort=($scope.sortcol==column)? !$scope.reversesort: false;
$scope.sortcol=column;
}
$scope.getsortclass=function(column)
{
  if($scope.sortcol==column){
    return $scope.reversesort?'arrow-down':'arrow-up'
  }
  return '';

}

    });
// settings function
		 
 function fun1()
{
  
  document.getElementById('TableView1').style.display="inline";
        $('#modal1').modal('show');
    
}

function fun3()
{
  
  document.getElementById('TableView3').style.display="inline";
        $('#modal3').modal('show');
        $('#example7').calendar({
  type: 'month'
});
        $('#example8').calendar({
  type: 'month'
});
     
}

function fun4()
{
  
  document.getElementById('TableView4').style.display="inline";
      $('#modal4').modal('show');
   
}
function fun6()
{
  
  document.getElementById('TableView6').style.display="inline";
        $('#modal6').modal('show');

}


// examination functions

function fun7()
{
  
  document.getElementById('TableView7').style.display="inline";
      $('#modal7').modal('show');
   
}
function fun9()
{
  
  document.getElementById('TableView9').style.display="inline";
        $('#modal9').modal('show');

}

function exam1()
{
 
 var dept1 = document.getElementById("dept-select");
 var value2 = dept1.value;
 var exam1 = document.getElementById("section-select");
 var value3 = exam1.value;
 
 if (value2 == "") { 
    alert("Please select a department");
 }
 else if (value3 == "") { 
    alert("Please select a section");
 }

else
{
  document.getElementById('exam1').style.display="inline";

}

}

 
     function exam2()
{
 var year= document.getElementById("academic-select");
 var value1= year.value;
 var dept1 = document.getElementById("dept-select");
 var value2 = dept1.value;
 var exam1 = document.getElementById("section-select");
 var value3 = exam1.value;
 var exam1 = document.getElementById("exam-select");
 var value4 = exam1.value;
 if (value1 == "") {
    alert("Please select academic_year");
 } else if (value2 == "") { 
    alert("Please select a department");
 }
 else if (value3 == "") { 
    alert("Please select a section");
 }
 else if (value4 == "") { 
    alert("Please select a exam");
 }
else
{
  document.getElementById('examshow').style.display="inline";

}

}
