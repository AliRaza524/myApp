import React from 'react'

function Title() {
    console.log("Title Rendering!!");
  return (
    <div>
        <h2>
            useCallbackHook
        </h2>
    </div>
  )
}

export default React.memo(Title)