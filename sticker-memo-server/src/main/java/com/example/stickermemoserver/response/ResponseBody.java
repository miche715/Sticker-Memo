package com.example.stickermemoserver.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseBody
{
    private Boolean isSuccess;
    private String message;
    private Object data;
}
