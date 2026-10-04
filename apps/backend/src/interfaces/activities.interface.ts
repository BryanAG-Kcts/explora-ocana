export interface Activity {
    activityId: string;
    sectionId: string;
    title: string;
    description: string;
}

export interface SaveActivityProgressDto {
    user_id: number;
    section_id: string;
    activity_id: string;
    experience_points: number;
}

export interface SaveActivityResponseDto {
    user_id: number;
    activity_id: string;
    response: string;
}
