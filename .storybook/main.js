module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "storybook-addon-intl/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
  ],
};
