import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";



interface Iteacher{
    id:string;
    title:string;
    descripsion:string
}

function Teacher() {

    const [teacher, setTeacher] = useState<Iteacher[]>([])

    useEffect(()=>{
        axios.get('http://localhost:8000/Teacher')
        .then((result)=>{
            setTeacher(result.data);
        })
    }, []);


  return (
    <div>
        <Navbar />
    
    <div className="grid grid-cols-2 gap-20 mx-50 mt-30 mb-50">
            {
                teacher.map((item)=>
                    <div className="flex flex-col shadow-md shadow-amber-400 rounded-xl py-5  w-80">
                        <h3 className=" text-violet-700 text-2xl font-bold px-5 py-10">{item.title}</h3>
                        <p className="text-cyan-500 font-semibold px-5">{item.descripsion}</p>
                    </div>
                
                )
            }
    </div>

    <Footer />

    </div>
  )
}

export default Teacher

// npx json-server --watch public/data/db.json --port 8000