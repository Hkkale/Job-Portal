import React, { useState, useEffect } from "react";
import Sort from "./Sort";
import JobsCard from "./JobsCard";
import { getAllJobs } from "../../Services/JobService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import { resetSort } from "../../Slices/SortSlice";

const Jobs = () => {
  const [jobList, setJobList] = useState([{}]);

  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const [filterdJobs, setFilterdJobs] = useState([]);

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(resetSort());

    getAllJobs()
      .then((res) => {
        setJobList(res.filter((job) => job.jobStatus === "ACTIVE"));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(()=>{
    if(sort=="Most Recent"){
setJobList([...jobList].sort((a, b) => new Date(b. postTime).getTime() -
new Date(a.postTime).getTime()));
}
else if(sort=="Salary: Low to High") {
setJobList([...jobList].sort((a,b)=> a.packageOffered - b.packageOffered));
}
else if(sort=="Salary: High to Low"){
setJobList ([... jobList].sort((a, b) => b.packageOffered -
a.packageOffered));
}
    
  },[sort])

  useEffect(() => {
    let filterJobs = jobList;
    console.log(filter);

    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter["Job Title"].some((title) =>
          job.jobTitle?.toLowerCase().includes(title.toLowerCase())
        )
      );
    }

    if (filter.Location && filter.Location.length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter.Location?.some((location) =>
          job.location?.toLowerCase().includes(location.toLowerCase())
        )
      );
    }

    if (filter.Experience && filter.Experience.length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter.Experience?.some((exp) =>
          job.experience?.toLowerCase().includes(exp.toLowerCase())
        )
      );
    }

    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter["Job Type"].some((x) =>
          job.jobType?.toLowerCase().includes(x.toLowerCase())
        )
      );
    }

    if (filter.salary && filter.salary.length > 0) {
      filterJobs = filterJobs.filter(
        (job) =>
          filter.salary[0] <= job.packageOffered &&
          job.packageOffered <= filter.salary[1]
      );
    }

    setFilterdJobs(filterJobs);
    console.log(filterdJobs);
  }, [filter, jobList]);

  console.log("jobLissssttttt--------", jobList);

  return (
    <div className="p-5">
      <div className="flex justify-between max-[425px]:flex-wrap max-[425px]:gap-2">
        <div className="text-2xl max-[478px]:text-xl font-semibold ">Recommended Jobs</div>
        <div>
          <Sort sort="job" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
  {filterdJobs.map((job, index) => (
    <JobsCard key={index} {...job} />
  ))}
</div>

    </div>
  );
};

export default Jobs;
