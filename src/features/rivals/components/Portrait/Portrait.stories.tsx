import { Meta, Story } from '@storybook/react';

import { Rivals } from '@/config/index';

import { Portrait, PortraitProps } from './Portrait';

const meta: Meta = {
  title: 'Features/Rivals/Components/Portrait',
  component: Portrait,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PortraitProps> = (props) => <Portrait {...props} />;

export const Primary = Template.bind({});
Primary.args = { src: Rivals[0].imgSrc };
