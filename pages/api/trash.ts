import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      // ? GET /api/trash
      return res
        .status(200)
        .send(await prisma.task.findMany({ where: { isTrash: true } }))
    case 'DELETE':
      // ? DELETE /api/trash
      await prisma.task.deleteMany({ where: { isTrash: true } })
      return res.status(200).end()
    default:
      return res.status(405).end()
  }
}

export default handler
