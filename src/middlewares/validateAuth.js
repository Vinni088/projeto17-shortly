import { db } from "../database/database.connection.js"

export async function validateAuth(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    console.log(token);

    if (!token) return res.sendStatus(401)

    try {
        const session = await db.query(`SELECT * FROM sessions WHERE token = $1;`,[token]).rows
        if (!session) return res.sendStatus(401)

        res.locals.session = session;

        next();

    } catch (err) {
        return res.status(500).send(err.message);
    }
}