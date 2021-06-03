package com.pictet.technologies.opensource.reactive.r2dbc.todolist.config;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.HttpHeaders.*;

@Component
public class CorsFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response,
                                    final FilterChain filterChain) throws ServletException, IOException {
        response.addHeader(ACCESS_CONTROL_ALLOW_ORIGIN, "*");
        response.addHeader(ACCESS_CONTROL_ALLOW_METHODS, "GET, POST, DELETE, PUT, PATCH, HEAD");
        response.addHeader(ACCESS_CONTROL_ALLOW_HEADERS, "*");
        response.addHeader(ACCESS_CONTROL_EXPOSE_HEADERS, "*");
        response.addHeader(ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
        response.addIntHeader(ACCESS_CONTROL_MAX_AGE, 1);
        filterChain.doFilter(request, response);
    }
}
