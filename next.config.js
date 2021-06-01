module.exports = {
	images: {
		domains: [
			'links.papareact.com',
			'platform-lookaside.fbsbx.com',
			'firebasestorage.googleapis.com',
			'shorturl.at',
		],

		loader: 'imgix',
		path: '',
	},
	// exportPathMap: async function (
	// 	defaultPathMap,
	// 	{ dev, dir, outDir, distDir, buildId }
	// ) {
	// 	return {
	// 		'/': { page: '/' },
	// 		'/about': { page: '/about' },
	// 		'/p/hello-nextjs': {
	// 			page: '/post',
	// 			query: { title: 'hello-nextjs' },
	// 		},
	// 		'/p/learn-nextjs': {
	// 			page: '/post',
	// 			query: { title: 'learn-nextjs' },
	// 		},
	// 		'/p/deploy-nextjs': {
	// 			page: '/post',
	// 			query: { title: 'deploy-nextjs' },
	// 		},
	// 	};
	// },
};
