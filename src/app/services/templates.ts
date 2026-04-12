export interface Active {
  date_create: string,
  inventory_number: string,
  name: string,
  owner: string,
  serial_number: string,
  status: string,
  type_object: string
}
export interface Active_list{
  activites:[Active]
}
export interface Authorization_answer{
  error?:string,
  user?:string
  user_id?:string
}
export interface User_browse{
  assets:[Active]
}
export interface Type_Objects{
  type_object:[string]
}
