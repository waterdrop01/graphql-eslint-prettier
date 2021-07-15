const gql = require('graphql-tag');

const schema1Query = gql`
  query schema1Query {
    user {
      id
      name
    }
  }
`;

module.exports = {
  schema1Query,
};
