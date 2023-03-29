import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      price
      category
    }
  }
`;

const GET_CATEGORY = gql`
  query GetCategory($category: String!) {
    allProducts(filter: { category: $category }) {
      id
      name
      price
      category
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation ($name: String!, $price: Float!, $category: String!) {
    createProduct(name: $name, price: $price, category: $category) {
      id
      name
      price
      category
    }
  }
`;

export const useCategory = (categoryString: string) => {
  const { error, data, loading } = useQuery(
    categoryString === "Todas" ? GET_PRODUCTS : GET_CATEGORY,
    {
      variables: { category: categoryString },
    }
  );

  return {
    error,
    data,
    loading,
  };
};
