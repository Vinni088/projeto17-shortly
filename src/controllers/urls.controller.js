import { db } from "../database/database.connection.js";
/* Get Clients */

export async function urlShorten(req, res) {

  try {
    res.send("Resposta urlShorten");
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