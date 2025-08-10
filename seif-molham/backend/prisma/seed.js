const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash('Welcome123!', 10);
  await prisma.user.create({ data: { email: 'admin@seifmolham.com', password: hash, role: 'ADMIN' } });
  await prisma.employee.createMany({ data: [
    { name: 'Amina Hassan', position: 'Customer Success', department: 'Support', location: 'Cairo' },
    { name: 'Omar Farouk', position: 'Recruiter', department: 'HR', location: 'Alexandria' }
  ]});
  console.log('Seed completed');
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>process.exit());
