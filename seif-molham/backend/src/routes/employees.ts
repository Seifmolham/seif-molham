import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();
router.get('/', async (req,res)=>{ const emps = await prisma.employee.findMany(); res.json(emps); });
export default router;
