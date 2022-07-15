import React from "react";

const userContext=React.createContext("Hi!Anyone ")

const UserProvider=userContext.Provider
const UserConsumer=userContext.Consumer
export  {UserProvider,UserConsumer};