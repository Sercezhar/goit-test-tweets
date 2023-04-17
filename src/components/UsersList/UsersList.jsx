import BackButton from '../BackButton/BackButton';
import Dropdown from '../Dropdown';
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
}) {
  return (
    <div>
      <div className={styles.options}>
        <BackButton />

        <Dropdown
          options={filterOptions}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

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
    </div>
  );
}

export default UsersList;
