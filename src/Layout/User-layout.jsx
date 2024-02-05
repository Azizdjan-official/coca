import { Link, Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className="container">
          <div >
            <div >
              <div>
                <Link to="/user">Profile</Link>
              </div>
              <div>
                <Link to="/user/address">Address</Link>
              </div>
              <div>
                <Link to="/user/change-profile">Change-profile</Link>
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      );
}

export default UserLayout
