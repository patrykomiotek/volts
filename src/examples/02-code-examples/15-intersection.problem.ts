interface User {
  id: string;
  firstName: string;
  lastName: string;
  posts: Post[];
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
export const getDefaultUserAndPosts = (): User => {
  return {
    id: '1',
    firstName: 'Joe',
    lastName: 'Doe',
    posts: [
      {
        id: '1',
        title: 'How I eat so much cheese',
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
