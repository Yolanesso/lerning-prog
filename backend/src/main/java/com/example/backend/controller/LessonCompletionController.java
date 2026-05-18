package com.example.backend.controller;

import com.example.backend.entity.LessonCompletion;
import com.example.backend.service.LessonCompletionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lessons")
public class LessonCompletionController {
    private final LessonCompletionService lessonCompletionService;
    public LessonCompletionController(final LessonCompletionService lessonCompletionService) {
        this.lessonCompletionService = lessonCompletionService;
    }

}
