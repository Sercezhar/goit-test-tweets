import LoadMoreButton from '@/components/LoadMoreButton';
import UsersList from '@/components/UsersList';
import { getUsers, updateFollowers } from '@/services/users-api';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const limit = 6;

function Users() {
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
    if (paginatedUsers.length === limit) {
      return;
    }

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
      <UsersList
        users={paginatedUsers}
        toggleFollow={toggleFollow}
        isFollowing={isFollowing}
        mutation={mutation}
      />

      {!isLoading && paginatedUsers.length < data.length && (
        <LoadMoreButton onLoadMore={onLoadMore} />
      )}
    </div>
  );
}

export default Users;
