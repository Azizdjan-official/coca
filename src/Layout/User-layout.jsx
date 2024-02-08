import { Link, Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className='border'>
          <div className="container flex gap-4 uppercase  text-[#3F51B5] w-[90%] mx-auto py-3">
          <Link to="/">Аудиокитоб</Link>
          <Link to="/about">Электрон китоблар</Link>
          <Link to="/blog">Босма китоблар</Link>
          <Link to="/contact">Контакт</Link>
          <Link to="/detailBlog">Биз хақимизда</Link>
        </div>
        </div>
      );
}

export default UserLayout
