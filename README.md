# Bug Bug

Tested on:
- Bun 1.2.16 and Windows

## How to run

1.

```
bun install
```

2.

```
bun start
```

3.
```
composer install
```

4.

```
php index.php
```

Expected output:
```
Request successful: {"success":true}
```

Got output:
```
Request error: Client error: `POST http://localhost:3000/example` resulted in a `417 Expectation Failed` response
```