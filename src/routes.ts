import { Router } from "express"
import { Authenticate } from "./middlewares/Authenticate";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { RefreshJwtTokenController } from "./useCases/refreshJwtToken/RefreshJwtTokenController";


const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshJwtTokenController();

router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handler)
router.post("/refresh-token", refreshTokenController.handler)

router.get("/courses", Authenticate, (request, response) => {
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