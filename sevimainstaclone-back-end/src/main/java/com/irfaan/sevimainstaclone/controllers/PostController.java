package com.irfaan.sevimainstaclone.controllers;

import com.irfaan.sevimainstaclone.entities.Post;
import com.irfaan.sevimainstaclone.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping
    private Post savePost(@RequestBody Post post) {
        return postService.savePost(post);
    }

    @GetMapping
    private List<Post> getAllPost() {
        return postService.getAllPost();
    }
}
