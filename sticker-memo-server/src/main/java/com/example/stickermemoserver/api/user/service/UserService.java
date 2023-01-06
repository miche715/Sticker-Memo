package com.example.stickermemoserver.api.user.service;

import com.example.stickermemoserver.api.user.repository.UserRepository;
import com.example.stickermemoserver.api.user.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository)
    {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    public Object signUp(UserEntity userEntity)
    {
        Object response;

        if(userRepository.findByUsername(userEntity.getUsername()) != null)
        {
            response = "이미 가입된 아이디입니다.";
        }
        else
        {
            userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));

            response = userRepository.save(userEntity);
        }

        return response;
    }
}
