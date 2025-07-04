package com.jobify.jobportal_backend.Service;

import com.jobify.jobportal_backend.DTOs.UserDto;
import com.jobify.jobportal_backend.Entity.User;
import com.jobify.jobportal_backend.Repository.UserRepository;
import org.springframework.stereotype.Service;


@Service(value = "userService")
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDto registerUser(UserDto userDto) {
      User user = userDto.toEntity();
      user=userRepository.save(user);
      return user.toDto();

    }
}
