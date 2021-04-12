package com.irfaan.sevimainstaclone.services;

import com.irfaan.sevimainstaclone.entities.Comment;
import com.irfaan.sevimainstaclone.entities.Post;
import com.irfaan.sevimainstaclone.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepository postRepo;

    @Autowired
    UserService userService;

    public Post savePost(Post post) {
        return postRepo.save(post);
    }

    public List<Post> getAllPost() {
        List<Post> posts = postRepo.findAll();
        for (Post post : posts) {
            post.setUserName(userService.displayUserById(post.getUserId()).getUserName());
        }
        posts.sort((a, b) -> b.getId() - a.getId());
        return posts;
    }
}
