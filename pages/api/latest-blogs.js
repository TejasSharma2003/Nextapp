import { getAllBlogs } from '@/utils/blog-util';

function handler(req, res) {
  if (req.method === 'GET') {
    const blogs = getAllBlogs();
    return res.json({ status: 200, blogs });
  }
}
export default handler;
