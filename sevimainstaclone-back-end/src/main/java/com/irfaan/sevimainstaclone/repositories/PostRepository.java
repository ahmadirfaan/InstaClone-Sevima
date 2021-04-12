package com.irfaan.sevimainstaclone.repositories;

import com.irfaan.sevimainstaclone.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post,Integer> {
}
