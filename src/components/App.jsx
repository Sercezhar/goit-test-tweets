import { getUsers } from '@/services/users-api';
import { useEffect, useState } from 'react';
import Container from './Container';
import UsersList from './UsersList';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <Container>
        <UsersList users={users} />
      </Container>
    </div>
  );
}

export default App;
