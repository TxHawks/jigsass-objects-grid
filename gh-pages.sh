#!/bin/sh
# Generate documentation and deploy it to GitHub pages
# http://TxHawks.github.io/jigsass-objects-grid/
gulp sass:sg
git add ./styleguide
git commit -m "Compile docs"
git subtree push --prefix styleguide origin gh-pages
