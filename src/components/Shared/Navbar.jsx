import { Coins } from "lucide-react";

const Navbar = ({ coins }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-100 shadow-sm text-gray-700">
      <div className="flex-shrink-0">
        <img src="https://i.ibb.co.com/Qnb18xG/logo.png" alt="Cricket Player Logo" className="h-10 w-10" />
      </div>

      <div className="flex items-center space-x-8">
        <a href="/">Home</a>
        <a href="/fixture">Fixture</a>
        <a href="/teams">Teams</a>
        <a href="/schedules">Schedules</a>
        <div className="flex items-center space-x-2">
          <p className="py-2 px-4 border-2 border-gray-400 rounded-lg">
            <span>{coins}</span>
            &nbsp; Coin <Coins className="inline h-5 w-5 text-yellow-400" />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
