import LoadMoreButton from '@/components/LoadMoreButton';
import Loader from '@/components/Loader';
import UsersList from '@/components/UsersList';
import { getUsers, updateFollowers } from '@/services/users-api';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const limit = 9;

function Users() {
  const [followedUsers, setFollowedUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem('followedUsers')) ?? [];
  });
  const [currentLimit, setCurrentLimit] = useState(limit);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  });

  useLayoutEffect(() => {
    if (filterUsers().length === limit) {
      return;
    }

    window.scrollBy({
      top: document.documentElement.clientHeight - 200,
      behavior: 'smooth',
    });
  }, [currentLimit]);

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, followers }) => updateFollowers(id, followers),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  const usersAll = !isLoading && data.slice(0, currentLimit);
  const usersFollow =
    !isLoading &&
    data.filter(
      user => !followedUsers.some(followedId => followedId === user.id)
    );
  const usersFollowings =
    !isLoading &&
    data.filter(user =>
      followedUsers.some(followedId => followedId === user.id)
    );

  function filterUsers() {
    if (filter === 'follow') {
      return usersFollow.slice(0, currentLimit);
    }

    if (filter === 'followings') {
      return usersFollowings.slice(0, currentLimit);
    }

    return usersAll;
  }

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

  const isLoadMoreButton =
    (!isLoading && filter === 'all' && filterUsers().length < data.length) ||
    (!isLoading &&
      filter === 'follow' &&
      filterUsers().length < usersFollow.length) ||
    (!isLoading &&
      filter === 'followings' &&
      filterUsers().length < usersFollowings.length);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <UsersList
          users={filterUsers()}
          toggleFollow={toggleFollow}
          isFollowing={isFollowing}
          mutation={mutation}
          filter={filter}
          setFilter={setFilter}
          setCurrentLimit={setCurrentLimit}
        />
      )}

      {isLoadMoreButton && <LoadMoreButton onLoadMore={onLoadMore} />}
    </div>
  );
}

export default Users;
