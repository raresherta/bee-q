import { html } from 'lit-html';
import mdx from './bq-tag.mdx';

export default {
  title: 'Components/Tag',
  component: 'bq-tag',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    text: { control: 'text', table: { disable: true } },
  },
  args: {
    text: 'text',
  },
};

const Template = (args) => {
  return html`<bq-tag>${args.text}</bq-tag>`;
};

export const Default = (args) => Template(args);
