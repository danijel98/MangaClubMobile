import { StorySpecialCategory, Genre } from ".";

export interface SpecialCategory {
    name: string;
    storySpecialCategories: StorySpecialCategory[];
    genre?: Genre;
}