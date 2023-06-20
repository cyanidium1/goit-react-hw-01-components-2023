//json
import profile from '../Data/user.json';
import data from '../Data/data.json';
import transactions from '../Data/transactions.json';
import friends from '../Data/friends.json';

// jsx
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile profile={profile} />
      <Stats stats={data} />
    </div>
  );
};
