# New IDN Website
The in-progress website for the Indigenous Data Network as a whole. Will be available at [dev.idnau.org](https://dev.idnau.org).

Written in [Nuxt](https://nuxt.com/), [Nuxt Content](https://content.nuxt.com/), [Shadcn-vue](https://www.shadcn-vue.com/) and [Tailwind](https://tailwindcss.com/).

## Contents
- [Making Changes on GitHub](#making-changes-on-github)
- [Feedback & Bug Reports](#feedback--bug-reports)
- [Markdown Content](#markdown-content)
    - [Front Matter](#front-matter)
    - [Content Components](#content-components)
    - [Available Content Components to Use](#available-content-components-to-use)
    - [Images](#images)
- [Styling & Tailwind](#styling--tailwind)
- [Install & Run](#install--run)
- [Contacts](#contacts)

## Making Changes on GitHub
For simple changes like updating Markdown files or uploading images, you can do so on GitHub in the browser. Make sure you make a _pull request_, which will be reviewed by Jamie for merging.

For more complex changes such as styling or functional changes not in Markdown, please make a feature request on GitHub for Jamie to do - see below.

(For now) ensure you select the "feature/idn-website-refactor" branch **before** making changes in the browser.

![Selecting the branch](/docs/branch-select.png)

For updating pages, navigate to the `content/` folder. To add a file, click "Add file" in the top right.

![Adding a file](/docs/add-file.png)

For editing a file, click the "Code" tab and select the pencil icon in the top right.

![Editing a file](/docs/edit-file.png)

Once you're done with your changes, click "Commit Changes" in the top right. You'll be presented with a window where you can describe your changes in a message. Make sure to select "Create a new branch for this commit and start a pull request" for your changes to be reviewed by Jamie for merging. This prevents conflicts in case multiple people are working on the same file at the same time.

![Making a pull request](/docs/pr.png)

## Feedback & Bug Reports
If you have any feedback or bugs to report, please create a GitHub issue assigned to Jamie.

Click the "Issues" tab at the top to view existing issues. To create a new issue, click "New Issue" in the top right.

![GitHub Issues page](/docs/issues.png)

You'll be presented with a few issue types to choose from. Select the one that's most appropriate.

![Issue templates](/docs/issue-templates.png)

You can assign a person to the issue, which would be Jamie most of the time.

![Assigning Jamie to issue](/docs/jamie-select.png)

## Markdown Content
Markdown is a very simple syntax for writing formatted pages, mainly for documentation, that can produce pages like HTML. See the [Markdown guide](https://www.markdownguide.org/) on how to write Markdown

Pages are written in Markdown in the `content/` folder.

The navbar content is dynamic with the pages file structure, meaning you don't need to update the nav when adding/removing pages.

You can specify the order of pages that appear in the nav by prefixing page titles/folders with numbers, e.g.:

```
4.projects/
    2.ardc.md
    1.index.md
2.about.md
3.contact.md
1.index.md
```

See [Nuxt Content docs](https://content.nuxt.com/usage/markdown) for more info.

### Front Matter
Meta information and other data, defined in YAML, goes above the markdown seperated by `---`, e.g.:

```yaml
---
title: Page title
description: Meta description of the page
---
Markdown content
```

### Content Components
Vue components to be used in Markdown pages are located in `components/content/`. To use them in Markdown pages, simply have a colon `:` before the name of the component, e.g.:

```
...

:MyComponent

or

:my-component

...
```

For components with slots, use two colons before the component name and two colons after the slot content. Named slots are prefixed with `#` and must go after the default slot. For example:

```
...

::ComponentDefaultSlot
Slot content goes here
::

::ComponentNamedSlot
Default slot content

#slotName
Named slot content
::

...
```

You can provide props to components by space-separating them in curly braces `{}`:

```
:MyComponent{prop1="value1" prop2="value2"}
```

#### Available Content Components to use:

##### LinkButton
For easily adding styled buttons that act as links in Markdown.

![LinkButton component example](/docs/linkbutton.png)

Usage:

```
::LinkButton{to="/"}
A button
::
```

Prop|Type|Required|Default|Description
-|-|:-:|-|-
to|string|||The link for the button to point to. Can be an internal or external URL
variant|"default" \| "secondary" \| "outline" \| "destructive" \| "ghost" \| "link"||"default"|The type or style of the button (see [shadcn-vue](https://www.shadcn-vue.com/docs/components/button.html) for more info)
size|"default" \| "sm" \| "lg" \| "icon" ||"default"|The size of the button (see [shadcn-vue](https://www.shadcn-vue.com/docs/components/button.html) for more info)
class|string|||HTML classes, which can include Tailwind styling classes for convenience
<!-- &check; -->

Slot|Description
-|-
default|The button's contents

##### Card
For containers with borders, or "cards", with an optional title, subtitle, footer and image.

![Card component example](/docs/card.png)

Usage:

```
::Card{imgPosition="right" imgHalf}
Card content

#title
Card title

#description
Card description

#footer
Card footer

#img
![IDN Logo](/img/idn-logo-250.png)
::
```

Prop|Type|Required|Default|Description
-|-|:-:|-|-
imgPosition|"top" \| "right" \| "bottom" \| "left"||"right"|The position of the image if included
imgHalf|boolean||false|Whether the image should take up exactly half the width/height of the card
class|string|||HTML classes, which can include Tailwind styling classes for convenience
<!-- &check; -->

Slot|Description
-|-
default|The card's body
title|The title of the card
description|A smaller subtitle for the card
footer|A footer that goes below the card main body
img|An image that can be positioned with the `imgPosition` prop

##### Hero
The hero component for the home page.

##### Person
For listing staff, including their position, bio and profile picture.

![Person component example](/docs/person.png)

Usage:

```
::Person
The person's bio

#name
### Name

#position
_Position_

#img
![Person's profile picture](/img/person-placeholder.png){width="220"}
::
```

Slot|Description
-|-
default|The person's bio
name|The person's name
position|The person's position
img|The profile picture

### Images
See the [NuxtImage docs](https://image.nuxt.com/usage/nuxt-img) for how to include images in Markdown files. The syntax is the same as regular Markdown, but you can provide extra props to be passed to the underlying `<NuxtImg />` component, such as placeholder info, provider, quality, densities, etc.

## Styling & Tailwind
Styling can be done in two ways: global CSS changes and Tailwind classes.

See [Tailwind](https://tailwindcss.com/) docs for more info on how to use Tailwind.

Variables to be used in Tailwind classes must be defined as CSS variables in `assets/css/tailwind.css`. For colours, define them in HSL values ***without*** the `hsl()` function. You can also define dark mode-specific values inside the `.dark` class in that file.

These variables should then be listed in `tailwind.config.js`. For colours, call the `hsl()` function here.

## Install & Run
To install, ensure [pnpm](https://pnpm.io/) is installed, then run:

```bash
pnpm install
```

Then to run locally, run:
```bash
pnpm dev
```

## Contacts
For technical enquiries:

**Jamie Feiss**  
**Data Infrastructure Developer**  
Indigenous Data Network  
University of Melbourne  
[jamie.feiss@unimelb.edu.au](mailto:jamie.feiss@unimelb.edu.au)

For policy:

**Levi Murray**  
**Strategic Data Manager**  
Indigenous Data Network  
University of Melbourne  
[levi.murray@unimelb.edu.au](mailto:levi.murray@unimelb.edu.au)
