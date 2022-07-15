import React from 'react'


const MyContext=React.createContext('Default Value')
const MyProvider=MyContext.Provider
const MyConsumer=MyContext.Consumer

export  {MyProvider,MyConsumer}