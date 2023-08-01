import axios from "axios";
import { useState } from "react";
import { variables } from "../Variables";

export interface IdriverDriveAdvertisment {
  Categories: number,
  Description: any
  Common_name : string,
Other_names: string, 
Family:string,
Id:string,
Latin_name: string,


}

 

class Srv {
  


  // GetActiveDrives = async () => {

  //   return await axios.get(variables.API_URL,
  //     {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       responseType: "json",

  //     })
  // }

  
  GetActiveDrives = async () => {
    
   const options = {
      method: 'GET',
      url: 'https://house-plants2.p.rapidapi.com/categories',
      headers: {
        'X-RapidAPI-Key': 'e4739127e3mshce080976b8feed3p13ee8djsn70d6932f746b',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
      }
    };
    
   
      const response = await axios.request(options);
      if(response){
      const categories=response.data
      console.log(response.data);
   
      const songs: any[] = [];
      categories.map((e: any) => {
    songs.push(e['Category'])
  })

  console.log({songs});
  
}
}

GetById = async () => {
  // const [allDetails, setAllDetails] = useState<any[]>([]);

  const options = {
    method: 'GET',
    url: 'https://house-plants2.p.rapidapi.com/id/53417c12-4824-5995-bce0-b81984ebbd1d',
    headers: {
      'X-RapidAPI-Key': 'e4739127e3mshce080976b8feed3p13ee8djsn70d6932f746b',
      'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
    }
  };
  


    const response = await axios.request(options);
    return response;
    // setAllDetails(response.data)
    console.log(response.data);
}

}
const srv = new Srv();
export default srv;