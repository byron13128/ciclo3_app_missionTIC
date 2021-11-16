import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
        id : "D&G001",
        marca : "Cartprint",
        title: "Papel Impresora",
        description: "Papel de calidad apto para mejorar la calidad de impresion",
        price: 12500,
        category: "Oficina",
        url:"https://images.ssstatic.com/papel-para-fotocopiadora-e-impresora-846403n0-00000046.jpg", 
    },
    {
        id: "D&G002",
        marca : "TRoma",
        title: "Tijeras tipo ROMA",
        description: "Tijeras pequeñas aptas para niños",
        price: 1500,
        category: "Escolar",
        url: "http://www.megaoffice.com.ve/images/papele/tijera-escolar-punta-roma.jpg",
    },
    {
        id: "D&G003",
        marca : "PegaPega",
        title: "Colbon * Galon",
        description: "Pegante de calidad para las diferentes actividades rutinarias",
        price: 15700,
        category: "Papeleria",
        url: "https://http2.mlstatic.com/D_NQ_NP_816708-MCO43798315183_102020-V.jpg",
    },
    {
        id: "D&G004",
        marca : "Cart",
        title: "Cartulina",
        description: "Ideal para realizar trabajos de manualidades y los diferentes trabajos escolares",
        price: 600,
        category: "Diseño",
        url: "https://panamericana.vteximg.com.br/arquivos/ids/202526-325-325/cartulina-opalina-blanca-carta-x-25-unidades-180-g-1-7706563712987.jpg?v=636294372592000000",
    },
    {
        id: "D&G005",
        marca : "Cart",
        title: "Cartulina de colores",
        description: "Ideal para realizar trabajos de manualidades y los diferentes trabajos escolares",
        price: 900,
        category: "Diseño",
        url: "https://www.asturalba.com/manualidades/cartulinas/cartulinas-50x65-colores.jpg",
    },
    {
        id: "D&G006",
        marca : "EscolarF",
        title: "Foamy escarchado",
        description: "Ideal para las manualidades que requiren un apresentacion elegante",
        price: 500,
        category: "Diseño",
        url: "https://importadorajumbo.com.co/wp-content/uploads/2019/04/foami-escarchado-3.jpg",
    },
    {
        id: "GVC001",
        marca : "Parchitos ",
        title: "Temperas multicolor",
        description: "Expresa mas que arte",
        price: 3200,
        category: "Escolar",
        url: "https://http2.mlstatic.com/D_NQ_NP_611856-MCO43881587104_102020-V.jpg",
    },
    {
        id: "GVC002",
        marca : "Scrip",
        title: "Cuadernos Niño",
        description: "Para el regreso a Clases",
        price: 3100,
        category: "Juvenil",
        url: "https://thumbs.dreamstime.com/z/ni%C3%B1os-con-un-cuaderno-57653596.jpg",
    },
    {
        id: "GVC003",
        marca : "Scrip ",
        title: "cuadenos Niña",
        description: "Para el regreso a Clases",
        price: 2999,
        category: "Juvenil",
        url: "https://thumbs.dreamstime.com/z/ni%C3%B1os-con-un-cuaderno-57653596.jpg",
    },
    {
        id: "GVC004",
        marca : "Scrip ",
        title: "Marcadores o Plumones",
        description: "Marcan tu estilo ",
        price: 437500,
        category: "Oficina",
        url: "https://img.freepik.com/foto-gratis/marcadores-primer-plano-colores-arco-iris_23-2148457251.jpg?size=626&ext=jpg",
    },
    {
        id: "GVC005",
        marca : "totto ",
        title: "Cartuchera ",
        description: "Cartuchera pequeña unicolor",
        price: 5200,
        category: "Juvenil",
        url: "https://tupapeleria-online.com/wp-content/uploads/2020/01/1-21-300x300.jpg",
    },
    {
        id: "GVC006",
        marca : "totto ",
        title: "Cartuchera infantil",
        description: "CARTUCHERA OVALADA CON PERSONAJES PARA NIÑO/NIÑA ",
        price: 10200,
        category: "Escolar",
        url: "https://tupapeleria-online.com/wp-content/uploads/2020/01/1-20-300x300.jpg",
    },
    
];


  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
