package com.jobify.jobportal_backend.Service;

import com.jobify.jobportal_backend.DTOs.LoginDto;
import com.jobify.jobportal_backend.DTOs.UserDto;
import com.jobify.jobportal_backend.Exception.JobPortalException;

public interface UserService {
    public UserDto registerUser(UserDto userDto) throws JobPortalException;

    UserDto loginUser(LoginDto loginDto) throws JobPortalException;
}
