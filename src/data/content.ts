// Shared model for the reference site's two-column content rows (service, About
// and Team pages).

// A content block within a column. Consecutive "p" blocks render as one paragraph
// group; "text" is a single unwrapped run of copy; "img" is an inline image.
export type ContentBlock =
  | { type: "h2" | "h3" | "p" | "text"; text: string }
  | { type: "img"; src: string; alt: string };

// An image column sits at the top of its row unless marked as vertically centred.
export type ContentImage = { src: string; centered?: boolean };

// A column is either an image (path, or path with alignment) or a stack of blocks.
export type ContentColumn = string | ContentImage | ContentBlock[];

export type ContentRow = [ContentColumn, ContentColumn];

export const p = (text: string): ContentBlock => ({ type: "p", text });
export const h2 = (text: string): ContentBlock => ({ type: "h2", text });
export const h3 = (text: string): ContentBlock => ({ type: "h3", text });
export const text = (value: string): ContentBlock => ({ type: "text", text: value });
export const img = (src: string, alt: string): ContentBlock => ({ type: "img", src, alt });
