package com.chauffeurcheck.backend.repository;

import com.chauffeurcheck.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}