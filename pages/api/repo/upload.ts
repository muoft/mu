import { NextApiRequest, NextApiResponse } from "next";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { cli } from "../repo";

export const config = { api: { bodyParser: false } }

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const key = `submit/${req.query.filename}`;
    try {
        await cli.send(new PutObjectCommand({
            Bucket: 'muoft', Key: key, Body: req,
            ContentType: req.headers['content-type'],
            ContentLength: Number(req.headers['content-length'])
        }));
        res.status(200).send('ok');
    } catch (e) {
        console.error(e)
        res.status(500).send('error');
    }
}
