import { getData } from '@/data';

// Please check line 139 in /data/index to see hook getData
export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter');
  const movies = await getData(filter);
  return Response.json({ movies })
}
