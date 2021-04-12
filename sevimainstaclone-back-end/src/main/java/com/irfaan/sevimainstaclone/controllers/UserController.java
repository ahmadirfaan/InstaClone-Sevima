package com.irfaan.sevimainstaclone.controllers;

import com.irfaan.sevimainstaclone.entities.Users;
import com.irfaan.sevimainstaclone.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping()
    private Users submitUser(@RequestBody Users user) {

        return userService.saveDataUser(user);
    }

    @GetMapping("/{userid}")
    private Users getUserDetails(@PathVariable("userid") String userId) {
        return userService.displayUserById(userId);
    }
}
