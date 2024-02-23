export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
	const res = await fetch(
		"https://7f9l0a6cmj.execute-api.us-east-1.amazonaws.com/prod/getethprice"
	);
	const price: Price = await res.json();
	return Response.json({ ...price });
}
