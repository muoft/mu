import { NextApiRequest, NextApiResponse } from "next"
import { ListBucketsCommand, ListObjectsCommand, S3Client } from "@aws-sdk/client-s3"

export const cli = new S3Client({
    region: 'auto', endpoint: process.env.S3_ENDPOINT,
    credentials: { accessKeyId: process.env.S3_KEY!, secretAccessKey: process.env.S3_SECRET!, },
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { Contents } = await cli.send(new ListObjectsCommand({ Bucket: 'muoft' }))
    res.status(200).json(Contents.filter(f => f.Key.endsWith(".pdf")).map(f => f.Key))
}

export const fetchAll = async () => {
    const { Contents } = await cli.send(new ListObjectsCommand({ Bucket: 'muoft' }))
    return Contents.filter(f => f.Key.endsWith(".pdf")).map(f => f.Key)
}