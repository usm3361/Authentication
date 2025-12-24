import { Router } from "express"
import { welcome } from "../controlers/users"


const router = express.Router()

router.route("/").get(welcome)