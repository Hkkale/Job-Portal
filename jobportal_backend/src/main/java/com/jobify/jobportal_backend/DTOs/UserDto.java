package com.jobify.jobportal_backend.DTOs;

import com.jobify.jobportal_backend.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String id;
    private String name;


    private String email;
    private String password;

    private AccountType accountType;


    public User toEntity(){
        return  new User(this.id,this.name,this.email,this.password,this.accountType);
    }
}
