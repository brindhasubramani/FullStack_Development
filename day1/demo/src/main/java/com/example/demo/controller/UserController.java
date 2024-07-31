package main.java.com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/postdetails")
    public User postMethodName(@RequestBody User user) 
    {
        return userService.postDetails(user);
    }
    
    @GetMapping("/details/{id}")
    public User getMethodName(@PathVariable("id") int id) {
        return userService.getDetails(id);
    }
    
}

