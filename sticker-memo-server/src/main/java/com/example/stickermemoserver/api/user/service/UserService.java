package com.example.stickermemoserver.api.user.service;

import com.example.stickermemoserver.api.user.repository.UserRepository;
import com.example.stickermemoserver.api.user.Entity.UserEntity;
import com.example.stickermemoserver.response.ResponseBody;
import com.example.stickermemoserver.utility.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import javax.servlet.http.Cookie;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService
{
    private UserRepository userRepository;
    private JwtTokenProvider jwtTokenProvider;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, JwtTokenProvider jwtTokenProvider)
    {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    public ResponseEntity<ResponseBody> signUp(UserEntity userEntity)
    {
        ResponseBody responseBody;
        ResponseEntity<ResponseBody> responseEntity;
        UserEntity currentUserEntity = userRepository.findByUsername(userEntity.getUsername());

        if(currentUserEntity != null)
        {
            responseBody = new ResponseBody(false, "이미 가입된 유저네임입니다.", null);
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

    public Map<String, Object> signIn(UserEntity userEntity)
    {
        ResponseBody responseBody;
        ResponseEntity<ResponseBody> responseEntity;
        Cookie cookie;
        String cookieValue;
        int cookieValidTime;
        Map<String, Object> responseMap = new HashMap<>();
        UserEntity currentUserEntity = userRepository.findByUsername(userEntity.getUsername());

        if(currentUserEntity == null || !bCryptPasswordEncoder.matches(userEntity.getPassword(), currentUserEntity.getPassword()))
        {
            responseBody = new ResponseBody(false, "아이디 또는 패스워드가 잘못됐습니다.", null);
            responseEntity = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);

            cookieValue = null;
            cookieValidTime = 0;
        }
        else
        {
            responseBody = new ResponseBody(true, "로그인에 성공했습니다.", currentUserEntity);
            responseEntity = ResponseEntity.status(HttpStatus.OK).body(responseBody);

            cookieValue = jwtTokenProvider.createToken(currentUserEntity.getUsername(), Arrays.asList(currentUserEntity.getRole().split(",")));
            cookieValidTime = 60 * 60;
        }

        cookie = new Cookie("Authorization", cookieValue);
        cookie.setMaxAge(cookieValidTime);
        cookie.setPath("/");
        cookie.setDomain("localhost");
        cookie.setHttpOnly(true);

        responseMap.put("responseEntity", responseEntity);
        responseMap.put("cookie", cookie);

        return responseMap;
    }

    public Map<String, Object> signOut()
    {
        ResponseBody responseBody = new ResponseBody(true, "로그아웃 되었습니다.", null);
        ResponseEntity<ResponseBody> responseEntity = ResponseEntity.status(HttpStatus.OK).body(responseBody);
        Cookie cookie;
        Map<String, Object> responseMap = new HashMap<>();

        cookie = new Cookie("Authorization", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        cookie.setDomain("localhost");
        cookie.setHttpOnly(true);

        responseMap.put("responseEntity", responseEntity);
        responseMap.put("cookie", cookie);

        return responseMap;
    }
}