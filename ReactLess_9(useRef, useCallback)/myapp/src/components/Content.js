import { forwardRef } from "react"

const Content = forwardRef((props, ref) => {
    return(
        <div>
            <h2 ref={ref}>Some text</h2>
        </div>
    )
})

export default Content