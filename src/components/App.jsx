import { getUsers, updateFollowers } from '@/services/users-api';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Container from './Container';
import LoadMoreButton from './LoadMoreButton';
import ScrollToTopButton from './ScrollToTopButton';
import UsersList from './UsersList';

const limit = 6;

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
  const [followedUsers, setFollowedUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem('followedUsers')) ?? [];
  });
  const [currentLimit, setCurrentLimit] = useState(limit);

  const paginatedUsers = !isLoading && data.slice(0, currentLimit);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, followers }) => updateFollowers(id, followers),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  useEffect(() => {
    window.localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  });

  useLayoutEffect(() => {
    window.scrollBy({
      top: document.documentElement.clientHeight - 160,
      behavior: 'smooth',
    });
  }, [currentLimit]);

  function toggleFollow(user, isFollowing) {
    if (!isFollowing) {
      mutation.mutate({
        id: user.id,
        followers: user.followers + 1,
      });
      setFollowedUsers(prevState => [...prevState, user.id]);
    }

    if (isFollowing) {
      mutation.mutate({
        id: user.id,
        followers: user.followers - 1,
      });
      setFollowedUsers(prevState =>
        prevState.filter(followerId => followerId !== user.id)
      );
    }
  }

  function isFollowing(userId) {
    return followedUsers.some(followerId => followerId === userId);
  }

  function onLoadMore() {
    setCurrentLimit(prevState => prevState + limit);
  }

  return (
    <div>
      <Container>
        <UsersList
          users={paginatedUsers}
          toggleFollow={toggleFollow}
          isFollowing={isFollowing}
          mutation={mutation}
        />

        {!isLoading && paginatedUsers.length < data.length && (
          <LoadMoreButton onLoadMore={onLoadMore} />
        )}
      </Container>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
