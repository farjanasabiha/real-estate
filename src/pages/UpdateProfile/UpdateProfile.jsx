import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  document.title = "HomePress - Update Profile";

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(name, photo, user?.email);
    
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      window.location.reload()
    });
  };
  return (
    <div>
      <form
        onSubmit={handleUpdateProfile}
        className="flex items-center justify-center flex-col py-28"
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-medium text-base">
              What is your name?
            </span>
          </div>
          <input
            type="text"
            required
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text  text-black font-medium text-base">
              Enter your email
            </span>
          </div>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            // placeholder={user?.email}
            readOnly
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text  text-black font-medium text-base">
              Photo url
            </span>
          </div>
          <input
            type=""
            defaultValue={user?.photoURL}
            required
            name="photo"
            placeholder="Photo url"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <input
          className="btn mt-5 w-full max-w-xs px-8 bg-[#4b85f0] text-white transition font-semibold duration-300 text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
          type="submit"
        ></input>
      </form>
    </div>
  );
};

export default UpdateProfile;
