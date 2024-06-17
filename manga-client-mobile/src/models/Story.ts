import { Genre, Chapter, ContentType, DefaultModel, AgeRating } from ".";
import { StoryImage } from "./StoryImage";

export interface Story extends DefaultModel {
  title?: string;
  description?: string;
  smallCoverImage?: StoryImage;
  bigCoverImage?: StoryImage;
  storyLogoImage?: StoryImage;

  chapters?: Chapter[];
  genres?: Genre[];
  contentType?: ContentType;
  ageRating?: AgeRating;
}
