import { db } from "../database/database.connection.js";
/* Games */

export async function signUp(req, res) {
  try {
    res.send("Resposta signUp");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  try {
    res.send("Resposta signIn");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function usersMe(req, res) {
  try {
    res.send("Resposta usersMe");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function ranking(req, res) {
  try {
    res.send("Resposta ranking");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

