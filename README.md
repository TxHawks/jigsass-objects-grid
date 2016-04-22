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
npm i -S jigsass-objects-grid
```


#### Features
  - [Responsive](https://txhawks.github.io/jigsass-objects-grid/#responsive).
  - [Infinitly nestable](https://txhawks.github.io/jigsass-objects-grid/#nested-grids).
  - [Fixed fluid](https://txhawks.github.io/jigsass-objects-grid/#fixed-fluid) layouts.
  - Column wrapping.
  - [Equal height columns](https://txhawks.github.io/jigsass-objects-grid/#o-grid--equal-height).
  - Automatic distribution of widths.
  - Custom horizontal alignments of items <br />
    ([start](https://txhawks.github.io/jigsass-objects-grid/#o-grid-start),
    [center](https://txhawks.github.io/jigsass-objects-grid/#o-grid-center),
    [end](https://txhawks.github.io/jigsass-objects-grid/#o-grid-end),
    [reversed](https://txhawks.github.io/jigsass-objects-grid/#o-grid-rev),
    [space-between](https://txhawks.github.io/jigsass-objects-grid/#o-grid-space-between),
    [space-around](https://txhawks.github.io/jigsass-objects-grid/#o-grid-space-around)).
  - Custom vertical alignments of items ([top](https://txhawks.github.io/jigsass-objects-grid/#o-grid-top),
    [middle](https://txhawks.github.io/jigsass-objects-grid/#o-grid-middle),
    [bottom](https://txhawks.github.io/jigsass-objects-grid/#o-grid-bottom)).
  - Fluid by default.
  - Configureable grid-wide gutters widths.
  - Overrideable gutter widths on a per-item basis.
  - Built in gutter rules support.
  - Offsets.


#### Availeable classes
For classes and modifiers (including responsive modifiers) to be generated in CSS
output, they must be explicitly enabled in the [configuration maps](#css-output)
(see [usage](#usage) below).


**Grid containers:**<br />
`.o-grid`
  - `--start`, `--center`, `--end`, `--rev`, `--space-between`, `--space-around`
  - `--top`, `--middle`, `--bottom`, `--equal-height`
  - `--gutter-X` (gutter width, See [here](https://txhawks.github.io/jigsass-objects-grid/#gutter-width-modifiers)).


**Grid items:**<br />
`.o-grid__item`
  - `--col`, `--center, `
  - `--top`, `--middle`, `--bottom`, `--equal-height`
  - `--gutter-X` (gutter width, See [here](https://txhawks.github.io/jigsass-objects-grid/#gutter-width-modifiers)).
  - `--gutter-gutter-rule-X` (See [here](https://txhawks.github.io/jigsass-objects-grid/#gutter-rules)).
  - `--X-of-Y`
  - `--offset-X-of-Y`


#### Usage

First, import JigSass Grid into your main stylesheet:

```scss
@import 'path/to/jigsass-objects-grid/scss/index'
```

And optionally [reconfigure](https://txhawks.github.io/jigsass-objects-grid/#configuration) the defaults to your liking.

To create a grid context, simply attach the `.o-grid` class to an element, Any element,
which will serve as a grid container. You can now add grid items to it (with a class of
.o-grid__item). Grid containers' only legitimate children are grid items, and those, in turn,
may only reside within a grid container.

Like all other JigSass modules, JigSass Grid does not automatically generate any
CSS output when imported. In order to use its classes, you would have to first
explicitly indicate your intention to use them by enabling their generation in
the associated [configurations map](https://txhawks.github.io/jigsass-objects-grids/#css-output), 
Leaving us only with CSS we need.


All JigSass Grid classes are responsive-enabled, using
[JigSass MQ](https://txhawks.github.io/jigsass-tools-mq/) and the breakpoints defined in the
[$jigsass-breakpoints](https://txhawks.github.io/jigsass-tools-mq/#variable-jigsass-breakpoints)
variable.

Based on enabled selectors in the 
[configuration map](https://txhawks.github.io/jigsass-objects-grids/#css-output), 
responsive modifiers are generated according to the following logic:

```scss
.o-grid[--modifier][-[-from-{breakpoint-name}][-until-{breakpoint-name}][-misc-{breakpoint-name}]]
.o-grid__item[--modifier][-[-from-{breakpoint-name}][-until-{breakpoint-name}][-misc-{breakpoint-name}]]
```

So, assuming the `medium`, `large` and `landscape` breakpoints are defined in `$jigsass-breakpoints`
as `600px`, `1024px` and `(orientation: landscape)` respectively,


```scss
$jigsass-grid-conf: (
  no-breakpoint: (
    no-modifier: true,
    end: true,
  ),
  until-medium: (
    end: true,
  ),
  from-large-when-landscape: (
    end: true,
  ),
)
```

will generate the following classes:
  - `.o-grid`, which is not limited to any media-query.
  - `.o-grid--end`, which is not limited to any media-query.
  - `.o-grid--end--until-medium`, which will be in effect at
    `(max-width: 37.49em)` and will override styles in the default class
    until that point.
  - `.o-grid--end--from-large-when-landscape`, which will go into effect at
    `(min-width: 64em) and (orientation: landscape)` and will override styles
    in the default class under these  conditions.


## Documentation

The full documentation is available [here](https://txhawks.github.io/jigsass-objects-grids/).


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

Jigsass Grid uses Jonathan Neal's [mdcss](//github.com/jonathantneal/mdcss).

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



[npm-image]: https://badge.fury.io/js/jigsass-objects-grid.svg
[npm-url]: https://npmjs.org/package/jigsass-objects-grid

[daviddm-image]: https://david-dm.org/TxHawks/jigsass-objects-grid.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TxHawks/jigsass-objects-grid
