import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
const router = Router();
router.post('/login', async (req,res)=>{
  const {email,password} = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({error:'not found'});
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({error:'invalid'});
  const token = jwt.sign({id:user.id,role:user.role}, process.env.JWT_SECRET || 'dev', {expiresIn:'1d'});
  res.json({token, role: user.role});
});
export default router;
