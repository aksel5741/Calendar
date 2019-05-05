var a=document.getElementById('month');
var m=moment();
var oop;
var day=document.querySelectorAll('.dayss div');
var cur_day=document.getElementById("curr_day");
var add=document.getElementById('practice');
var m2=moment(m);
var dayArr=[];
var d_week=['Sunday',0,'Monday',1,'Tuesday',2,'Wednesday',3,'Thursday',4,'Friday',5,'Saturday',6]; 
var to_do_list=[
{date:"2.5.2019", event:[{name:"home", body:"buy milk",time:"12:00"}]},
{date:"20.5.2019", event:[{name:"job", body:"clean",time:"11:00"}]},
{date:"25.6.2019", event:[{name:"job", body:"write a letter",time:"8:00"}]},
{date:"15.5.2019", event:[{name:"home", body:"call Mark",time:"1:00"}]},
{date:"20.5.2019", event:[{name:"home", body:"cook cake",time:"13:00"}]}
];
window.onload=t_month();


function event_check(mark,mm) {
   	for (var i = 0; i < to_do_list.length; i++) {
   		if(mm.format(mark+'.M.YYYY')==to_do_list[i].date)return true;
   		}
   }
function list_setup() {
	delet_event();
   	var p=this.innerHTML;
   	var mu=moment(m2.format(p+'.M.YYYY'), "DD-MM-YYYY");
   	console.log(mu);
   	cur_day.innerHTML=mu.format('dddd') + ', ' +p+' '+m2.format('MMMM');
 	for (var i = 0; i < to_do_list.length; i++) {
  		if(to_do_list[i].date==m2.format(p+'.M.YYYY') ||to_do_list[i].date==m.format(p+'.M.YYYY') || to_do_list[i].date==moment().format('D.M.YYYY')){
  			add.insertAdjacentHTML("afterbegin", "<div id=\"practice_today\"> <p id=\"default\">"+to_do_list[i].event[0].name+"</p><p id=\"time_prac\">"+to_do_list[i].event[0].time+"</p><p id=\"prac_name\">"+to_do_list[i].event[0].body+"</p></div>");
  		}
  }
 }
   function event_setup(el) {
   //	week_day=el.format('dddd');
   	event_style_setup(el); 
   	el.onclick=list_setup;
   	
   }
   function delet_event() {
   var del=document.getElementById('practice_today');
  	 if(del!=null){
   		del.remove();
   		delet_event();
   	}
   }
   function event_style_setup(el) {
   	el.style.cssText="border-radius:10px;"
	el.style.background="#0B3157";
	el.style.color='#FFFFFF';
	el.style.cursor='pointer';
   }
    function style_setup(el) {
   	el.style.cssText="border-radius:0px;"
	el.style.background="#FFFFFF";
	el.style.color='#0B3157';
	el.style.cursor='auto';
   }
   

function red_bull(i){
	day[i].insertAdjacentHTML("afterbegin", "<b>&bull;</b>");
}
function reaction(el){
     m2=moment(el);
    var m3=moment(m2).startOf('month');	
	a.innerHTML=m2.format('MMMM');
	add.innerHTML='';
	cur_day.innerHTML='';
		for (var i = 0; i < day.length; i++) {
 				day[i].innerHTML='';
 				day[i].onclick=null;
 				day[i]. removeEventListener('onclick',list_setup);
 				style_setup(day[i]);
 			}
 	var k=0;
	for (var i = 0; i <= d_week.length; i++) {
 		if(m3.format('dddd')==d_week[i]){
 			k=d_week[i+1];
 			break;
 			}
 		i++;
 	}
 	var y=moment(m3);
 	y.add(1,'M');
	for (var i = 0;m3.format('MMMM')!=y.format('MMMM'); i++) {
		dayArr[i]=m3.format('D');
 		(m3.add(1,'d'));
	}
	var b=0;
	for (var i = k; b < dayArr.length; i++) {
		 day[i].innerHTML= dayArr[b];
		 if(day[i].innerHTML==m2.format('D') & m2.format("MMMM Do YYYY")==m.format("MMMM Do YYYY"))red_bull(i);
		if(event_check(dayArr[b],m2)==true){
			event_setup(day[i]);
		}
		 b++;
		}
		dayArr=[];
		weekend();
   }
var m1=moment(m2);
function next(){
	if(document.getElementById('prev').innerHTML=='prev'){t_week(m1.add(1,'week'));return;}
var next=document.getElementById('next');
var prev=document.getElementById('prev');
prev.innerHTML=m2.format("MMM");
m2=m2.add(1,'M');
var m3=moment(m2);
next.innerHTML=m3.add(1,'M').format("MMM");
if(m2==m){this_month();return;}
reaction(m2);
}

function prev(){
	if(document.getElementById('prev').innerHTML=='prev'){t_week(m1.subtract(1,'week'));return;}
var prev=document.getElementById('prev');
var next=document.getElementById('next');
next.innerHTML=m2.format("MMM");
m2=m2.subtract(1,'M');
var m3=moment(m2);
prev.innerHTML=m3.subtract(1,'M').format("MMM");
if(m2==m){this_month();return;}
reaction(m2);
}

function that(){
	document.getElementById('this').style.display='flex';
    document.getElementById('weekdays').style.display='none';
}

function t_month(){
document.getElementById('this').style.display='none';
document.getElementById('weekdays').style.display='block';
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var m4=moment(m);
next.innerHTML=m4.add(1,'M').format("MMM");
prev.innerHTML=m4.subtract(2,'M').format("MMM");
reaction(m);
}
function t_week(m1){
 document.getElementById('this').style.display='none';
 document.getElementById('weekdays').style.display='block';
 var prev=document.getElementById('prev');
 prev.innerHTML='prev';
 var next =document.getElementById('next');
 next.innerHTML='next';
 var callerName = new String;
 var m5;
 callerName = arguments.callee.caller.name;
 if(callerName=='onclick'){m5=moment(m);}
 else m5=moment(m1);
 m5.day(0);

 var month=document.getElementById('month');
	cur_day.innerHTML='';
	add.innerHTML='';
 month.innerHTML= m5.format('MMMM')+' '+m5.format('D')+'-'+m5.add(6,'d').format('D');
 m5.day(0);
 for (var i = 0; i < day.length; i++) {
 				day[i].innerHTML='';
 				day[i].onclick=null;
 				day[i]. removeEventListener('onclick',list_setup);
 				style_setup(day[i]);
  			}
 for (var i = 0;i<=6; i++) {
		dayArr[i]=m5.format('D');
 		(m5.add(1,'d'));
	}
	for (var i = 0; i < dayArr.length; i++) {
		 day[i].innerHTML= dayArr[i];
		 if(event_check(dayArr[i],m5)==true){
		
			event_setup(day[i]);
		}
		if(m.format("D MMMM YYYY")==m5.format(day[i].innerHTML+" MMMM YYYY"))red_bull(i);
    }
		dayArr=[];
		weekend();
     
}
function weekend() {
	for (var i = 0; i < 36; i++) {
	if(i==0||i==6||i==7||i==13||i==14||i==20||i==21||i==27||i==28||i==34||i==35){
		day[i].style.color='red';	
	}
}
}



