import { Outlet, Navigate } from "react-router-dom";

type Props ={
  admin: boolean;
}
const ProtectedRoutesComponent = ({admin}:Props) => {

  let auth = false;

  if(admin){
    auth=true;
  }


  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutesComponent;

