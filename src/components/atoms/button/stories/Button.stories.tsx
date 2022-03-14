import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import {ButtonComponent, VariantType} from '../src/index'


export default {
    title: 'Atoms/Button',
    component: ButtonComponent,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/ProyEmDztVqQlXxAu09MU1/Portafolio?node-id=228%3A78',
        }
    }
  } as ComponentMeta<typeof ButtonComponent>;


// Define template
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  variant: VariantType.primary,
  children: 'hola',
};