import styles from './UsersList.module.css';
import UsersListCard from './UsersListCard';

function UsersList({ users, toggleFollow, isFollowing, mutation }) {
  return (
    <ul className={styles.list}>
      {users &&
        users.map(user => (
          <UsersListCard
            key={user.id}
            user={user}
            toggleFollow={toggleFollow}
            isFollowing={isFollowing}
            mutation={mutation}
          />
        ))}
    </ul>
  );
}

export default UsersList;
