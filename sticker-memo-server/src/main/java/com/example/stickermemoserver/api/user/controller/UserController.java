package com.example.stickermemoserver.api.user.controller;

import com.example.stickermemoserver.api.user.domain.UserEntity;
import com.example.stickermemoserver.api.user.service.UserService;
import com.example.stickermemoserver.response.ResponseBody;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController
{
    private UserService userService;
    private Gson gson;

    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
        gson = new Gson();
    }

    @PostMapping("/join")
    public ResponseEntity<ResponseBody> signUp(@RequestBody String requestJSON)
    {
        return userService.signUp(gson.fromJson(requestJSON, UserEntity.class));
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseBody> signIn(HttpServletResponse httpServletResponse, @RequestBody String requestJSON)
    {
        Map<String, Object> responseMap = userService.signIn(gson.fromJson(requestJSON, UserEntity.class));

        httpServletResponse.addCookie((Cookie)responseMap.get("cookie"));
        return (ResponseEntity<ResponseBody>)responseMap.get("responseEntity");
    }

    @GetMapping("/logout")
    public ResponseEntity<ResponseBody> signOut(HttpServletResponse httpServletResponse)
    {
        Map<String, Object> responseMap = userService.signOut();

        httpServletResponse.addCookie((Cookie)responseMap.get("cookie"));
        return (ResponseEntity<ResponseBody>)responseMap.get("responseEntity");
    }

//    @PostMapping("/post-test")
//    public ResponseEntity<ResponseBody> postTest(HttpServletResponse httpServletResponse, @RequestBody String requestJSON)
//    {
//        UserEntity userEntity = gson.fromJson(requestJSON, UserEntity.class);
//        userEntity.setUuid(1L);
//        userEntity.setRole("ROLE_USER");
//
//        return ResponseEntity.status(HttpStatus.OK).body(new ResponseBody(true, "POST ??????", userEntity));
//    }
//
//    @GetMapping("/get-test")
//    public ResponseEntity<ResponseBody> getTest(HttpServletResponse httpServletResponse)
//    {
//        UserEntity userEntity = new UserEntity();
//        userEntity.setUuid(1L);
//        userEntity.setUsername("test");
//        userEntity.setPassword("test");
//        userEntity.setRole("ROLE_USER");
//
//        return ResponseEntity.status(HttpStatus.OK).body(new ResponseBody(true, "GET ??????", userEntity));
//    }
}