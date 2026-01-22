import type { NextApiRequest, NextApiResponse } from 'next'
import { cli } from '../repo'
import { GetObjectCommand } from '@aws-sdk/client-s3'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const path = req.query.path as string
    const file = await cli.send(new GetObjectCommand({ Bucket: 'muoft', Key: path }))
    if (file.ContentType) res.setHeader('Content-Type', file.ContentType)
    res.setHeader('Content-Disposition', 'inline')
    res.status(200).send(file.Body as any)
}