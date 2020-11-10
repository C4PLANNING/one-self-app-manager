import { Request, Response } from "express";
import * as HttpStatus from "http-status-codes";
import * as firestore from "./modules/firestore";

import bodyParser from "body-parser";
import express from "express";

const app = express();

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// traning

// select
app.get("/api/get", async (req: Request, res: Response) => {
  console.log(`/select: ${req.body}`);
  try {
    // const item: SelectRequest = req.body;

    // if (item == null) {
    //   res.status(HttpStatus.BAD_REQUEST).send({ msg: "invalid param" });
    //   return;
    // }

    const result = await firestore.fetchSelect();
    console.log(`/select: result`, result);
    res.send(result);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// regist
app.post("/api/regist", async (req: Request, res: Response) => {
  try {
    await firestore.regist(req.body);
    console.log(`/update: OK`);
    res.send(HttpStatus.OK);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// update
app.post("/api/update", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    // const item: UpdateRequest = req.body;

    // if (item == null) {
    //   res.status(HttpStatus.BAD_REQUEST).send({ msg: "invalid param" });
    //   return;
    // }

    await firestore.update(req.body);
    console.log(`/update: OK`);
    res.send(HttpStatus.OK);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// delete
app.post("/api/delete", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    // const item: DeleteRequest = req.body;
    // console.info(`/delete: req=${JSON.stringify(item, null, 2)}`);

    // if (item == null) {
    //   res.status(HttpStatus.BAD_REQUEST).send({ msg: "invalid param" });
    //   return;
    // }

    await firestore.del(req.body);
    console.log(`/delete: OK`);
    res.send(HttpStatus.OK);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// traningCategory

// select
app.get("/api/getC", async (req: Request, res: Response) => {
  console.log(`/select: ${req.body}`);
  try {
    // const item: SelectRequest = req.body;

    // if (item == null) {
    //   res.status(HttpStatus.BAD_REQUEST).send({ msg: "invalid param" });
    //   return;
    // }

    const result = await firestore.fetchSelectCategory();
    console.log(`/select: result`, result);
    res.send(result);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// regist
app.post("/api/registC", async (req: Request, res: Response) => {
  try {
    await firestore.registCategory(req.body);
    console.log(`/update: OK`);
    res.send(HttpStatus.OK);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// update
app.post("/api/updateC", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    // const item: UpdateRequest = req.body;

    // if (item == null) {
    //   res.status(HttpStatus.BAD_REQUEST).send({ msg: "invalid param" });
    //   return;
    // }

    await firestore.updateCategory(req.body);
    console.log(`/update: OK`);
    res.send(HttpStatus.OK);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

// delete
app.post("/api/deleteC", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    // const item: DeleteRequest = req.body;
    // console.info(`/delete: req=${JSON.stringify(item, null, 2)}`);

    // if (item == null) {
    //   res.status(HttpStatus.BAD_REQUEST).send({ msg: "invalid param" });
    //   return;
    // }

    await firestore.delCategory(req.body);
    console.log(`/delete: OK`);
    res.send(HttpStatus.OK);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ msg: `${error}` });
    return;
  }
});

export default app;
