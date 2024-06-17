import { ChapterImage } from ".";

export interface Chapter {
  id?: number;
  title?: string;
  coverImageUrl?: string;
  chapterImages: ChapterImage[];
  orderNumber: number;
}
