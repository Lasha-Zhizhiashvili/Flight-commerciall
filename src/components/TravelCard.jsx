

function TravelCard({bigtext, text, price, url}) {
  return (
    <>
      <div
        className="card"
        style={{
          borderRadius: "12px",
          padding: "24px",
          height: "420px",
          backgroundImage: `url(${url})`,
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: 'none'
        }}
      >
        <div style={{marginTop: 'auto', display: 'flex', width: '100%', marginBottom: '16px'}}>
            <div style={{textAlign: 'start'}}>
                <h2 style={{color: 'white', marginBottom: '0'}}>{bigtext}</h2>
                <p style={{color: 'white'}}>{text}</p>
            </div>
            <h3 style={{color: 'white', marginLeft: 'auto', marginTop: '25px'}}>${price}</h3>
        </div>
        <button style={{width: '100%', background: '#8DD3BB', borderRadius: '4px', height: '48px' }}>
            Book Flight
        </button>
      </div>
    </>
  );
}

export default TravelCard