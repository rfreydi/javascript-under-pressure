import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Editor, EditorProps } from './Editor';


export default {
  title: 'Components/Editor',
  component: Editor
} as Meta;

const Template: Story<EditorProps> = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {
  code: 'test',
  onChange: (val) => console.log(val)
};
