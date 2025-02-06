package org.girlswhocode.natureconnectapi;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.girlswhocode.natureconnectapi.User;

import java.util.List;
import java.util.Optional;

public interface UserGoalRepository extends CrudRepository<UserGoal, Integer> {
    @Query(value = "select * from user_goal where user_id = ?1", nativeQuery = true)
    List<UserGoal> findByUserId(Integer userId);

}