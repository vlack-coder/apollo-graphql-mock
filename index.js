const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 5001

const typeDefs = gql`
  type Product {
    id: Int
    name: String
    price: Int
    description: String
    sku: String
    image: String
  }

  type Query {
    getProducts: [Product]
  }
`;
const resolvers = {
  Query: {
    getProducts: () => productsData,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen({port: PORT}).then(({ url , }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const productsData = [
  {
    id: 1,
    name: "Paracetamol",
    description:
      "Paracetamol (acetaminophen) is a pain reliever and a fever reducer",
    sku: "8HE902",
    price: 300,
    image:
      "https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg",
  },
  {
    id: 2,

    name: "Prednisolone",
    description:
      "Prednisolone is a corticosteroid (cortisone-like medicine or steroid). It works on the immune system to help relieve swelling, redness, itching, and allergic reactions",
    sku: "8HE809",
    price: 600,
    image:
      "https://5.imimg.com/data5/RU/SX/JJ/SELLER-109604861/prednisolone-tablet-500x500.jpg",
  },
  {
    id: 3,
    name: "Lumefantrine",
    description:
      "Lumefantrine is an antimalarial agent used to treat acute uncomplicated malaria.",
    sku: "8HE809",
    price: 1200,
    image:
      "https://i1.wp.com/nimedhealth.com.ng/wp-content/uploads/2020/09/IMG_20200920_082326-1.jpg?fit=2487%2C1599&ssl=1",
  },
  {
    id: 4,
    name: "Coflin",
    description:
      "Coflin Is Used To Treat Coughs And Congestion Caused By The Common Cold, Bronchitis, And Other Breathing Illnesses.",
    sku: "8HE809",
    price: 1200,
    image:
      "https://www.m-medix.com/2677-large_default/dr-meyers-coflin-expectorant-100ml.jpg",
  },
];
