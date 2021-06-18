interface PlacesProps {
	title: string;
	placeName: string;
	countryName: string;
	mainImage: string;
	googleMaps: string;
	textExplanation: string;
    }
    function Place(props: PlacesProps) : JSX.Element {
	return(
	    <section>
		<h2>{props.title} </h2>
		<p>{props.placeName} </p>
		<p><i>{props.countryName}</i></p>
		<img src={props.mainImage} alt={props.title} />
		<a href= {props.googleMaps} > google map </a>
		<p>{props.textExplanation}</p>
	    </section>
	)    
	
			
		
 
    }
    export default Place