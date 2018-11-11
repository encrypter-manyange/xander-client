
var waiting_list=[];
var processing_jobs=[];
var previousdiv="mydiv";
		
    function addjob(){
      var arrival_time=document.getElementById("arrivall").value;
      var job_name = document.getElementById("jobname").value;;
      var id="meee";
      var burst = document.getElementById("burst").value;
      var priority = document.getElementById("priority").value;

      var todo=new job(burst,arrival_time,priority,job_name,id);
      var nyjob={"jobname":job_name,"jobburst":burst,"jobarrival":arrival_time,"priority":priority}
      waiting_list.push(nyjob);
      var d1 = document.getElementById('w0');
      var content='<span class=myclass id='+todo.getid+">"+todo.getjobname+"</span>"
      d1.insertAdjacentHTML('beforeend', content);
      console.log(waiting_list);


    }

