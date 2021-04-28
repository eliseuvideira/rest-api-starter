import { body, params } from "@ev-fns/validation";
import { Router } from "express";
import {
  booksDeleteOne,
  booksGetMany,
  booksGetOne,
  booksPatchOne,
  booksPostOne,
} from "../endpoints/books";
import {
  booksGetOneParams,
  booksPatchOneBody,
  booksPostOneBody,
} from "../validations/books";

const router = Router();

/**
 * GET /books
 * @tag Books
 * @response 200
 * @responseContent {Book[]} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get("/books", booksGetMany);

/**
 * POST /books
 * @tag Books
 * @security BearerAuth
 * @bodyContent {BookPostOne} application/json
 * @response 201
 * @responseContent {Book} 201.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.post("/books", body(booksPostOneBody), booksPostOne);

/**
 * GET /books/{bookId}
 * @tag Books
 * @pathParam {integer} bookId
 * @response 200
 * @responseContent {Book} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get("/books/:bookId", params(booksGetOneParams), booksGetOne);

/**
 * PATCH /books/{bookId}
 * @tag Books
 * @security BearerAuth
 * @pathParam {integer} bookId
 * @bodyContent {BookPatchOne} application/json
 * @response 200
 * @responseContent {Book} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.patch(
  "/books/:bookId",
  params(booksGetOneParams),
  body(booksPatchOneBody),
  booksPatchOne,
);

/**
 * DELETE /books/{bookId}
 * @tag Books
 * @security BearerAuth
 * @pathParam {integer} bookId
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.delete("/books/:bookId", params(booksGetOneParams), booksDeleteOne);

export default router;
