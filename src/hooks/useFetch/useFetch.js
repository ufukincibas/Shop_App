import { useEffect , useState} from "react";
import axios from "axios";


function useFetch(url){ //tum sayfalarda ise yaraması icin url gibi dinamik bir degisken verdik hangi url i atacaksam orada calisacak

    const [error,setError] = useState(null)
    const [loading , setLoading] = useState(true)
    const [data , setData] =useState([])

    const fetchData = async() => {
        try {
         const {data : responseData} = await axios.get(url) //datayı responseData adıyla parcala
         setLoading(false)
         setData(responseData);      //set dataya gonder
         
        } catch (err) {
         setError(err.message)
         setLoading(false) //spin islemini durdur
        
         
        } 
     }

    useEffect(() => {   //calistigi anda calissin
        fetchData()
 } , [])

    return{error, loading , data} //bunları return et
}

export default useFetch;