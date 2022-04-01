import { Meta, Story } from '@storybook/react';

import { Rivals } from '@/config/index';

import { Title, TitleProps } from './Title';

const meta: Meta = {
  title: 'Features/Rivals/Components/Title',
  component: Title,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TitleProps> = (props) => <Title {...props} />;

export const Primary = Template.bind({});
Primary.args = { name: Rivals[0].name };
