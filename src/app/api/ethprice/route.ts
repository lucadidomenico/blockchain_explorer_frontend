export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
	const res = await fetch(
		"https://xac37xwsbd.execute-api.us-east-1.amazonaws.com/prod/getethprice"
	);
	const price: Price = await res.json();
	return Response.json({ ...price });
}
