import { Link } from "react-router-dom";
import Container from "../container/Container";


function Navbar() {

    const navs =[
        {
            name :"صفحه اصلی",
            link:"/"
        },
        {
            name :"معلمان",
            link:"/Teachers"
        },
        {
            name :"مدیریت",
            link:"/Management"
        },
        {
            name :"امکانات",
            link:"/Facilities"
        },
        {
          name :"دانش آموزان موفق",
          link:"/Best"
        }

    ];
  return (
    <Container>
      <div className="h-20 flex justify-between ">
        <ul className="flex items-center gap-20">
        {
          navs.map((nav)=>(
                      <li className="terxt 2xl font-medium text-amber-700 cursor-pointer transition duration-200 hover:text-amber-400">
                        <Link to={nav.link}>{nav.name}</Link>
          </li>
          ))
        }
        </ul>
        <img src="header.png" alt="" />
      </div>
    </Container>
  );
}
export default Navbar;
