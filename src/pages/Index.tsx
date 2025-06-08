
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('abnUser') || sessionStorage.getItem('abnUser');
    if (user) {
      const userData = JSON.parse(user);
      // Redirect based on role
      switch (userData.role) {
        case 'Admin':
          navigate('/admin');
          break;
        case 'Mantech':
          navigate('/tools');
          break;
        case 'Opscrew':
          navigate('/tools-limited');
          break;
        case 'Guest':
          navigate('/info');
          break;
        default:
          navigate('/auth');
      }
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-green-500 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
};

export default Index;
