package com.example.backend.service;

import com.example.backend.dto.LessonCompletionDto;
import com.example.backend.entity.LessonCompletion;
import com.example.backend.entity.User;
import com.example.backend.repository.LessonCompletionRepository;
import com.example.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LessonCompletionService {

    private final LessonCompletionRepository lessonCompletionRepository;
    private final UserRepository userRepository;

    public LessonCompletionService(LessonCompletionRepository lessonCompletionRepository, UserRepository userRepository) {
        this.lessonCompletionRepository = lessonCompletionRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public void saveCompletionTask(String username, LessonCompletionDto dto) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("Пользователь не был найден"));
        LessonCompletion completion = lessonCompletionRepository.findByUserAndLessonId(user, dto.getLessonId())
                .orElse(new LessonCompletion());

        completion.setUser(user);
        completion.setLessonId(dto.getLessonId());
        completion.setScore(dto.getScore());

        if(completion.getId() != null) {
            completion.setCompletedAt(LocalDateTime.now());
        }
        lessonCompletionRepository.save(completion);
    }

}
