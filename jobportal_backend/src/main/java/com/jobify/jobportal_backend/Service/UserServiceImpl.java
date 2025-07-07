package com.jobify.jobportal_backend.Service;

import com.jobify.jobportal_backend.DTOs.LoginDto;
import com.jobify.jobportal_backend.DTOs.UserDto;
import com.jobify.jobportal_backend.Entity.User;
import com.jobify.jobportal_backend.Exception.JobPortalException;
import com.jobify.jobportal_backend.Repository.UserRepository;
import com.jobify.jobportal_backend.Utility.Utilities;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service(value = "userService")
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    private Utilities utilities;

    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, Utilities utilities, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.utilities = utilities;
        this.passwordEncoder = passwordEncoder;
    }




    @Override
    public UserDto registerUser(UserDto userDto) throws JobPortalException {


        Optional<User> optional = userRepository.findByEmail(userDto.getEmail());

        if(optional.isPresent()) throw new JobPortalException("USER_FOUND");


      userDto.setId(utilities.getNextSequence("users"));
      userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
      User user = userDto.toEntity();
      user=userRepository.save(user);
      return user.toDto();

    }

    @Override
    public UserDto loginUser(LoginDto loginDto) throws JobPortalException {

        User user=userRepository.findByEmail(loginDto.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));

        if(!passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) throw new JobPortalException("INVALID_CREDENTIALS");
        return user.toDto();
    }
}
