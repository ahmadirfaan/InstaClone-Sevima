package com.irfaan.sevimainstaclone.repositories;

import com.irfaan.sevimainstaclone.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    Users findByUserId(String userId);
}
