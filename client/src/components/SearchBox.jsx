import logo from '../assets/logo.png';
import Form from './Form';

const SearchBox = () => {
   return (
      <div className="flex flex-col items-center gap-y-4 px-2 ">
         <div>
            <img className="" src={logo} alt="logo" />
         </div>
         <div>
            <h1 className="text-black text-center text-5xl mb-4 font-bold dark:text-slate-200 ">
               Bazar Universal
            </h1>
            <Form />
         </div>
      </div>
   );
};

export default SearchBox;
