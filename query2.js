const gql = require('graphql-tag');

const schema2Query = gql`
  query schema2Query {
    book {
      id
      yea
    }
  }
`;

module.exports = {
  schema2Query,
};
