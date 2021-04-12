package com.irfaan.sevimainstaclone.services;

import com.irfaan.sevimainstaclone.entities.Status;
import com.irfaan.sevimainstaclone.repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusService {

    @Autowired
    StatusRepository statusRepo;

    @Autowired
    UserService userService;

    public Status saveStatus(Status status) {
        return statusRepo.save(status);
    }

    public List<Status> getAllStatus() {
        List<Status> statusList = statusRepo.findAll();

        for(Status status : statusList) {
            status.setUserName(userService.displayUserById(status.getUserId()).getUserName());
        }

        return statusList;
    }
}
