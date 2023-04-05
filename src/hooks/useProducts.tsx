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

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
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

export const EDIT_PRODUCT = gql`
  mutation ($id: ID!, $name: String!, $price: Float!, $category: String!) {
    updateProduct(id: $id, name: $name, price: $price, category: $category) {
      id
      name
      price
      category
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation ($id: ID!) {
    removeProduct(id: $id) {
      id
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

export const useProduct = (id: string) => {
  const { error, data, loading } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  return {
    error,
    data,
    loading,
  };
};
