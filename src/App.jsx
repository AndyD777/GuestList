import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";
import { useGuests } from "./hooks/useGuests";

export default function App() {
  const {
    guests,
    selectedGuest,
    loading,
    error,
    selectGuest,
    clearSelectedGuest,
  } = useGuests();

  return (
    <div className="app">
      <h1>Guest List</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !selectedGuest && (
        <GuestList guests={guests} onSelect={(guest) => selectGuest(guest.id)} />
      )}

      {!loading && selectedGuest && (
        <GuestDetails guest={selectedGuest} onBack={clearSelectedGuest} />
      )}
    </div>
  );
}
