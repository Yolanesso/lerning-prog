package com.example.backend.repository;


import com.example.backend.entity.LessonCompletion;
import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LessonCompletionRepository extends JpaRepository<LessonCompletion, Long> {
    Optional<LessonCompletion> findByUserAndLessonId(User user, Long lessonId);
    List<LessonCompletion> findByLessonId(Long lessonId);
}
