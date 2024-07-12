import Card from './Card'

function Tours({ tours, removeTour}) {
  //sare cards ismei honge 
  return (
    <div className='container'>
      <div>
        <h2 className='title'> Plan with Pookie</h2>
      </div>
      
      <div className='cards'>
        
        {
          tours.map( (tour) => {
            return <Card key={tour.id }   {...tour} removeTour={removeTour}> </Card>
          } )
        }
      </div>

    </div>

  );
}

export default Tours;