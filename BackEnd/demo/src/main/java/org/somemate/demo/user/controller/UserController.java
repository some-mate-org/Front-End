package org.somemate.demo.user.controller;

import org.somemate.demo.user.service.UserService;
import org.somemate.demo.util.JWTUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    UserService userService;
    JWTUtil jwtUtil;


}
