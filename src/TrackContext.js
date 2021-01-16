import React, { useState } from 'react'

const TrackContext = React.createContext();

function TrackContextProvider({children}) {

    const [names, setNames] = useState([])
    const [winOne, setWinOne] = useState(0)
    const [winTwo, setWinTwo] = useState(0)

    return (
        <TrackContext.Provider
            value={{names, winOne, winTwo, setNames, setWinOne, setWinTwo}}
        >
            {children}
        </TrackContext.Provider>
    )
}

export {TrackContextProvider, TrackContext}
