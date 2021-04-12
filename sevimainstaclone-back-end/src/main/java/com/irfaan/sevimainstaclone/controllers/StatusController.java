package com.irfaan.sevimainstaclone.controllers;

import com.irfaan.sevimainstaclone.entities.Status;
import com.irfaan.sevimainstaclone.services.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    StatusService statusService;

    @PostMapping
    private Status saveStatus(@RequestBody Status status) {
        return statusService.saveStatus(status);
    }

    @GetMapping
    private List<Status> getAllStatus() {
        return statusService.getAllStatus();
    }
}
