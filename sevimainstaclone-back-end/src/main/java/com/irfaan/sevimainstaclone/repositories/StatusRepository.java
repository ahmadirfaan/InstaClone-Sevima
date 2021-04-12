package com.irfaan.sevimainstaclone.repositories;

import com.irfaan.sevimainstaclone.entities.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends JpaRepository<Status, Integer> {
}
