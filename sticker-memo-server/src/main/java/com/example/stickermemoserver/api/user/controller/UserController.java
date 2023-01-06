package com.example.stickermemoserver.api.user.controller;

import com.example.stickermemoserver.api.user.Entity.UserEntity;
import com.example.stickermemoserver.api.user.service.UserService;
import com.example.stickermemoserver.response.ResponseBody;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<ResponseBody> signIn(@RequestBody String requestJSON)
    {
        return userService.signIn(gson.fromJson(requestJSON, UserEntity.class));
    }
}