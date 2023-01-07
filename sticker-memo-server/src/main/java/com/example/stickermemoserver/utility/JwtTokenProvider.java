package com.example.stickermemoserver.utility;

import com.example.stickermemoserver.api.user.Entity.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider
{
    private static final long TOKEN_VALID_TIME = 1000L * 60 * 60;  // 1시간

    @Value("spring.jwt.secret")
    private String secretKey;
    private UserDetailsService userDetailsService;

    @Autowired
    public JwtTokenProvider(UserDetailsService userDetailsService)
    {
        this.userDetailsService = userDetailsService;
    }

    @PostConstruct
    protected void init()
    {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());  // secretKey를 Base64로 인코딩함
    }

    public String createToken(String userId, List<String> roles)  // JWT 토큰 생성
    {
        Claims claims = Jwts.claims().setSubject(userId); // JWT payload 에 저장되는 정보단위, 보통 여기서 user를 식별하는 값을 넣음
        Date now = new Date();

        claims.put("grades", roles);

        return Jwts.builder()
                .setClaims(claims)  // 정보 저장
                .setIssuedAt(now)  // JWT 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + TOKEN_VALID_TIME))  // JWT 토큰 만료 시간 지정
                .signWith(SignatureAlgorithm.HS256, secretKey)  // 사용할 암호화 알고리즘과, signature에 들어갈 secret값 세팅
                .compact();
    }

    public Authentication getAuthentication(String token)  // JWT 토큰에서 인증 정보 조회
    {
        UserEntity userEntity = (UserEntity)userDetailsService.loadUserByUsername(getUsername(token));

        return new UsernamePasswordAuthenticationToken(userEntity, "", userEntity.getAuthorities());
    }

    public String getUsername(String token)  // JWT 토큰에서 회원 정보 추출
    {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveToken(HttpServletRequest httpServletRequest)  // Request의 Header에서 token 값을 가져옴, "Authorization" : "JWT"
    {
        return httpServletRequest.getHeader("Authorization");
    }

    public boolean validateToken(String token)  // JWT 토큰이 아직 만료되지 않았는지 확인
    {
        try
        {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);

            return !claims.getBody().getExpiration().before(new Date());
        }
        catch(Exception e)
        {
            return false;
        }
    }
}
