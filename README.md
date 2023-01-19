![alt text for screen readers](https://pasteboard.co/2VNrnV4WhcPj.png "RippleUI Logo")

<h1 align="center">Rock UI</h1>

<a href="https://www.npmjs.com/package/@eddy_rock_js/rock-ui">
    <img src="https://img.shields.io/npm/dm/@eddy_rock_js/rock-ui" alt="npm downloads">
</a>
<a href="https://www.npmjs.com/package/@eddy_rock_js/rock-ui">
    <img src="https://img.shields.io/npm/v/@eddy_rock_js/rock-ui" alt="npm downloads">
</a>
<a href="https://www.npmjs.com/package/@eddy_rock_js/rock-ui">
    <img src="https://img.shields.io/npm/l/@eddy_rock_js/rock-ui" alt="npm downloads">
</a>

<a href="https://www.npmjs.com/package/@eddy_rock_js/rock-ui">
    <img src="https://img.shields.io/github/last-commit/EddyRock/rock-ui" alt="npm downloads">
</a>


Welcome to the RockUI repository! This is the home for all of the components.

## 🚀 Usage
To use the RockUI components, you will need to install the package from npm.

```bash
npm i @eddy_rock_js/rock-ui
```

To use a component, simply import component in vue component and use it.

```vue
<rock-button>
  Button
</rock-button>
```

## 🎨 Components
Here is a list of all of the components that are currently available in RockUI.

- Input +
- Checkbox +
- Select +
- Textarea + 
- Paginator +
- Radio +
- Loader +
- Label +
- Progress bar
- Button
- Icon

## 📓Documentation

### RockInput
```vue
<rock-input
  v-model="field"
  small
  medium
  large
  disabled
  warning
  type="text"
  tip="Tip"
  error="Error"
  subtitle="Subtitle"
  placeholder="Placeholder"
/>

```
### RockCheckbox
```vue
<rock-checkbox
  v-model="field"
  :default="false"
  title="Checkbox"
/>

```
### RockSelect
```vue
<rock-select
  v-model="field"
  :items="item"
  unselect
  unblur
  disabled
  error="Error"
  warning="Warning"
  placeholder="Placeholder"
  subtitle="Select"
  fieldLabel="Field Label"
/>

```
### RockInput
```vue
<rock-text-area
    v-model="field"
    disabled
    warning
    subtitle="Text Area"
    error="Error"
    placeholder="Placeholder"
/>

```
### RockPaginator
```vue
<rock-paginator
    v-model="paginator"
    length="10"
    totalVisible="7"
    isShortVersion
    hasNextPage
/>

```
### RockRadiobutton
```vue
 <rock-radiobutton 
  v-model="radio"
  :buttons="buttons"
  disabled
/>

```
### RockLoader
```vue
<rock-loader
  line="0.4"
  size="2"
  speed="1.1"
/>
```
### RockLabel
```vue
<rock-label
  theme="light-gray"
>
  Label Primary
</rock-label>

```
### RockProgressbar
```vue
<rock-progressbar
    v-model="value"
/>

```
### RockButton
```vue
<rock-button
  disabled
  secondary
>
  Button
</rock-button>
```
### RockIconButton
```vue
<rock-icon-button disabled>
  <img src="./assets/icons/arrow.svg">
</rock-icon-button>
```


