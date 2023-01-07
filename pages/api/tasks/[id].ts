import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  switch (req.method) {
    case 'PUT':
      // ? PUT /api/tasks/[id]
      return res.status(200).send(
        await prisma.task.update({
          where: { id: Number(id) },
          data: req.body
        })
      )
    case 'DELETE':
      // ? DELETE /api/tasks/[id]
      return res.status(200).send(
        await prisma.task.update({
          where: { id: Number(id) },
          data: { isTrash: true }
        })
      )
    default:
      return res.status(405).end()
  }
}

export default handler
