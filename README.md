# Bug Bug

Tested on:
- Bun: 1.2.17+282dda62c
- Windows: Microsoft Windows NT 10.0.26100.0 x64

## How to run

Install dependencies for Bun:
```
bun install
```

Run bun fastify server:
```
bun start
```

Install dependencies for Composer:
```
composer install
```

Run PHP script:
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