import * as admin from 'firebase-admin';

type Sample = import('./schema').Sample;

// const serviceAccount = require('../google-services.json');

admin.initializeApp({
	// credential: admin.credential.cert(serviceAccount),
});

const resolverFunctions = {
	Query: {
		async samples(): Promise<Sample[]> {
			const samples = await admin.firestore().collection('samples').get();
			return samples.docs.map((sample) => ({ id: sample.id, ...sample.data() })) as Sample[];
		},

		async sample(arg0: any, args: any): Promise<Sample> {
			const sample = await admin.firestore().collection('samples').doc(args.id).get();
			console.log(sample);
			return sample.data() as Sample;
		},
	},
};

export default resolverFunctions;
