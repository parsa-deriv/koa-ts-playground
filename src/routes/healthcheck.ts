import Router from 'koa-router';
const router = new Router();

router.get("/ping", async (ctx) => {
    try {
        ctx.body = {
            status: "sucess",
            data: "pong"
        }
    } catch (err) {
        console.log(err);
    }
})

export default router;