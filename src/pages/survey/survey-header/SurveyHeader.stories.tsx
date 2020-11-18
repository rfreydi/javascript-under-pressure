import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SurveyHeader } from './SurveyHeader';


export default {
  title: 'Pages/Survey/Header',
  component: SurveyHeader
} as Meta;

const Template: Story<{}> = (args) => <SurveyHeader />;

export const Default = Template.bind({});
