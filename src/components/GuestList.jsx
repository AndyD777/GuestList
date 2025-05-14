export default function GuestList({ guests, onSelect }) {
    return (
      <div>
        {guests.map((guest) => (
          <div
            key={guest.id}
            onClick={() => onSelect(guest)}
            className="guest-card"
          >
            <h3>{guest.name}</h3>
            <p>{guest.email}</p>
          </div>
        ))}
      </div>
    );
  }