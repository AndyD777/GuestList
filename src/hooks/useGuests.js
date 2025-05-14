import { useState, useEffect } from "react";

const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2306/guests";

export function useGuests() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all guests
  useEffect(() => {
    async function fetchGuests() {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        const json = await response.json();
        setGuests(json.data);
      } catch (err) {
        setError("Failed to load guests.");
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  // Fetch single guest details
  async function selectGuest(id) {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      setSelectedGuest(json.data);
    } catch (err) {
      setError("Failed to load guest details.");
    } finally {
      setLoading(false);
    }
  }

  return {
    guests,
    selectedGuest,
    loading,
    error,
    selectGuest,
    clearSelectedGuest: () => setSelectedGuest(null),
  };
}
