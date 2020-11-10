import { firestore } from "firebase-admin";
import { FIELD_TYPE, WHERE_OP } from "../../src/enums";
import admin from "./firebase";
const db = admin.database();

/** traning */

/**
 * select
 */

export async function fetchSelect() {
  return (await db.ref("traning").once("value")).val();
}

/**
 * regist
 */

export async function regist(item) {
  // return await db.ref("traning").push(item);
  // keyを従来の方法で指定（上書きされるため危険）
  const key = "traning/" + item.id;
  return await db.ref(key).set(item);
}

/**
 * update
 */
export async function update(item) {
  const value = item[0];
  const key = item[1];
  return await db
    .ref("traning")
    .child(key)
    .update(value);
}

/**
 * delete
 */
export async function del(item) {
  return await db
    .ref("traning")
    .child(Object.keys(item)[0])
    .remove();
}

/** traningCategory */

export async function fetchSelectCategory() {
  return (await db.ref("traningCategory").once("value")).val();
}

/**
 * regist
 */

export async function registCategory(item) {
  // return await db.ref("traningCategory").push(item);
  // keyを従来の方法で指定（上書きされるため危険）
  const key = "traningCategory/" + item.categoryID;
  return await db.ref(key).set(item);
}

/**
 * update
 */
export async function updateCategory(item) {
  const value = item[0];
  const key = item[1];
  return await db
    .ref("traningCategory")
    .child(key)
    .update(value);
}

/**
 * delete
 */
export async function delCategory(item) {
  return await db
    .ref("traningCategory")
    .child(Object.keys(item)[0])
    .remove();
}
