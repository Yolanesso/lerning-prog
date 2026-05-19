package com.example.backend.controller;

import com.example.backend.dto.LessonCompletionDto;
import com.example.backend.entity.LessonCompletion;
import com.example.backend.service.LessonCompletionService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lessons")
public class LessonCompletionController {
    private final LessonCompletionService lessonCompletionService;
    public LessonCompletionController(final LessonCompletionService lessonCompletionService) {
        this.lessonCompletionService = lessonCompletionService;
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeLesson(@RequestBody LessonCompletionDto completionDto, @AuthenticationPrincipal UserDetails userDetails) {
        String username = userDetails.getUsername();

        lessonCompletionService.saveCompletionTask(username,completionDto);

        return ResponseEntity.ok("Прогресс урока сохранён!");
    }
}
