import { Blog as TBlog } from "../api/blog/Blog";

export const BLOG_TITLE_FIELD = "id";

export const BlogTitle = (record: TBlog): string => {
  return record.id?.toString() || String(record.id);
};
