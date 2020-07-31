import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
	const date : string = new Date().toLocaleString();
    response.status(200).send(`${date}`);
}
