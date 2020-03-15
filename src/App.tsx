import React from "react";
import "./App.css";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery, useMutation } from "@apollo/react-hooks";
import Button from '@material-ui/core/Button';

const graphqlEndpoint =
  process.env.REACT_APP_GRAPHQL_ENDPOINT ?? "http://localhost:8000/graphql";
const client = new ApolloClient({
  uri: graphqlEndpoint
});

// https://medium.com/@ss_81611/ant-design-the-best-react-ui-library-ive-ever-used-3e0a48ab24c3

const ALL_POSTS = gql`
  {
    allPosts {
      id
      body
    }
  }
`;

/*
function PostList() {
  const { loading, error, data } = useQuery(ALL_POSTS);
  if (loading) {
    return null;
  }
  if (error) {
    return <div>There was an error: {error.message}</div>;
  }

  console.log("all posts are", data.allPosts);
  return (
    <List
      header={<div>All Posts</div>}
      bordered
      dataSource={data.allPosts}
      renderItem={(post: any) => <List.Item>{post.body}</List.Item>}
    />
  );
}
*/

const ADD_POST = gql`
  mutation AddPost($input: PostInput!) {
    addPost(input: $input) {
      id
    }
  }
`;

/*
function AddPostForm() {
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: ALL_POSTS }]
  });

  const onFinish = async (values: any) => {
    await addPost({
      variables: {
        input: {
          body: values.body
        }
      }
    });
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ body: "" }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Body"
        name="body"
        rules={[{ required: true, message: `Enter a post body` }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
*/

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Button variant="contained" color="primary">
          Hello world
        </Button>
      </div>
    </ApolloProvider>
  );
}

export default App;
