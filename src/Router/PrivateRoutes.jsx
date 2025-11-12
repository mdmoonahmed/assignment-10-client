import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import { Car } from 'lucide-react';

const PrivateRoutes = ({ children }) => {
    const { user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className="py-80 text-center">
       <Car className="inline-block fill-yellow-600 animate-spin" size={40} />
      </div>
    }

    if(!user) {
        return <Navigate state={location?.pathname} to="/login"  ></Navigate>
    }

    return children;
    
};

export default PrivateRoutes;