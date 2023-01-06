package com.example.stickermemoserver;

// import kr.co.neighbor21.cms.filter.JWTAuthenticationFilter;
// import kr.co.neighbor21.cms.utility.JWTTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration
{
    // private final JWTTokenProvider jwtTokenProvider;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception
    {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception
    {
        return httpSecurity
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/api/users/join", "/api/users/login").permitAll()
                .anyRequest().authenticated()
                .and()
                .build();

//        return httpSecurity
//                .httpBasic().disable()
//                .csrf().disable()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .authorizeRequests()
//                // .antMatchers("/api/**").authenticated()
//                .antMatchers("/api/users/signup", "/api/users/login").permitAll()
//                .antMatchers("/api/users/detail").hasAnyRole("USER", "ADMIN")
//                .antMatchers("/api/vacations/register", "/api/vacations/my-vacations", "/api/vacations/approved-vacations").hasAnyRole("USER", "ADMIN")
//                .antMatchers("/api/vacations/register-vacations", "/api/vacations/modify-vacation").hasRole("ADMIN")
//                .anyRequest().authenticated()
//                .and()
//                .addFilterBefore(new JWTAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
//                .build();
    }
}