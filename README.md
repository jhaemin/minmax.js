# minmax.js

<h3 align="left">
  <pre lang="bash">$ npm add minmax.js</pre>
</h3>

## API

### `minmax(value: number, min?: number, max?: number): number`

- `value`: Value to evaluate.
- `min`: Minimum value. Default is `-Infinity`.
- `max`: Maximum value. Default is `Infinity`.

It returns `number`.

## Examples

```js
import minmax from 'minmax.js'

minmax(10, 5, 20) // 10
minmax(0, 20, 30) // 20
minmax(90, 30, 50) // 50
```

## License

MIT
