import React from 'react'
import ToDo from './ToDo'
import Header from './Header'
import Footer from './Footer'


function App() {
    return(
        <>
            <Header />
            <div className="todolist">
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
            </div>
            <Footer />
        </>
    )
};

export default App