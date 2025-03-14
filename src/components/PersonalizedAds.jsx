import { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';  // Material UI components
import { styled } from '@mui/system'; // For custom styling

export default function PersonalizedAds() {
  const [userCategory, setUserCategory] = useState('electronic'); // Default category set to 'electronics'
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user category on initial load
  useEffect(() => {
    async function fetchUserCategory() {
      setLoading(true);
      setError(null);
      try {
        // Using a hardcoded category for testing
        setUserCategory('electronics');
      } catch (error) {
        console.error("Error fetching user category", error);
        setError("Failed to fetch user category");
      } finally {
        setLoading(false);
      }
    }

    fetchUserCategory();
  }, []);

  // Fetch ads when category changes
  useEffect(() => {
    if (userCategory) {
      fetchAds(userCategory); // Fetch ads based on user category
    }
  }, [userCategory]);

  // Fetch ads from a real API (Fake Store API)
  async function fetchAds(category) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      console.log('data here:', data)
      setAds(data); // Set the fetched data as ads
    } catch (error) {
      console.error("Error fetching ads", error);
      setError("Failed to fetch ads");
    }
  }

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {ads.length > 0 ? (
        ads.map((ad, index) => (
          <StyledCard key={index}>
            <img src={ad.image} alt={ad.title} className="w-full h-64 object-cover rounded-t-lg" />
            <CardContent className="p-6">
              <Typography variant="h6" component="h3" className="font-semibold text-lg mb-2">{ad.title}</Typography>
              <Typography variant="body2" color="textSecondary" className="text-sm mb-4">{ad.description}</Typography>
              <Typography variant="h6" className="text-gray-800 font-semibold">{`$${ad.price}`}</Typography>
              <StyledButton variant="contained" className="mt-4">View Ad</StyledButton>
            </CardContent>
          </StyledCard>
        ))
      ) : (
        <p className="text-center text-gray-500">No ads available</p>
      )}
    </div>
  );
}

// Custom styled components using Material UI's `styled`
const StyledCard = styled(Card)({
  borderRadius: '16px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden', // To ensure image stays within card
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  fontWeight: 'bold',
});
