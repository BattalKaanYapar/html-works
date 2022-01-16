let userJobsDOM = document.querySelector('#userJobs')
userJobsDOM.addEventListener('submit', jobsHandler)

function jobsHandler(event){
  event.preventDefault();
  console.log("İşlem gerçekleşti")
  const USER_JOBS = document.querySelector('#username')
  addItem(USER_JOBS.value)
}
