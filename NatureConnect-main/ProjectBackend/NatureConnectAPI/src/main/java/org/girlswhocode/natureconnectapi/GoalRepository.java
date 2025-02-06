package org.girlswhocode.natureconnectapi;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface GoalRepository extends CrudRepository<Goal, Integer> {

    @Query(value = "select g.* from goal g join active_goal a on g.goal_id = a.goal_id where g.goal_type = ?1", nativeQuery = true)
    Optional<Goal> findActiveGoal(String goalType);

    @Query(value = "select * from goal where goal_type = ?1 order by rand() limit 1", nativeQuery = true)
    Optional<Goal> pickNewGoal(String goalType);


}
