package com.irfaan.sevimainstaclone.controllers;

import com.irfaan.sevimainstaclone.entities.Comment;
import com.irfaan.sevimainstaclone.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping
    private Comment saveComment(@RequestBody Comment comment) {
        return commentService.saveComment(comment);
    }

    @GetMapping("/{postId}")
    private List<Comment> getCommentForPost(@PathVariable("postId") String postId) {
        return commentService.getAllComment(postId);
    }
}
