export default {
	async fetch(request, env, ctx) {
		const { asn, country } = request.cf;
		const client_ip = request.headers.get('cf-connecting-ip');
		return new Response(`This is your ${client_ip} and you are accessing this site from ${country} | ${asn}.`);
	},
};
