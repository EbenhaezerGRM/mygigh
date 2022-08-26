import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import JadecutterImage from '../Assets/wp/Jadecutter.jpg'
import LostprayerImage from '../Assets/wp/Lostprayer.jpg'
import MitsspliterImage from '../Assets/wp/Mitsspliter.jpg'
import SkywardImage from '../Assets/wp/Skyward.jpg'


const Weapon = () => {
    return (
        <div>
        <Container>
            <br />
            <h1 className='text-white' id="Senjata">5⭐ WEAPONS</h1>
            <Row>
                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={JadecutterImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Primordial Jade Cutter</Card.Title>
                                <Card.Text className='text-left'>
                                Primordial Jade Cutter (Chinese: 磐岩结绿 Pányán Jiélǜ, "Gathering Greenery on Monolith") 
                                is a Liyue sword. It was originally forged by Rex Lapis.
                                A ceremonial sword masterfully carved from pure jade. 
                                There almost seems to be an audible sigh in the wind as it is swung.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Type: Sword 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={LostprayerImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Lost Prayer to the Sacred Winds</Card.Title>
                                <Card.Text className='text-left'>
                                An educational tome written by anonymous early inhabitants who worshiped the wind. 
                                It has been blessed by the wind for its faithfulness and influence over the millennia.
                                Countless hands have touched this book, though any prints they left have since been carried away by the wind.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Type: Catalyst 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={MitsspliterImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Mistsplitter Reforged</Card.Title>
                                <Card.Text className='text-left'>
                                Mistsplitter Reforged (Japanese: 霧切の廻光 Kirigiri no Kaikou) is an Inazuman sword.
                                A sword that blazes with a fierce violet light. The name "Reforged" 
                                comes from it having been broken once before.
                                This Is One of the swords that the Shogun bestowed upon her Hatamoto.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Type: Sword 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={SkywardImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Skyward Harp</Card.Title>
                                <Card.Text className='text-left'>
                                A greatbow that symbolizes Dvalin's affiliation with the Anemo Archon. 
                                The sound of the bow firing is music to the Anemo Archon's ears. 
                                It contains the power of the sky and wind within.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Type: Bow 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

            </Row>
        </Container>
    </div>  
    )
}

export default Weapon
