//json
import profile from '../Data/user.json';
import data from '../Data/data.json';
import transactions from '../Data/transactions.json';
import friends from '../Data/friends.json';

// jsx
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import Friends from './Friends/Friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
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
      <Friends friends={friends} />
      <TransactionHistory t={transactions} />
    </div>
  );
};
