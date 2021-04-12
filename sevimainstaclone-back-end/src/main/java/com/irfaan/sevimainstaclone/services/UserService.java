package com.irfaan.sevimainstaclone.services;

import com.irfaan.sevimainstaclone.entities.Users;
import com.irfaan.sevimainstaclone.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UsersRepository userRepo;

    public Users saveDataUser(Users users) {
        return userRepo.save(users);
    }

    public Users displayUserById(String userId) {
        return userRepo.findByUserId(userId);
    }

}
