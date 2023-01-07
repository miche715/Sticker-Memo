package com.example.stickermemoserver.filter;

import com.example.stickermemoserver.utility.CookieProvider;
import com.example.stickermemoserver.utility.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean
{
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException
    {
        Cookie authorizationCookie =  CookieProvider.getCookieByKey((HttpServletRequest)servletRequest, "Authorization");
        String token;

        if(authorizationCookie != null)
        {
            token = authorizationCookie.getValue();

            if(jwtTokenProvider.validateToken(token))
            {
                Authentication authentication = jwtTokenProvider.getAuthentication(token);  // JWT 토큰으로부터 사용자 정보를 받아옴
                SecurityContextHolder.getContext().setAuthentication(authentication);  // SecurityContext 에 Authentication 객체 저장
            }
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
