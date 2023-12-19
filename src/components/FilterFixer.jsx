import { useState } from "react"
import { useRef } from "react"
import '../components/filterfixer.css'

function FilterFixer({text, everything}){
  const [active, setactive] = useState(true)
  const ref = useRef(null)

    return(
        <>
          <div data-enabled = {active} className="fill-box">
            <div style={{display: 'flex'}}>
                <h5>{text}</h5>
                   <svg data-enabled = {active} onClick={() => {setactive(!active)}} style={{margin: 'auto 0 auto auto'}} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M14.75 8L8 1.25L1.25 8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
            </div>
            {everything}
          </div>
        </>
    )
}

export default FilterFixer