package com.example.stickermemoserver.api.memo.controller;

import com.example.stickermemoserver.api.memo.domain.MemoDto;
import com.example.stickermemoserver.api.memo.service.MemoService;
import com.example.stickermemoserver.response.ResponseBody;
import com.example.stickermemoserver.utility.CookieProvider;
import com.example.stickermemoserver.utility.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/memos")
public class MemoController
{
    private MemoService memoService;
    private JwtTokenProvider jwtTokenProvider;
    private Gson gson;

    @Autowired
    public MemoController(MemoService memoService, JwtTokenProvider jwtTokenProvider)
    {
        this.memoService = memoService;
        this.jwtTokenProvider = jwtTokenProvider;
        gson = new Gson();
    }

    @PostMapping("/write")
    public ResponseEntity<ResponseBody> writeMemo(HttpServletRequest httpServletRequest, @RequestBody String requestJSON)
    {
        return memoService.writeMemo(jwtTokenProvider.getUsername(CookieProvider.getCookieByKey(httpServletRequest, "Authorization").getValue()),
                                     gson.fromJson(requestJSON, MemoDto.class));
    }
}