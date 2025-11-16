import { UserProps } from "@/interfaces";
import Header from "../layout/Header";

interface UserCardProps {
  posts: UserProps[]; // this is the user array from getStaticProps
}

const UserCard: React.FC<UserCardProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {posts?.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-600">@{user.username}</p>
              <p className="mt-2 text-gray-700">{user.email}</p>

              <div className="mt-3">
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="text-sm">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold">Company</h3>
                <p className="text-sm">{user.company.name}</p>
                <p className="text-xs text-gray-600">
                  {user.company.catchPhrase}
                </p>
              </div>

              <p className="mt-3 text-sm">📞 {user.phone}</p>
              <p className="text-sm">🌐 {user.website}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default UserCard;
