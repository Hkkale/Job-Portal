package com.jobify.jobportal_backend.Controller;


import com.jobify.jobportal_backend.DTOs.UserDto;
import com.jobify.jobportal_backend.Entity.User;
import com.jobify.jobportal_backend.Service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    private  UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser( @RequestBody  UserDto userDto){





        return null;

    }

}
