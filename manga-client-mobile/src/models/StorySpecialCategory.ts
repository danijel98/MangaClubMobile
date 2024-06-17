import { DefaultModel, Story } from ".";

export interface StorySpecialCategory extends DefaultModel {
    orderNumber?: number;
    story?: Story;
};
