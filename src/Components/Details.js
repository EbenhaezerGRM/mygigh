import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import WtsatuImage from '../Assets/Ganyu/Wtsatu.jpg'
import WtduaImage from '../Assets/Ganyu/Wtdua.jpg'
import WttigaImage from '../Assets/Ganyu/Wttiga.jpg'
import WtempatImage from '../Assets/Ganyu/Wtempat.jpg'
import WtlimaImage from '../Assets/Ganyu/Wtlima.jpg'
import SkyImage from '../Assets/Ganyu/Sky.jpg'

import GSatuImage from '../Assets/Ayaka/GSatu.jpg'
import GDuaImage from '../Assets/Ayaka/GDua.jpg'
import GTigaImage from '../Assets/Ayaka/GTiga.jpg'
import GEmpatImage from '../Assets/Ayaka/GEmpat.jpg'
import GLimaImage from '../Assets/Ayaka/GLima.jpg'
import MitsImage from '../Assets/Ayaka/Mits.jpg'

import EiSatuImage from '../Assets/Raiden/EiSatu.jpg'
import EiDuaImage from '../Assets/Raiden/EiDua.jpg'
import EiTigaImage from '../Assets/Raiden/EiTiga.jpg'
import EiEmpatImage from '../Assets/Raiden/EiEmpat.jpg'
import EiLimaImage from '../Assets/Raiden/EiLima.jpg'
import EiWpImage from '../Assets/Raiden/EiWp.jpg'

import YaesatuImage from '../Assets/Yae/Yaedua.jpg'
import YaeduaImage from '../Assets/Yae/Yaetiga.jpg'
import YaetigaImage from '../Assets/Yae/Yaeempat.jpg'
import YaeempatImage from '../Assets/Yae/Yaelima.jpg'
import YaelimaImage from '../Assets/Yae/Yaesatu.jpg'
import LostImage from '../Assets/Yae/Lost.jpg' 

import SatuImage from '../Assets/Mona/Satu.jpg'
import DuaImage from '../Assets/Mona/Dua.jpg'
import TigaImage from '../Assets/Mona/Tiga.jpg'
import EmpatImage from '../Assets/Mona/Empat.jpg'
import LimaImage from '../Assets/Mona/Lima.jpg'
import EnamImage from '../Assets/Mona/Enam.jpg'

import QiqisatuImage from '../Assets/Qiqi/Qiqisatu.jpg'
import QiqiduaImage from '../Assets/Qiqi/Qiqidua.jpg'
import QiqitigaImage from '../Assets/Qiqi/Qiqitiga.jpg'
import QiqiempatImage from '../Assets/Qiqi/Qiqiempat.jpg'
import QiqilimaImage from '../Assets/Qiqi/Qiqilima.jpg'
import SenjataQiqiImage from '../Assets/Qiqi/SenjataQiqi.jpg'

import zhongsatuImage from '../Assets/Zhongli/zhongsatu.jpg'
import zhongduaImage from '../Assets/Zhongli/zhongdua.jpg'
import zhongtigaImage from '../Assets/Zhongli/zhongtiga.jpg'
import zhongempatImage from '../Assets/Zhongli/zhongempat.jpg'
import zhonglimaImage from '../Assets/Zhongli/zhonglima.jpg'
import WpZhongliImage from '../Assets/Zhongli/WpZhongli.jpg'

import AyatosatuImage from '../Assets/Ayato/Ayatosatu.jpg'
import AyatoduaImage from '../Assets/Ayato/Ayatodua.jpg'
import AyatotigaImage from '../Assets/Ayato/Ayatotiga.jpg'
import AyatoempatImage from '../Assets/Ayato/Ayatoempat.jpg'
import AyatolimaImage from '../Assets/Ayato/Ayatolima.jpg'
import JadeImage from '../Assets/Ayato/Jade.jpg'

import IttosatuImage from '../Assets/Itto/Ittosatu.jpg'
import IttoduaImage from '../Assets/Itto/Ittodua.jpg'
import IttotigaImage from '../Assets/Itto/Ittotiga.jpg'
import IttoempatImage from '../Assets/Itto/Ittoempat.jpg'
import IttolimaImage from '../Assets/Itto/Ittolima.jpg'
import WpIttoImage from '../Assets/Itto/WpItto.jpg'


function Details() {
  return (
    <div>
    <Container >
      <br />
      <h1 className='text-white' id="details">DETAILS<a className="aturReturn" href="#Character">↩️</a></h1>
      <h4 className="text-white" id="Ganyu">Ganyu</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={WtsatuImage}/>
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={WtduaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={WttigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={WtempatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={WtlimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={SkyImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Ayaka">Kamisato Ayaka</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={GSatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={GDuaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={GTigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={GEmpatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={GLimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={MitsImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Raiden">Raiden Shogun</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={EiSatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EiDuaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EiTigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EiEmpatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EiLimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EiWpImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Yae">Yae Miko</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={YaesatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={YaeduaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={YaetigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={YaeempatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={YaelimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={LostImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Mona">Mona</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={SatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={DuaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={TigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EmpatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={LimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={EnamImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Qiqi">Qiqi</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={QiqisatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={QiqiduaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={QiqitigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={QiqiempatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={QiqilimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={SenjataQiqiImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Zhongli">Zhongli</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={zhongsatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={zhongduaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={zhongtigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={zhongempatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={zhonglimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={WpZhongliImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Ayato">Kamisato Ayato</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={AyatosatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={AyatoduaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={AyatotigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={AyatoempatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={AyatolimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={JadeImage} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white" id="Itto">Arataki Itto</h4>
      
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={IttosatuImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={IttoduaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={IttotigaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={IttoempatImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={IttolimaImage} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={WpIttoImage} />
      </Card>
    </CardGroup>
    </Container>
    
    <br />
    </div>
  );
}

export default Details;