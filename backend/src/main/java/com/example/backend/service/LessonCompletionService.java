package com.example.backend.service;

import com.example.backend.repository.LessonCompletionRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class LessonCompletionService {

    private final LessonCompletionRepository lessonCompletionRepository;
    private final UserRepository userRepository;

    public LessonCompletionService(LessonCompletionRepository lessonCompletionRepository, UserRepository userRepository) {
        this.lessonCompletionRepository = lessonCompletionRepository;
        this.userRepository = userRepository;
    }


}
