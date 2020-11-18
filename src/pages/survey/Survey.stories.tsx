import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Survey } from './Survey';

const question = {
  code: `function doubleInteger(i) {
    
    // i will be an integer. Double it and return it.
    
    
   return i;
  }`,
  validators: [
      [1, 2],
      [7, 14],
      [-3, -6],
      [0, 0]
  ] as [number, number][]
}

export default {
  title: 'Pages/Survey',
  component: Survey
} as Meta;

const Template: Story<{}> = (args) => <Survey
    code={question.code}
    validators={question.validators}
/>;

export const Default = Template.bind({});
