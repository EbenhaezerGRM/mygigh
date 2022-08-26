import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import GanyuImage from "../Assets/ch/Ganyu.jpeg"
import AyakaImage from "../Assets/ch/Ayaka.jpg"
import RaidenImage from "../Assets/ch/Raiden.jpg"
import YaemikoImage from "../Assets/ch/Yaemiko.jpeg"
import MonaImage from "../Assets/ch/Mona.jpg"
import QiqiImage from "../Assets/ch/Qiqi.jpg"
import ZhongliImage from '../Assets/ch/Zhongli.jpg'
import AyatoImage from "../Assets/ch/Ayato.jpg"
import IttoImage from "../Assets/ch/Itto.jpg"

const Chara = () => {
    return (
        <div>
        <Container>
            <br />
            <h1 className='text-white' id="Character">5⭐ CHARACTERS</h1>
            <Row>
                <Col md={4} className='charWrapper'>
                    <Card className="bg-dark text-white charImage">
                        <Image src={GanyuImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Ganyu">GANYU</a></Card.Title>
                                <Card.Text className='text-left'>
                                Ganyu (Chinese: 甘雨 Gānyǔ) is a playable Cryo character in Genshin Impact.
                                She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as 
                                the general secretary of the Liyue Qixing.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Vision: Cryo
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={AyakaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Ayaka">KAMISATO AYAKA</a></Card.Title>
                                <Card.Text className='text-left'>
                                She is the oldest daughter of the Kamisato Clan and younger sister of Kamisato Ayato. 
                                Being beautiful, elegant, and graceful, the common folk have nothing to bad-mouth Ayaka about. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Cryo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={RaidenImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Raiden">RAIDEN SHOUGUN</a></Card.Title>
                                <Card.Text className='text-left'>
                                The Raiden Shogun (Japanese: 雷電将軍 Raiden Shougun) is a playable Electro character in Genshin Impact.
                                As the Shogun, she is the vessel of Beelzebul, the current Electro Archon of Inazuma.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Electro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={YaemikoImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Yae">YAE MIKO</a></Card.Title>
                                <Card.Text className='text-left'>
                                Yae Miko (Japanese: 八重神子 Yae Miko), also known as Guuji Yae (Japanese: 宮司 Guuji) or the Guuji, 
                                is a playable Electro character in Genshin Impact.
                                Miko oversees the Grand Narukami Shrine and is the owner of the Yae Publishing House.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Electro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={MonaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Mona">MONA</a></Card.Title>
                                <Card.Text className='text-left'>
                                Astrologist Mona Megistus is a playable Hydro character in Genshin Impact.
                                An astrologist of knowledgeable skill and high pride, Mona has settled in Mondstadt to avoid suffering the ire 
                                of her master after unwittingly reading the latter's diary.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Hydro 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={QiqiImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Qiqi">QIQI</a></Card.Title>
                                <Card.Text className='text-left'>
                                Qiqi (Chinese: 七七 Qīqī) is a playable Cryo character in Genshin Impact.
                                Resurrected as a zombie by the adepti, she has ended up in Baizhu's care 
                                and now works at Bubu Pharmacy in Liyue Harbor. she seldom has much in the way of words or emotion.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Cryo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={ZhongliImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Zhongli">Zhongli</a></Card.Title>
                                <Card.Text className='text-left'>
                                Zhongli (Chinese: 钟离 Zhōnglí) He is a consultant of the Wangsheng Funeral Parlor. 
                                He is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience 
                                the world from the perspective of a mortal.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Cryo 
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={AyatoImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Ayato">KAMISATO AYATO</a></Card.Title>
                                <Card.Text className='text-left'>
                                Kamisato Ayato (Japanese: 神里綾人 Kamisato Ayato) is a playable Hydro character in Genshin Impact.
                                He is the current head of the Kamisato Clan, the older brother of Kamisato Ayaka, and the Yashiro Commissioner.


                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Hydro
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={4} className='charWrapper' >
                    <Card className="bg-dark text-white charImage">
                        <Image src={IttoImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'><a className="aturHref" href="#Itto">ARATAKI ITTO</a></Card.Title>
                                <Card.Text className='text-left'>
                                Arataki Itto (Japanese: 荒瀧一斗 Arataki Itto) is a playable Geo character in Genshin Impact.
                                A descendant of the crimson oni, Itto is also the leader and founder of the Arataki Gang.
                                He is an intrepid man with Oni blood running through his veins.
                                </Card.Text>
                                <Card.Text className="text-left">
                                Vision: Geo 
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

export default Chara
