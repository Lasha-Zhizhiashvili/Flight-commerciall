import { useState, useEffect } from "react";


function FlyCards({img, price, time}){
  const [buttonColor, setButtonColor] = useState(false);

  const handleButtonClick = () => {
    setButtonColor(prevColor => !prevColor);
   
  };

  const [minutes, setMinutes] = useState(time);
  const [hours, setHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);

  useEffect(() => {
    const calculatedHours = Math.floor(minutes / 60);
    const calculatedMinutes = minutes % 60;
    setHours(calculatedHours);
    setRemainingMinutes(calculatedMinutes);
    localStorage.removeItem("favoriteCards")
  }, [minutes]);

    return(
        <>
          <div className="FlyCard" style={{background: '#FFFFFF', boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)', borderRadius: '12px', padding: '24px'}}>

            <div className="FlyCardColl">
                <div className="FlyCardRead">
                    <img src={img}></img>
                </div>
            </div>

            <div className="FlyCardColll">
                <div className="FlyCardRead">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h6 style={{padding: '8.5px 11px', border: '1px solid #8DD3BB', borderRadius: '4px', marginRight: '8px', width: '40px', height: '32px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>4.2</h6>
                        <b style={{marginRight: '3px'}}>Very Good</b>
                        <span>54 reviews</span>
                        <div style={{marginLeft: 'auto'}}>
                            <p style={{opacity: '0.75', marginBottom: '0px'}}>starting from</p>
                            <h3 style={{marginLeft: 'auto', color: '#FF8682', width: 'fit-content'}}>{`${price}$`}</h3>
                        </div>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '5px', width: '100%'}}>
                        <input style={{marginRight: '15px'}} type="checkbox"></input>
                        <div>
                            <b><h5>12:00 pm - 01:28 pm</h5></b>
                            <p style={{opacity: '0.4', marginBottom: '0px'}}>Emirates</p>
                        </div>
                        <p className="opp" style={{opacity: '0.78', margin: '0 40px 25px 40px'}}>non stop</p>
                        <div>
                            <h5 style={{opacity: '0.78', color: '#112211' }}>{`${hours}h ${remainingMinutes}m`}</h5>
                            <h6 style={{opacity: 0.4}}>EWR-BNA</h6>
                        </div>
                    </div>

                    <div style={{paddingBottom: '16px',display: 'flex', borderBottom: '1px solid #112211', marginBottom: '16px', alignItems: 'center', width: '100%'}}>
                        <input style={{marginRight: '15px'}} type="checkbox"></input>
                        <div>
                            <b><h5>12:00 pm - 01:28 pm</h5></b>
                            <p style={{opacity: '0.4', marginBottom: '0px'}}>Emirates</p>
                        </div>
                        <p className="opp" style={{opacity: '0.78', margin: '0 40px 25px 40px'}}>non stop</p>
                        <div>
                            <h5 style={{opacity: '0.78', color: '#112211' }}>{`${hours}h ${remainingMinutes}m`}</h5>
                            <h6 style={{opacity: 0.4}}>EWR-BNA</h6>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                        <button onClick={handleButtonClick} style={{transition: 'all 0.1s linear', padding: '17px 16.5px', border: '1px solid #8DD3BB', borderRadius: '4px', marginRight: '16px', backgroundColor: buttonColor ? '#30dfab' : 'transparent'}}>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7863 1.625C10.2504 1.625 9.0004 4.125 9.0004 4.125C9.0004 4.125 7.7504 1.625 5.21446 1.625C3.15352 1.625 1.52149 3.34922 1.5004 5.40664C1.45743 9.67734 4.88829 12.7145 8.64884 15.2668C8.75251 15.3373 8.87501 15.3751 9.0004 15.3751C9.12579 15.3751 9.24829 15.3373 9.35196 15.2668C13.1121 12.7145 16.543 9.67734 16.5004 5.40664C16.4793 3.34922 14.8473 1.625 12.7863 1.625V1.625Z" stroke="#4C4850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button style={{width: '100%', textAlign: 'center', backgroundColor: '#8DD3BB', padding: '15.5px 0', borderRadius: '4px', fontWeight: '600', fontSize: '17px'}}>
                            View Deals
                        </button>
                    </div>
                    
                </div>
            </div>

          </div>
        </>
    )
}

export default FlyCards