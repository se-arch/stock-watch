import { Router } from "express"
import { search } from "./handlers"


const router: Router = Router()

router.get("/search", search);

export default router;
