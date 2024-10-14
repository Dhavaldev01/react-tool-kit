import { useEffect, useState } from "react";

function ApiCallTest() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchUsers();
  }, []);

  console.log(users, isLoading);

  // Inline styles
  const loadingStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '24px',
    color: '#4CAF50', // Green color
  };

  const userListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Responsive columns
    gap: '10px', // Space between items
    padding: '20px',
    margin: '0 auto',
    width: '80%',
    maxWidth: '800px',
  };

  const userItemStyle = {
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // Center text within each item
  };

  return (
    <div>
      {isLoading ? (
        <div style={loadingStyle}>
          <h1>Loading Data...</h1>
        </div>
      ) : (
        <div style={userListStyle}>
          {users.map((user) => (
            <div key={user?.id} style={userItemStyle}>
              <h3>{user.firstName}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApiCallTest;
