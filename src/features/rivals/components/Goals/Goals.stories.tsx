import { Meta, Story } from '@storybook/react';

import { Rivals } from '@/config/index';

import { Goals, GoalsProps } from './Goals';

const meta: Meta = {
  title: 'Features/Rivals/Components/Goals',
  component: Goals,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<GoalsProps> = (props) => <Goals {...props} />;

export const Primary = Template.bind({});
Primary.args = { goals: Rivals[0].goals };
