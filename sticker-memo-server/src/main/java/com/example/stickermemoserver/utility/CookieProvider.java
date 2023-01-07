package com.example.stickermemoserver.utility;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

public class CookieProvider
{
    public static Cookie getCookieByKey(HttpServletRequest httpServletRequest, String key)
    {
        Cookie[] cookies = httpServletRequest.getCookies();

        if(cookies != null)
        {
            for(Cookie cookie : cookies)
            {
                if(cookie.getName().equals(key))
                {
                    return cookie;
                }
            }
        }

        return null;
    }
}