import { Router } from "express"


const router = Router();

router.get("/courses", (request, response) => {
    response.json([
        {id: 1, name: "Teste1"},
        {id: 2, name: "Teste2"}
    ])
})

router.get("/teste", (request, response) => {
    response.json([
        {id: 1, name: "Teste1"},
        {id: 2, name: "Teste2"}
    ])
})


export {router}