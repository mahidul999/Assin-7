const Subscribe = () => {
  return (
    <div className="w-5/6 mx-auto px-10 relative -bottom-32">
      <div className="flex flex-col py-20 border-2 border-gray-400 items-center rounded-3xl bg-white bg-[url('https://i.ibb.co.com/m8TPRSK/bg-shadow.png')] bg-cover bg-no-repeat">
        <h3 className="text-3xl font-bold">Subscribe to the Newsletter</h3>
        <p className="text-lg pt-4 pb-20">Get the latest updates and news</p>
        <div className="flex gap-3">
          <input className="py-2 px-4 rounded-lg border border-gray-300" type="text" placeholder="Enter your email" />
          <input className="py-2 px-4 rounded-lg bg-gradient-to-br from-pink-300 via-orange-300 to-amber-300" type="button" value="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
