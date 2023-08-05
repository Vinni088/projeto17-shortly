import bcrypt from "bcrypt";
import { v4 as tokenGeneretor } from "uuid";
import { db } from "../database/database.connection.js";
/* Games */

export async function signUp(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) return res.status(422).send(" As senhas apresentadas são diferentes. ")

  const hash = bcrypt.hashSync(password, 10);
  try {
    let usuarioPreExistente = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if (usuarioPreExistente.rows.length > 0) return res.status(422).send(" Esse email já está cadastrado ");

    let insert = await db.query(`
    INSERT INTO users 
      (name, email, password)
    VALUES 
      ($1, $2, $3);
    `,[name, email, hash])

    res.status(201).send("SignUp efetuado com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  const { email, password} = req.body;
  const token = tokenGeneretor();
  
  try {
    let usuario = (await db.query(`SELECT * FROM users WHERE email = $1;`,[email])).rows[0];
    if(!usuario) {return res.status(401).send(" O email enviado não está cadastrado. ")};

    const senhaEstaCorreta = bcrypt.compareSync(password, usuario.password);
    if(!senhaEstaCorreta) {return res.status(401).send(" A senha enviada não está correta. ")};

    let  usuarioPossuiToken = await db.query(`SELECT * FROM sessions WHERE "userId" = $1;`,[usuario.id]);
    /**/ usuarioPossuiToken = usuarioPossuiToken.rows;

    if (usuarioPossuiToken.length !== 0) { 
      return res.send({token: usuarioPossuiToken[0].token}) 
    }
    if (usuarioPossuiToken.length === 0) { 
      await db.query(`INSERT INTO sessions("userId", token) VALUES($1, $2);`,
      [usuario.id, token]);
      return res.send({token})
      return(res.send("usuario n possui token"));
    }
    res.send(usuarioPossuiToken);
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

