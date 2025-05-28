import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiXCircle } from "react-icons/fi"; // react-icons
import logo from "../../assets/logo.svg";
import bell from "../../assets/bell.svg";
import profile from "../../assets/user-image.svg";
import { AuthContext } from "../../context/Auth";
import { toast } from "react-toastify";

const Header = ({ setSearchTitle }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { setAuth } = authContext;

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTitle(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    setSearchTitle("");
  };

  const handleLogout = () => {
    localStorage.removeItem("key");
    localStorage.removeItem("secret");
    localStorage.removeItem("auth");
    setAuth(false);
    toast.info("Logged out successfully!");
    navigate("/signin");
  };

  return (
    <header className="text-white flex items-center px-6 py-3 justify-between ml-20 ">
      <div className="flex gap-[24px] items-center">
        <img src={logo} alt="logo" className="w-[150px] h-[36px]" />

       <div className="flex items-center rounded-md px-3 py-2 w-80 bg-[#333333] focus-within:bg-white transition-colors duration-200 relative">
  <FiSearch className="w-4 h-4 mr-2 text-gray-400 group-focus-within:text-black" />
  <input
    type="text"
    placeholder="Search for any training you want"
    className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400 focus:text-black focus:placeholder-black"
    value={inputValue}
    onChange={handleChange}
  />
  {inputValue && (
    <FiXCircle
      className="text-black w-5 h-5 absolute right-3 cursor-pointer"
      onClick={handleClear}
    />
  )}
</div>
      </div>

      <div className="flex items-center space-x-4">
        <img src={bell} alt="notifications" className="w-6 h-6" />
        <img
          src={profile}
          alt="profile"
          className="w-8 h-8 rounded-full border-2 border-pink-500"
        />
      </div>
    </header>
  );
};

export default Header;  
