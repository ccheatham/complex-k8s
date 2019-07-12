const graphql = require('graphql');
const axios = require('axios');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const keys = require('../keys');

const CreditCardType = new GraphQLObjectType({
  name: 'CreditCard',
  fields: () => ({
    cardNumber: { type: GraphQLString },
    cardType: { type: GraphQLString },
    cardLimit: { type: GraphQLInt },
    cardUsage: { type: GraphQLInt }
  })
})

const CustomerCreditCardType = new GraphQLObjectType({
  name: 'CustomerCreditCard',
  fields: () => ({
    creditCards: { 
      type: new GraphQLList(CreditCardType)
    }
  })
}) 

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customerCreditCards: {
      type: CustomerCreditCardType,
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, args) {
        const url = `http://${keys.mfHost}:${keys.mfPort}/creditcardsservice`;
        console.log(url);
        return axios.post(url, { custId: args.id })
          .then(({ data: cards }) => cards);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})