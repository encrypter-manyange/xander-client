class job {
  constructor(burst, arrival_time,priority,job_name,jobid) {
    this.burst = burst;
    this.arrival_time = arrival_time;
    this.priority=priority;
     this.job_name=job_name;
  }
  get getburst() {
    return this.burst;
  }

  get getjobid() {
    return this.jobid;
  }

  set setburst(burst) {
    this.burst=burst;
  }

  get getjobname() {
    return this.job_name;
  }
  
get getarrivaltime() {
    return this.arrival_time;
  }

  set setarrivaltime(time) {
    this.arrival_time=time;
  }

get getpriority() {
    return this.priority;
  }






}






