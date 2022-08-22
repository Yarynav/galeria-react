import './App.scss';
import { Header } from './component/Header';
import { CardImagen } from './component/Card';
import { MyFooter } from './component/MyFooter';
import { Col, Row } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Row className="card">
        <Col span={6}>
          <CardImagen
            alt="manga japones de diosa de pelo azul"
            src="https://images-na.ssl-images-amazon.com/images/I/919Or1PT32L.jpg"
            title="Konosuba"
            tomo="Tomo 1"
            description="Un día decide salir de su casa, sufre un desafortunado accidente y fallece. Cuál es su sorpresa al ver que aparece en un limbo junto a una diosa llamada Aqua que le ofrece enviarlo a un nuevo mundo con tintes roleros y -además- concederle un deseo. "
          ></CardImagen>
        </Col>
        <Col span={6}>
          <CardImagen
            alt="manga japones donde aparece una mujer rubia en la portada"
            src="https://images-na.ssl-images-amazon.com/images/I/81nKEWwgNgL.jpg"
            title="Konosuba"
            description="Pero antes, Aqua se ocupa de humillarlo porque la muerte que él pensaba que había sido heroica salvando a una chica de ser atropellada, resulta ser lo más patética y cutre que te puedas echar a la cara. Lo único que se le ocurre al bueno de Kazue es usar su deseo para que Aqua lo acompañe al nuevo mundo y se una a él en sus peripecias para derrotar al rey demonio
      "
            tomo="Tomo 2"
          ></CardImagen>
        </Col>
        <Col span={6}>
          <CardImagen
            alt="manga japones donde aparece una mujer con polo castaño en la portada"
            src="https://www.geekz.cl/image/cache/catalog/Monokuro/IVREA/9788418562020-1100x1100h.jpg"
            title="Konosuba"
            description=" En su nueva aventura encontrará una gran variedad de personajes a cada cual más cazurro, formando equipo con la pesada de Aqua, con megumin, una maga loca por las explosiones y con Darkness, una paladín aficionada al sadomasoquismo. "
            tomo="Tomo 3"
          ></CardImagen>
        </Col>
        <Col span={6}>
          <CardImagen
            alt="mannga donde aparece una diosa de pelo azul y un abruja de pelo castaño"
            src="https://www.geekz.cl/image/cache/catalog/Monokuro/IVREA/9788418562839-400x545.jpg"
            title="Konosuba"
            description="Viendo que su equipo está mal de la cabeza y que todas son más tontas que un zapato, Kazuma decide disfrutar de su nueva vida a lo grande, pero al final se las tendrá que ver con los generales del rey demonio que se cruzaron en su camino… y con sapos, un montón de babosos batracios.
      "
            tomo="Tomo 4"
          ></CardImagen>
        </Col>
      </Row>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
