const express = require("express")
const authRoutes = require("./auth")
const taskRoutes = require("./tasks")

const router = express.Router()

router.use("/auth", authRoutes)

router.use("/tasks", taskRoutes)

module.exports = router
