export interface User{
    "id": number,
    "name":string,
    "username":string,
    "email":string,
    "address":Address,
    "phone":string,
    "website":string,
    "company":Company

}

export interface Address{
    "street":string,
    "suite":string,
    "city":string,
    "zipcode":string,
    "geo":Geo
}
export interface Geo{
    "lat":string|null,
    "lng":string|null
}
export interface Company{
    "name":string,
    "catchPhrase":string,
    "bs":string
}

export interface UpdateData{
  "name":string,

    "email":string,
    "phone":string,
    "website":string,
    "address":Address,
    
}