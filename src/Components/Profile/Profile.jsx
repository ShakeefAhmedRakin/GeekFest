import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="pt-16 bg-gradient-to-bl from-teal-400 via-violet-500 to-violet-800">
        <div className="container mx-auto px-2">
          <div className="flex justify-center py-24">
            <div className="bg-gradient-to-bl from-white to-gray-300 p-6 rounded-xl h-[500px] w-[400px]">
              <div className="flex-1 flex flex-col h-full">
                <div className="flex justify-start gap-4 items-center">
                  <div>
                    <img
                      src={user?.photoURL}
                      className="w-[96px] object-contain h-[96px] flex-1 rounded-xl"
                    />
                  </div>
                  <h1 className="text-violet-600 font-bold text-4xl">
                    {user?.displayName}
                  </h1>
                </div>
                <hr className="my-4"></hr>
                <div className="h-full">
                  <p className="text-gray-700 flex gap-2">
                    <span className="font-bold">Email</span>
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
