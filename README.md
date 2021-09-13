# minmax.js

> It does exactly what you expected.

## Installation

```bash
$ npm add minmax.js
```

## API

**`minmax(value: number, min?: number, max?: number): number`**

- `value`: Value to evaluate.
- `min`: Minimum value. Default is `-Infinity`.
- `max`: Maximum value. Default is `Infinity`.

It returns `number`.

## Examples

```js
import minmax from 'minmax.js'

minmax(2, 5, 20) // 5
minmax(10, 5, 20) // 10
minmax(0, 20, 30) // 20
minmax(90, 30, 50) // 50
```

## License

[MIT](https://github.com/jhaemin/minmax.js/blob/main/LICENSE)
