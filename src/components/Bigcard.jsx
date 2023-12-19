import Bigfoto from '../svgs/Bigfoto.svg'
import arr from '../svgs/arr.svg'
import Bigfoto1 from '../svgs/bigfoto1.svg'
import '../components/bigcard.css'
import { Link } from 'react-router-dom'

function Bigcard(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="bigcard-box" style={{display: 'flex', flexWrap: 'wrap', margin: '55px 0 0 0bigcard-',}}>

                    <div className="bigcard-coll" style={{width: '50%', padding: '12px'}}>
                        <div className="bigcard-read" style={{backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '559px', borderRadius:'20px', backgroundImage: `url(${Bigfoto})`, textAlign: 'center'}}>
                            <h1 style={{fontSize: '55px', color: 'white', paddingTop: '340px'}}>Flights</h1>
                            <p style={{color: 'white'}}>Search Flights & Places Hire to our most popular<br></br> destinations</p>
                            <Link to="/Flight-commercial/Moreflights"><button style={{borderRadius: '4px', padding: '15px 36px', backgroundColor: '#8DD3BB', border: 'none'}}><img src={arr} style={{marginRight: '5px'}}></img>Show Flights</button></Link>
                        </div>
                    </div>

                    <div className="bigcard-coll" style={{width: '50%', padding: '12px'}}>
                        <div className="bigcard-read" style={{backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '559px', borderRadius:'20px', backgroundImage: `url(${Bigfoto1})`, textAlign: 'center'}}>
                            <h1 style={{fontSize: '55px', color: 'white', paddingTop: '340px'}}>Hotels</h1>
                            <p style={{color: 'white'}}>Search Flights & Places Hire to our most popular<br></br> destinations</p>
                            <Link to="/Flight-commercial/MoreHotels"><button style={{borderRadius: '4px', padding: '15px 36px', backgroundColor: '#8DD3BB', border: 'none'}}><img src={arr} style={{marginRight: '5px'}}></img>Show Hotels</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Bigcard