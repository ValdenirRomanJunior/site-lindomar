import api from "../utils/requests";


export const searchProperties = ( name:string,goal:string, typeProperty:string , url:string,pageNumber: number) => {
    return api.get(`/properties/searchTest?name=${name}&goal=${goal}&typeProperty=${typeProperty}&nameUrl=${url}&size=12&page=${pageNumber}&sort=name`)
          .then(response =>{
            return response;
          }).catch(error => {
            return error;
          })
              
}

export const getTAllAddressRequest = () => {
  return api.get('/properties/getAllAddress')
        .then(response =>{
          return response;
        }).catch(error => {
          return error;
        })
            
}

export const getPropertiesHome = (nameUrl:string) => {
  return api.get(`/properties/findAll/${nameUrl}`)
        .then(response =>{
          return response;
        }).catch(error => {
          return error;
        });
            
}

export const findProperty = (id:string) => {
  return api.get(`/properties/find/${id}`) 
                .then(response =>{             
                    return response;                                 
                }).catch((error) =>{  
                  console.log(error)             
                  return error
                  
                 
              });
}