package com.jobify.jobportal_backend.Service;

import com.jobify.jobportal_backend.DTOs.ApplicantDto;
import com.jobify.jobportal_backend.DTOs.ApplicationStatus;
import com.jobify.jobportal_backend.DTOs.JobDto;
import com.jobify.jobportal_backend.Entity.Applicant;
import com.jobify.jobportal_backend.Entity.Job;
import com.jobify.jobportal_backend.Exception.JobPortalException;
import com.jobify.jobportal_backend.Repository.JobRepository;
import com.jobify.jobportal_backend.Utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service("jobService")
public class JobServiceImpl implements JobService{

    private JobRepository jobRepository;
    private Utilities utilities;


    @Autowired
    public JobServiceImpl(JobRepository jobRepository, Utilities utilities) {
        this.jobRepository = jobRepository;
        this.utilities = utilities;
    }


    @Override
    public JobDto postJob(JobDto jobDto) throws JobPortalException {
        jobDto.setId(utilities.getNextSequence(("jobs")));
        jobDto.setPostTime(LocalDateTime.now());
        return jobRepository.save(jobDto.toEntity()).toDto();
    }

    @Override
    public List<JobDto> getAllJobs() {
        return jobRepository.findAll().stream()
                .map((x)->x.toDto()).toList();
    }

    @Override
    public JobDto getJob(Long id) throws JobPortalException {
        return jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND")).toDto();
    }

    @Override
    public void applyJob(Long id, ApplicantDto applicantDto) throws JobPortalException {
        Job job= jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
        List<Applicant> applicants=job.getApplicants();
        if(applicants==null) applicants=new ArrayList<>();

        if(!applicants.stream().filter((x) -> x.getApplicantId() == applicantDto.getApplicantId()).toList().isEmpty()) throw new JobPortalException("JOB_APPLIED_ALREADY");


        applicantDto.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(applicantDto.toEntity());
        job.setApplicants(applicants);
        jobRepository.save(job);
    }
}
