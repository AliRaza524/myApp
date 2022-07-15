import React from "react"
import FormikContainer from "./Fromik/Components/FormikContainer"

// import Counter1 from "./Preperation/Hooks/UseReduce/Counter1"
// import { MouseCleanupCode } from "./Preperation/Hooks/UseReduce/MouseCleanupCode"
// import { MousePosition } from "./Preperation/Hooks/UseReduce/MousePosition"
// import ComponentC from "./Preperation/Context/ComponentC"
// import { MyProvider } from "./Preperation/Context/UserContext"
// import YoutubeForm from "./Fromik/YoutubeForm/YoutubeForm"
// import Counter from "./Preperation/RenderProps/Counter"
// import HoverCounter from "./Preperation/RenderProps/HoverCounter"
// import User from "./Preperation/RenderProps/User"
// import ClassBoundary from "./File1/ClassBoundary"
// import Error from "./Preperation/Rough/ErrorBoundry"
// import Error from "./File1/Error"
// import Hoc1 from "./Preperation/HOC/Hoc1"
// import Hoc2 from "./Preperation/HOC/Hoc2"
const App = () => {
    
    return (         
        <div>
            {/* <ClassBoundary>
            <Error name='Cat'/>
            <Error name='Catwww'/>
            <Error name='Catww'/>
            </ClassBoundary> */}
            {/* <Hoc1 hero='hero'/>
            <Hoc2/> */}
             {/* <User render={(count,increment)=> (
             <Counter count={count} increment={increment}/>)} />

             <User render={(count,increment)=> (
             <HoverCounter count={count} increment={increment}/>)} /> */}
             {/* <MyProvider value="@+@"> */}
                {/* <ComponentC/> */}
            {/* </MyProvider> */}
             {/* <Counter1/> */}
             {/* <MousePosition/> */}
             {/* <MouseCleanupCode/> */}
             {/* <YoutubeForm/> */}
             <FormikContainer/>

           
            
        </div> 
    )
}
export default App;