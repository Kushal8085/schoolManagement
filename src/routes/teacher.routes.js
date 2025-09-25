import express from "express";
import {
  getTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controllers.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {upload} from '../middleware/uploadDocs.middleware.js'


const teacherRouter = express.Router();

// Director only access
teacherRouter.get("/teachers", authMiddleware(["director"]), getTeachers);
teacherRouter.get("/teachers/:id", authMiddleware(["director"]), getTeacherById);
teacherRouter.post("/teachers", authMiddleware(["director"]), upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "aadharCard", maxCount: 1 },
    { name: "tenthMarksheet", maxCount: 1 },
    { name: "twelfthMarksheet", maxCount: 1 },
    { name: "graduationMarksheet", maxCount: 1 },
    { name: "postGraduationMarksheet", maxCount: 1 },
  ]), createTeacher);
teacherRouter.patch("/teachers/:id", authMiddleware(["director"]), updateTeacher);
teacherRouter.delete("/teachers/:id", authMiddleware(["director"]), deleteTeacher);

export default teacherRouter;
