const { gql } = require('apollo-server-express');

export interface Sample {
	id: string;
	name: string;
	transcription: string;
	file: string;
}

const schema = gql`
	# A sample
	type Sample {
		id: ID!
		name: String!
		transcription: String!
		file: String!
	}

	type Query {
		"List all samples"
		samples: [Sample]

		"Get sample by ID"
		sample(id: ID!): Sample
	}
`;

export default schema;
