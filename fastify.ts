import Fastify from 'fastify';

const main = async () => {
    const app = Fastify({
        logger: true,
        bodyLimit: 100 * 1024 * 1024,
    });

    app.post<{
        Body: {
            files: any[],
        },
    }>('/example', (_req, res) => {
        console.log('Success!');

        res.send({
            success: true,
        });
    });

    app.setNotFoundHandler((req, reply) => {
        reply.code(404).send({
            error: 'Not Found',
            message: `Route ${req.method} ${req.url} not found`,
        });
    });

    const host = 'localhost';
    const port = '3000';

    console.log('Starting Web Server on ' + host + ':' + port+ '...');

    app.listen({
        host,
        port,
    });
}

main();