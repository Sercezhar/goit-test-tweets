import styles from './UsersList.module.css';
import UsersListCard from './UsersListCard';

function UsersList({ users }) {
  return (
    <ul className={styles.list}>
      {users.map(user => (
        <UsersListCard key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
