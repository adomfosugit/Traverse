// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  userid: string;
  email: string;
  firstname: string;
  lastname: string;
  roles: string[];
  sessionTimeout: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    userid: 'samuel.davies@sap.com',
    email: 'samuel.davies@sap.com',
    firstname: 'Samuel',
    lastname: 'Davies',
    roles: [
      'Subaccount Service Administrator',
      'Destination Administrator',
      'Subaccount Viewer',
      'Subaccount Administrator',
      'Cloud Connector Administrator',
      'Connectivity and Destination Administrator',
    ],
    sessionTimeout: 10,
  });
}
