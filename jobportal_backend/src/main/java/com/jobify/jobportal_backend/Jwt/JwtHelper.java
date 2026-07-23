package com.jobify.jobportal_backend.Jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtHelper {

    // Base64-encoded 256-bit secret, externalized so tokens survive app restarts (see jwt.secret in application.properties)
    @Value("${jwt.secret}")
    private String secret;

    private Key signingKey;

    @PostConstruct
    private void init() {
        signingKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    // Token validity (e.g., 10 hours)
    private static final long JWT_TOKEN_VALIDITY = 10 * 60 * 60 * 1000;

    // Extract username from token
    public String getUserNameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    // Extract expiration date from token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    // Extract a specific claim
    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    // Retrieve all claims from token using the secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Check if token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    // Generate token for user
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        CustomUserDetails customUserDetails = (CustomUserDetails) userDetails;
        claims.put("id",customUserDetails.getId());
        claims.put("name",customUserDetails.getName());        
        claims.put("accountType",customUserDetails.getAccountType());
        claims.put("profileId",customUserDetails.getProfileId());


        return doGenerateToken(claims, userDetails.getUsername());
    }

    // While creating the token -
    // 1. Define claims (issuer, expiration, subject, ID)
    // 2. Sign the JWT using HS256 and secret key
    private String doGenerateToken(Map<String, Object> claims, String subject) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + JWT_TOKEN_VALIDITY);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(signingKey, SignatureAlgorithm.HS256)
                .compact();
    }

    // Validate token
    public Boolean validateToken(String token, String username) {
        final String extractedUsername = getUserNameFromToken(token);
        return (extractedUsername.equals(username) && !isTokenExpired(token));
    }
}
