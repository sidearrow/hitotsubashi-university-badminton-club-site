import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';

const MARKDOWN_DIR = 'content/markdown';

function listPaths(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((dirent) => {
    if (dirent.isDirectory()) {
      return listPaths(`${dir}/${dirent.name}`);
    }
    if (dirent.isFile()) {
      return [`${dir}/${dirent.name}`.replace(MARKDOWN_DIR + '/', '')];
    }
    return [];
  });
}

function getPaths(): string[] {
  return listPaths(MARKDOWN_DIR);
}

export type MarkdownParseResponse = {
  title: string;
  description: string;
  html: string;
  breadcrumbs?: { text: string; path: string | null }[];
};

const parseMarkdown = (filepath: string): MarkdownParseResponse => {
  const markdown = fs.readFileSync(path.join(MARKDOWN_DIR, filepath), {
    encoding: 'utf-8',
  });

  const res = matter(markdown);

  if (!('title' in res.data) || !('description' in res.data)) {
    throw new Error();
  }

  const renderer = new marked.Renderer();
  renderer.table = (header, body) => {
    return `<div class="table-scroll"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
  };

  marked.setOptions({ renderer: renderer });
  const html = marked(res.content);

  const response: MarkdownParseResponse = {
    title: res.data.title,
    description: res.data.description,
    html: html,
  };

  if ('breadcrumbs' in res.data) {
    response.breadcrumbs = res.data.breadcrumbs;
  }

  return response;
};

export const markdownUtils = {
  getPaths: getPaths,
  parseMarkdown: parseMarkdown,
};
