import * as admin from 'firebase-admin';

type Sample = import('./schema').Sample;

// const serviceAccount = require('../google-services.json');

admin.initializeApp({
	// credential: admin.credential.cert(serviceAccount),
});

const resolverFunctions = {
	Query: {
		async samples() {
			const samples = await admin.firestore().collection('samples').get();
			return samples.docs.map((sample) => sample.data()) as Sample[];
		},
	},
};

export default resolverFunctions;
