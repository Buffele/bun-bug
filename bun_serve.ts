Bun.serve({
    routes: {
        '/example': {
            POST: async req => {
                const body = await req.json();
                return Response.json({
                    success: true,
                });
            },
        },
    },
});