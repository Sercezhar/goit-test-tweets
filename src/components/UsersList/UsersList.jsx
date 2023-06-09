import BackButton from '../BackButton/BackButton';
import Dropdown from '../Dropdown';
import Notification from '../Notification';
import styles from './UsersList.module.css';
import UsersListCard from './UsersListCard';

const filterOptions = ['all', 'follow', 'followings'];

function UsersList({
  users,
  toggleFollow,
  isFollowing,
  mutation,
  filter,
  setFilter,
  setCurrentLimit,
}) {
  return (
    <div>
      <div className={styles.options}>
        <BackButton />

        <Dropdown
          options={filterOptions}
          label="Filtered by:"
          filter={filter}
          setFilter={setFilter}
          setCurrentLimit={setCurrentLimit}
        />
      </div>

      {users.length > 0 ? (
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
      ) : (
        <Notification message="Empty" />
      )}
    </div>
  );
}

export default UsersList;
