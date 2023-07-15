import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check if the method is POST
  if (req.method === 'POST') {
    // const { username, password } = req.body;

    // eslint-disable-next-line no-promise-executor-return
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      res.status(200).json({ success: true });
    });
  } else {
    // If the method is not POST
    res.setHeader('Allow', 'POST');
    res.status(405).json({ success: false });
  }
}
