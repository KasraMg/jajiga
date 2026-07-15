import ProfileScreen from '@/src/components/screens/user-panel/profile/profile-screen'
import UserLayout from "@/src/components/screens/user-panel/user-layout";

const page = () => {
  return (
     <UserLayout>
      <ProfileScreen />
    </UserLayout> 
  )
}

export default page