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
    size: { control: 'select', options: ['small', 'medium'] },
  },
  args: {
    text: 'text',
    size: 'medium',
  },
};

const Template = (args) => html` <bq-tag size=${args.size}> ${args.text} </bq-tag> `;

export const Default = (args) => Template(args);
