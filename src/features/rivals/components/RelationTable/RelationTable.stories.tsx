import { Meta, Story } from '@storybook/react';

import { Rivals } from '@/config/index';

import { RelationTable, RelationTableProps } from './RelationTable';

const meta: Meta = {
  title: 'Features/Rivals/Components/Relation Table',
  component: RelationTable,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RelationTableProps> = (props) => (
  <RelationTable {...props} />
);

export const Primary = Template.bind({});
Primary.args = {
  relations: Rivals[0].relations,
};
