import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 10);
import { db } from "../database/database.connection.js";

/* Get Clients */

export async function urlShorten(req, res) {
  const { session } = res.locals;
  const { url } = req.body;
  let shortUrl = nanoid();

  try {
    let urlTabela = (await db.query(`
    SELECT * FROM urls WHERE url = $1;`, 
    [url])).rows;

    if(urlTabela.length > 0){
      let objeto = {
        id: urlTabela[0].id,
        shortUrl: urlTabela[0].shortUrl
      };
      return res.status(201).send(objeto);
    }

    await db.query(`
    INSERT INTO urls
      ("userId", url, "shortUrl", "visitCount")
    VALUES 
      ($1, $2, $3, $4)
    `,[session.id, url, shortUrl, 0]);

    let resposta = (await db.query(`
    SELECT id, "shortUrl" FROM urls WHERE url = $1 ORDER BY id DESC;`, 
    [url])).rows[0];

    res.send(resposta);
  } catch (err) {
    res.status(500).send(err.message);
  }

};

export async function urlId(req, res) {

  try {
    res.send("Resposta urlId");
  } catch (err) {
    res.status(500).send(err.message);
  }

};

export async function urlOpen(req, res) {

  try {
    res.send("Resposta urlOpen");
  } catch (err) {
    res.status(500).send(err.message);
  }

};

export async function deleteUrlId(req, res) {

  try {
    res.send("Resposta deleteUrlId");
  } catch (err) {
    res.status(500).send(err.message);
  }

};