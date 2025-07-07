package com.jobify.jobportal_backend.Controller;


import com.jobify.jobportal_backend.DTOs.LoginDto;
import com.jobify.jobportal_backend.DTOs.UserDto;

import com.jobify.jobportal_backend.Exception.JobPortalException;
import com.jobify.jobportal_backend.Service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@Validated
@RequestMapping("/users")
public class UserController {

    private  UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser( @RequestBody @Valid UserDto userDto) throws JobPortalException {


        userDto= userService.registerUser(userDto);

        return new ResponseEntity<>(userDto, HttpStatus.CREATED);







    }



    @PostMapping("/login")
    public ResponseEntity<UserDto> loginUser( @RequestBody @Valid LoginDto loginDto) throws JobPortalException {




        return new ResponseEntity<>(userService.loginUser(loginDto), HttpStatus.OK);







    }

}
