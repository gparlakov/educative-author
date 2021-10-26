export interface MarkdownComponent {
  type: 'MarkdownEditor';
  mode: 'edit';
  content: {
    version: string;
    text: string;
    md_html: string;
    comp_id: string;
  };
  iteration: number;
  hash: number;
  saveVersion: number;
}
export interface Component {
  type: 'Code' | 'MxGraphWidget';
  mode: 'edit' ;
}

export interface Lesson {
  components: (Component | MarkdownComponent)[];
  summary: {
    tags: string[];
    titleUpdated: boolean;
    description: string;
  };
}
