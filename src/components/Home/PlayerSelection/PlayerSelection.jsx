import { useState } from "react";
import { Trash2, User, Flag } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

// Sample player data
const playersData = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 250000,
    image: "https://i.ibb.co.com/f9m5qnq/1727002221-virat.jpg",
  },
  {
    id: 2,
    name: "Steve Smith",
    country: "Australia",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 320000,
    image: "https://i.ibb.co.com/gRjNR17/Steve-Smith-6.webp",
  },
  {
    id: 3,
    name: "Kane Williamson",
    country: "New Zealand",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 940000,
    image: "https://i.ibb.co.com/w7wqZ6f/Getty-Images-2014197776-1.jpg",
  },
  {
    id: 4,
    name: "Joe Root",
    country: "England",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 110000,
    image: "https://i.ibb.co.com/1nJgLvS/joerootdec30thumbnail.jpg",
  },
  {
    id: 5,
    name: "Babar Azam",
    country: "Pakistan",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 260000,
    image: "https://i.ibb.co.com/5ksFm9p/AFP-20240530-34-UE7-A9-v1-High-Res-776146379-1717617996.webp",
  },
  {
    id: 6,
    name: "David Warner",
    country: "Australia",
    type: "All-Rounder",
    batting: "Left-Hand-Bat",
    price: 340000,
    image: "https://i.ibb.co.com/njKftB5/1855898-davidwarner.webp",
  },
  {
    id: 7,
    name: "Ben Stokes",
    country: "England",
    type: "All-Rounder",
    batting: "Left-Hand-Bat",
    price: 560000,
    image: "https://i.ibb.co.com/Fs5yBcV/Ben-Stokes-4.webp",
  },
  {
    id: 8,
    name: "AB de Villiers",
    country: "South Africa",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 730000,
    image: "https://i.ibb.co.com/fvVn91L/ab-de-villiers-came-up-with-a-fabulous-century-to-power-south-africa-past-300.webp",
  },
  {
    id: 9,
    name: "Chris Gayle",
    country: "West Indies",
    type: "All-Rounder",
    batting: "Left-Hand-Bat",
    price: 810000,
    image: "https://i.ibb.co.com/NnVjjBv/86670398.webp",
  },
  {
    id: 10,
    name: "MS Dhoni",
    country: "India",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 490000,
    image: "https://i.ibb.co.com/ZdQcJ5M/post-image-7e77684.png",
  },
  {
    id: 11,
    name: "Rohit Sharma",
    country: "India",
    type: "All-Rounder",
    batting: "Right-Hand-Bat",
    price: 770000,
    image: "https://i.ibb.co.com/ydy6J40/1707738592497-savsavava.jpg",
  },
  {
    id: 12,
    name: "Mitchell Starc",
    country: "Australia",
    type: "All-Rounder",
    batting: "Left-Hand-Bat",
    price: 570000,
    image: "https://i.ibb.co.com/PFbTWmr/350673-6.webp",
  },
];

const PlayerSelection = () => {
  const [view, setView] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.length < 6) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handlePlayerRemove = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter((player) => player.id !== playerId));
  };

  const availablePlayers = playersData.filter((player) => !selectedPlayers.find((sp) => sp.id === player.id));

  const PlayerCard = ({ player }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 overflow-hidden">
      <div className="relative">
        <img src={player.image} alt={player.name} className="w-full h-56 p-3 rounded-3xl object-cover" />
      </div>
      <div className="p-4 pt-0">
        <div className="flex items-center gap-2 mb-3">
          <User className="w-5 h-5 text-gray-600" />
          <span className="font-semibold">{player.name}</span>
        </div>
        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <Flag className="w-4 h-4" />
          <span>{player.country}</span>
          <span className="ml-auto bg-gray-200 px-3 py-1 rounded-full text-sm">{player.type}</span>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">Batting</span>
            <span className="text-gray-500">{player.batting}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Price: ${player.price.toLocaleString()}</span>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed" disabled={selectedPlayers.length >= 6}>
                  Choose Player
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Congratulations!</AlertDialogTitle>
                  <AlertDialogDescription>
                    Congratulations!!! <span className="font-semibold text-gray-900">{player.name}</span> has been added as your selected player.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => handlePlayerSelect(player)} className="bg-blue-500 text-white hover:bg-blue-600">
                    Ok
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">{view === "selected" ? `Selected Player (${selectedPlayers.length}/6)` : "Available Players"}</h1>
        <div className="flex gap-2">
          <button className={`px-4 py-2 rounded ${view === "available" ? "bg-yellow-300" : "bg-gray-200"}`} onClick={() => setView("available")}>
            Available
          </button>
          <button className={`px-4 py-2 rounded ${view === "selected" ? "bg-yellow-300" : "bg-gray-200"}`} onClick={() => setView("selected")}>
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {view === "available" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availablePlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {selectedPlayers.map((player) => (
            <div key={player.id} className="border rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={player.image} alt={player.name} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h3 className="font-semibold">{player.name}</h3>
                  <p className="text-sm text-gray-600">{player.batting}</p>
                </div>
              </div>
              <button onClick={() => handlePlayerRemove(player.id)} className="text-red-500 hover:text-red-600">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          {selectedPlayers.length < 6 && (
            <button onClick={() => setView("available")} className="mt-4 px-6 py-3 bg-yellow-300 rounded-lg font-semibold">
              Add More Player
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerSelection;
