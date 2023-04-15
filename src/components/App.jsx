import { getUsers } from '@/services/users-api';
import { useEffect, useLayoutEffect, useState } from 'react';
import Container from './Container';
import LoadMoreButton from './LoadMoreButton';
import UsersList from './UsersList';

const limit = 6;

function App() {
  const [users, setUsers] = useState([]);
  const [currentLimit, setCurrentLimit] = useState(limit);

  const paginatedUsers = users.slice(0, currentLimit);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users);
      })
      .catch(response => {
        console.log(response);
      });
  }, []);

  useLayoutEffect(() => {
    if (paginatedUsers.length === limit) return;

    window.scrollBy({
      top: document.documentElement.clientHeight - 160,
      behavior: 'smooth',
    });
  }, [paginatedUsers]);

  function onLoadMore() {
    setCurrentLimit(prevState => prevState + limit);
  }

  return (
    <div>
      <Container>
        <UsersList users={paginatedUsers} />

        {paginatedUsers.length < users.length && (
          <LoadMoreButton onLoadMore={onLoadMore} />
        )}
      </Container>
    </div>
  );
}

export default App;
