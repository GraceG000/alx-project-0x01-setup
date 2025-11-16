import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // this is the users array
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
        return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users List</h1>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;