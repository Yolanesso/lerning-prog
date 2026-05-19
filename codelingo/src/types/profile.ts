export interface CourseProgress {
  id: string;
  name: string;
  icon: string;
  themeColor: string;
  totalLessons: number;
  completedLessons: number;
  totalXp: number;
  earnedXp: number;
}

export interface UserProfile {
  username: string;
  email: string;
  totalXp: number;
  lessonsCompleted: number;
  streak: number;
  courses: CourseProgress[];
}
