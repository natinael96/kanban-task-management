import HeaderMain from '../components/header/HeaderMain.vue'

// Use relative path

export default {
  title: 'components/HeaderMain',
  component: HeaderMain,
  argTypes: {
    isMobile: { control: 'boolean' },
    title: { control: 'text' },
    showFunctionBtn: { control: 'boolean' },
    disabledFunctionBtn: { control: 'boolean' },
    disabledAddNewTaskBtn: { control: 'boolean' },
    menuDisplay: { control: 'boolean' },
  },
}

function Template(args) {
  return {
    components: { HeaderMain },
    setup() {
      return { args } // Passing the args to the component
    },
    template: `<HeaderMain v-bind="args" />`,
  }
}

// Default view
export const Default = Template.bind({})
Default.args = {
  isMobile: false,
  title: 'Project Board',
  showFunctionBtn: true,
  disabledFunctionBtn: false,
  disabledAddNewTaskBtn: false,
  menuDisplay: false,
}

// Mobile view
export const Mobile = Template.bind({})
Mobile.args = {
  isMobile: true,
  title: 'Project Board (Mobile)',
  showFunctionBtn: true,
}

// With menu open
export const WithMenuOpen = Template.bind({})
WithMenuOpen.args = {
  menuDisplay: true,
  showFunctionBtn: true,
}

// Function button disabled
export const DisabledFunctionButton = Template.bind({})
DisabledFunctionButton.args = {
  disabledFunctionBtn: true,
  showFunctionBtn: true,
}

// Add Task button disabled
export const DisabledAddNewTaskButton = Template.bind({})
DisabledAddNewTaskButton.args = {
  disabledAddNewTaskBtn: true,
  showFunctionBtn: true,
}
