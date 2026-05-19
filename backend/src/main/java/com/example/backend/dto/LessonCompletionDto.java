package com.example.backend.dto;

import lombok.Data;

@Data
public class LessonCompletionDto {
    private Long lessonId;
    private Integer score;
}
