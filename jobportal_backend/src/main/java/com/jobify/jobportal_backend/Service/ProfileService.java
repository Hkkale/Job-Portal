package com.jobify.jobportal_backend.Service;

import com.jobify.jobportal_backend.DTOs.ProfileDto;
import com.jobify.jobportal_backend.Exception.JobPortalException;

import java.util.List;

public interface ProfileService {
     Long createProfile(String email) throws JobPortalException;

     ProfileDto getProfile(Long id)throws JobPortalException;
     ProfileDto updateProfile(ProfileDto profileDto)throws JobPortalException;

    List<ProfileDto> getAllProfiles() ;
}
