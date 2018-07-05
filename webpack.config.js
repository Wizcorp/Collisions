module.exports = {
	entry : './src/Collisions.mjs',

	output : {
		path     : `${__dirname}/lib`,
		filename : 'index.js',
		library: 'collisions',
		libraryTarget: 'umd'
	}
};
