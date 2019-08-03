# dot-grid

Query Param controlled dot (bullet) journal generator.
Useful if you need to build a dot pattern.

## Query Params

Each of the following query params can be sent to the page. If you want to have multiple configurations, simply join the parameters with `&`.

E.g.
```
https://dot-grid.surge.sh?size=3&radius=0
```

### `?background`
Controls the background color. Can be any valid css color, hex, or rgb.
Note, if you are using hex values, prefix the value with a `%23`, not `#`.

Default: `black`

Examples:
```
https://dot-grid.surge.sh?background=white
```
```
https://dot-grid.surge.sh?background=rgb(245, 231, 243)
```
```
https://dot-grid.surge.sh?background=%23dedede
```

### `?color`
Controls the dot color. Can be any valid css color, hex, or rgb (or rgba).
Note, if you are using hex values, prefix the value with a `%23`, not `#`.

Default: `grey`

Examples:
```
https://dot-grid.surge.sh?color=white
```
```
https://dot-grid.surge.sh?color=rgba(255, 152, 152, 0.4)
```
```
https://dot-grid.surge.sh?color=%23ff98008c
```

### `?size`
Controls how large the dot is. Can be any decimal value.

Default: `0.5`

Examples:
```
https://dot-grid.surge.sh?size=0.2
```
```
https://dot-grid.surge.sh?size=3
```

### `?radius`
Controls how round the dot is. Can be any percent, pixel, or other valid css unit.
Note, if using a percent, use suffix the value with `%25`, not `%`.

Default: `100%`

Examples:
```
https://dot-grid.surge.sh?radius=0
```
```
https://dot-grid.surge.sh?radius=20%25
```

### `?numberOfDots`
Controls the number of dots shown on the page. Can be any whole integer value.

Default: 1000

Example:
```
https://dot-grid.surge.sh?numberOfDots=4
```


## Development instructions
1. In the root directory, run `npm install` to install all the project dependencies
2. Run `npm start` to start the dev server
3. Navigate to http://localhost:1234 (or the url provided after running `npm start`)

## Development commands
Below are a list of commands used for development. The logic for all the commands is in the local `package.json`
- `npm start` - starts a server hosting the webapp on localhost using
[Parcel](https://parceljs.org/)
and will watch for changes
- `npm run build` - builds a final distributable using
[Parcel](https://parceljs.org/)
- `npm test` - runs tests in
[Jest](https://jestjs.io/)
