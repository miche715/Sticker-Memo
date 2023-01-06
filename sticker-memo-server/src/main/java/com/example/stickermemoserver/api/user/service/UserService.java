package com.example.stickermemoserver.api.user.service;

import com.example.stickermemoserver.api.user.repository.UserRepository;
import com.example.stickermemoserver.api.user.Entity.UserEntity;
import com.example.stickermemoserver.response.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<ResponseBody> signUp(UserEntity userEntity)
    {
        ResponseBody responseBody;
        ResponseEntity<ResponseBody> responseEntity;
        UserEntity currentUserEntity = userRepository.findByUsername(userEntity.getUsername());

        if(currentUserEntity != null)
        {
            responseBody = new ResponseBody(false, "이미 가입된 아이디입니다.", null);
            responseEntity = ResponseEntity.status(HttpStatus.CONFLICT).body(responseBody);
        }
        else
        {
            userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));
            userEntity.setRole("ROLE_USER");
            userRepository.save(userEntity);

            responseBody = new ResponseBody(true, "회원가입에 성공했습니다.", null);
            responseEntity = ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
        }

        return responseEntity;
    }

    public ResponseEntity<ResponseBody> signIn(UserEntity userEntity)
    {
        ResponseBody responseBody;
        ResponseEntity<ResponseBody> responseEntity;
        UserEntity currentUserEntity = userRepository.findByUsername(userEntity.getUsername());

        if(currentUserEntity == null || !bCryptPasswordEncoder.matches(userEntity.getPassword(), currentUserEntity.getPassword()))
        {
            responseBody = new ResponseBody(false, "아이디 또는 패스워드가 잘못됐습니다.", null);
            responseEntity = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
        }
        else
        {
            responseBody = new ResponseBody(true, "로그인에 성공했습니다.", currentUserEntity);
            responseEntity = ResponseEntity.status(HttpStatus.OK).body(responseBody);
        }

        return responseEntity;
    }
}