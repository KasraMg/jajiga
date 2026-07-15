import UserRoomsScreen from "@/src/components/screens/user-panel/user-rooms/user-rooms-screen";
import UserLayout from "@/src/components/screens/user-panel/user-layout";

const page = () => {
  return (
    <UserLayout>
      <UserRoomsScreen />
    </UserLayout>
  );
};

export default page;
