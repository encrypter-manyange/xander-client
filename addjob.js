
var waiting_list=[];
var processing_jobs=[];
var previousdiv="mydiv";
var counterer =0;
		
    function addjob(){
      var arrival_time=document.getElementById("arrivall").value;
      var job_name = "Job-"+counterer;
      var id="meee";
      var burst = document.getElementById("burst").value;
      var priority = document.getElementById("priority").value;

      var todo=new job(burst,arrival_time,priority,job_name,id);
      var nyjob={"jobname":job_name,"jobburst":burst,"jobarrival":arrival_time,"priority":priority}
      waiting_list.push(nyjob);
      var d1 = document.getElementById('w0');
      if(counterer%8==0){
        var content='<br /><br /><span  class=myclass id='+todo.getid+">"+todo.getjobname+"|"+todo.getarrivaltime+"|"+todo.getburst+"|"+todo.getpriority+"</span>"
      d1.insertAdjacentHTML('beforeend', content);
      }
      else{
         var content='<span class=myclass id='+todo.getid+">"+todo.getjobname+"</span>"
         d1.insertAdjacentHTML('beforeend', content);
      }
      counterer+=1;

      console.log(waiting_list);


    }

