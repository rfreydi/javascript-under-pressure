import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Timer } from './Timer';


export default {
  title: 'Components/Timer',
  component: Timer
} as Meta;

const Template: Story<{}> = (args) => <Timer />;

export const Default = Template.bind({});
