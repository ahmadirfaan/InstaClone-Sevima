package com.irfaan.sevimainstaclone.services;

import com.irfaan.sevimainstaclone.entities.Comment;
import com.irfaan.sevimainstaclone.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepo;

    @Autowired
    UserService userService;

    public Comment saveComment(Comment comment) {
        return commentRepo.save(comment);
    }

    public List<Comment> getAllComment(String postId) {
        List<Comment> comments = commentRepo.findAllByPostId(postId);

        for (Comment comment : comments) {
            comment.setUserName(userService.displayUserById(comment.getUserId()).getUserName());
        }

        return comments;
    }
}