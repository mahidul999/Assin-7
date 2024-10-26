import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar";

const Header = () => {
  const [coins, setCoins] = useState(0);
  const [claimCount, setClaimCount] = useState(0);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedCoins = localStorage.getItem("coins");
    const savedClaimCount = localStorage.getItem("claimCount");

    if (savedCoins) setCoins(parseInt(savedCoins));
    if (savedClaimCount) setClaimCount(parseInt(savedClaimCount));
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("coins", coins);
    localStorage.setItem("claimCount", claimCount);
  }, [coins, claimCount]);

  const handleClaimCredit = () => {
    if (claimCount < 3) {
      setCoins((prevCoins) => prevCoins + 20000);
      setClaimCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <Navbar coins={coins} />
      <div className="w-11/12 mx-auto px-4">
        <div className="flex flex-col py-20 items-center rounded-3xl bg-black bg-[url('https://i.ibb.co.com/m8TPRSK/bg-shadow.png')] bg-cover bg-no-repeat">
          <img src="https://i.ibb.co.com/LCMyzr8/banner-main.png" alt="Banner" />
          <h1 className="text-white font-bold text-4xl pt-5">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="text-gray-400 text-xl py-5">Beyond Boundaries, Beyond Limits</p>
          <div className="border-2 border-lime-400 rounded-xl size-fit">
            <button className={`py-2 px-5 font-semibold rounded-2xl border-8 border-black ${claimCount >= 3 ? "bg-gray-400 cursor-not-allowed" : "bg-lime-400 hover:bg-lime-500"}`} onClick={handleClaimCredit} disabled={claimCount >= 3}>
              {claimCount >= 3 ? "No Claims Left" : `Claim Free Credit (${3 - claimCount} left)`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
