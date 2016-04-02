[![NPM version][npm-image]][npm-url]  [![Dependency Status][daviddm-image]][daviddm-url]   

 > A simple flexbox-based grid system

JigSass Grid is a responsive Sass (SCSS) flexbox-based grid
system, with a `display: inline-block` fallback backed in, where possible.

It is intended to be both flexible (pun intended) and easy to use. As part of the
JigSass ecosystem, JigSass Grid integrates with its other modules, relying on some of them
for consistent [resposive breakpoints](https://github.com/txhawks/jigsass-tools-mq/),
[sizing](https://github.com/txhawks/jigsass-tools-typography/) and more.

#### Installation

Using npm:

```sh
npm i -S jigsass-object-grid
```


#### Features
  - [Responsive](#responsive).
  - [Infinitly nestable](#nested-grids).
  - [Fixed fluid](#fixed-fluid) layouts.
  - Column wrapping.
  - [Equal height columns](#{$_grid-anchor}--equal-height).
  - Automatic distribution of widths.
  - Custom horizontal alignments of items <br />
    ([start](#{$_grid-anchor}-start),
    [center](#{$_grid-anchor}-center),
    [end](#{$_grid-anchor}-end),
    [reversed](#{$_grid-anchor}-rev),
    [space-between](#{$_grid-anchor}-space-between),
    [space-around](#{$_grid-anchor}-space-around)).
  - Custom vertical alignments of items ([top](#{$_grid-anchor}-top),
    [middle](#{$_grid-anchor}-middle),
    [bottom](#{$_grid-anchor}-bottom)).
  - Fluid by default.
  - Configureable grid-wide gutters widths.
  - Overrideable gutter widths on a per-item basis.
  - Built in gutter rules support.
  - Offsets.


#### Availeable classes
All classes and each modifier (including responsive modifiers) must be explicitly `@include`d
to be available in CSS


** Grid containers:**<br />
`.#{$_grid-class}`
  - `--start`, `--center`, `--end`, `--rev`, `--space-between`, `--space-around`
  - `--top`, `--middle`, `--bottom`, `--equal-height`
  - `--gutter-X` (gutter width, See [here](#gutter-width-modifiers)).


** Grid items:**<br />
`.#{$_item-class}`
  - `--col`, `--center, `
  - `--top`, `--middle`, `--bottom`, `--equal-height`
  - `--gutter-X` (gutter width, See [here](#gutter-width-modifiers)).
  - `--gutter-gutter-rule-X` (See [here](#gutter-rules)).
  - `--X-of-Y`
  - `--offset-X-of-Y`


#### Usage

First, you would need to import JigSass Grid:

```scss
@import 'path/to/jigsass-object-grid/scss/index'
```

And optionally [reconfigure](#configuration) the defaults to you liking.

To create a grid context, simply attach the #{$_grid-class} class to an element, Any element,
which will serve as a grid container. You can now add grid items to it (with a class of
#{$_item-class}). Grid containers' only legitimate children are grid items, and those, in turen,
may only reside within a grid container.

Like all other JigSass modules, JigSass Grid does not automatically generate any CSS on import.
In order to use its classes, you would have to first explicitly indicate your intention to use
them, using the [jigsass-grid](#jigsass-grid) or [jigsass-grid-item](#jigsass-grid-item) mixins.
This way our css remains small and maintainable:

```scss
@include jigsass-grid([$modifier, $from-brekpoint, $until-breakpoint, $misc-breakpoint]);
@include jigsass-grid-item([$modifier, $from-brekpoint, $until-breakpoint, $misc-breakpoint]);
```

Regardless of how many times a class is included, or where, it will only be generated once, where
`jigsass-object-grid` was imported to our main sass file, leaving us with a css file as small as
possible, and a predictable cascade for more example, see [here](#responsive).

## Contributing

It is a best practice for JigSass modules to *not* automatically generate css on `@import`, but 
rather have to user explicitly enable the generation of specific styles from the module.

Contributions in the form of pull-requests, issues, bug reports, etc. are welcome.
Please feel free to fork, hack or modify JigSass Object Grid in any way you see fit.

#### Writing documentation

Good documentation is crucial for usability, scalability and maintainability. When 
contributing, please do make sure that both its Sass functionality (functions, mixins, 
variables and placeholder selectors), as well as the CSS it generates (selectors, 
concepts, usage exmples, etc.) are well documented.

Jigsass Grid uses Jonathan Neals's [mdcss](//github.com/jonathantneal/mdcss).

When styles and documentation comments are not automatically generated by your module on `@import`,
please use the `sgSrc/sg.scss` file to enable their generation.

In addition, any file in `sgSrc/assets` will be available for use in the style guide.

## File structure
```bash
┬ ./
│
├─┬ scss/ 
│ └─ index.scss # The module's importable file.
│
├─┬ sgSrc/      # Style guide sources
│ │
│ ├── sg.scc    # It is a best practice for JigSass 
│ │             # modules to not automatically generate 
│ │             # css and documentation on `@import.` 
│ │             # Please use this file to enable css
│ │             # and documentation comments) generation.
│ │
│ └── assets/   # Files in `sgSrc/assets` will be 
│               # available for use in the style guide
│
└── styleguide/ # Generated documentation 
                # of the module's CSS
```

**License:** MIT



[npm-image]: https://badge.fury.io/js/jigsass-object-grid.svg
[npm-url]: https://npmjs.org/package/jigsass-object-grid

[daviddm-image]: https://david-dm.org/TxHawks/jigsass-object-grid.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TxHawks/jigsass-object-grid
