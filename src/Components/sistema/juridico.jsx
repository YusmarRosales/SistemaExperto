import React, { useState } from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './style.scss';

const Juridico = () => {

    const preguntas = [

        {
            pregunta: "¿alguna vez has estado en una situación en la que tu pareja te ha extorsionado, amenazando con revelar secretos o hacer daño si no haces lo que quiere?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te has encontrado en una situación en la que tu pareja te ha forzado a beber alcohol?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te has encontrado en una situación en la que tu pareja te ha forzado a consumir drogas?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en alguna ocasión te has encontrado en una situación en la que tu pareja te ha causado daño físico?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has encontrado en una situación en la que tu pareja te ha causado quemaduras?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "te has encontrado en una situación en la que tu pareja ha intentado asfixiarte durante una discusión o confrontación?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "te has encontrado en una situación en la que tu pareja ha intentado estrangularte durante una discusión o confrontación?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en algún momento has vivido una situación en la que tu pareja te ha amenazado con un objeto u armas, generando miedo e inseguridad en tu relación?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te has encontrado en una situación en la que tu pareja ha difundido o te ha amenazado con difundir contenido íntimo tuyo sin tu consentimiento?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has estado en una situación en la que tu pareja te ha amenazado de muerte, generando miedo e inseguridad?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te has encontrado en una situación en la que tu pareja te ha forzado a tener relaciones sexuales sin tu consentimiento, causándote dolor y angustia?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has vivido una situación en la que tu pareja te ha abusado sexualmente, generando un profundo daño emocional y físico?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has encontrado en una situación en la que tu pareja te ha mutilado o desfigurado?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿has estado en una situación en la que tu pareja te ha presionado o manipulado emocionalmente hasta el punto de que has considerado o incluso intentado el suicidio?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },





        {
            pregunta: "¿tu pareja te ha prohibido salir con tus amigos o familiares?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en alguna ocasión has sentido que tu pareja quiere controlar lo que haces y te dice como hacer las cosas?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te han destruido algún artículo, ya sea por accidente o intencionalmente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en algún momento te han jaloneado de forma brusca o sin razón aparente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has encontrado en una situación en la que tu pareja te ha controlado el dinero como comida, dinero, otros?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿tu pareja te ha amenazado con quitarte a tus hijos?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en algún momento te han empujado de forma brusca o sin razón aparente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en alguna ocasión tu pareja te ha manoseado sin tu consentimiento, invadiendo tu espacio personal?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has experimentado caricias agresivas de parte de tu pareja, donde te ha tocado de forma brusca o violenta sin tu consentimiento?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te han propiciado un golpe y te han dicho que fue jugando?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has encontrado en una situación en la que te hayan arañado, ya sea en una pelea o jugando bruscamente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has encontrado en una situación en la que te hayan pellizcado, ya sea en una pelea o jugando bruscamente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has recibido una cachetada de forma inesperada o sin razón aparente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te han dado una patada fuerte sin razón aparente?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },



        {
            pregunta: "¿has estado en una situación en la que tu pareja te ha gritado constantemente, generando tensión?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te han realizado bromas o comentarios hirientes?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has encontrado en una situación en la que alguien intenta presionarte o manipularte para obtener algo?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has sentido engañada o te han mentido?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en algún momento tu pareja te ha aplicado la ley del hielo?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿has experimentado celos por parte de tu pareja?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en alguna ocasión tu pareja se ha seguido o asechado?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has sentido que alguien intenta culpabilizarte por algo que no es tu responsabilidad?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿en alguna ocasión te has sentido que han descalificado o menospreciado tus logros o habilidades?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has sentido que tu pareja te ha ridiculizado o se ha burlado de ti?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez te has sentido humillada en público, haciéndote sentir avergonzado o menospreciado?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿te has sentido intimidada o te ha hecho sentir incómoda con su actitud o comportamiento?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has vivido una situación en la que tu pareja te ha acosado o perseguido?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿alguna vez has estado en una situación en la que tu pareja ha ejercido un control excesivo sobre ti, tomando decisiones por ti y limitándote?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },

    ];

    const enviarResultados = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No se ha iniciado sesión o falta el token');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8081/guardarJ', {
                resultado: grupoActual

            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            console.log("Respuesta del servidor:", response.data.message);
        } catch (error) {
            console.error('Error al enviar resultados:', error);
        }
    };

    // Definimos el estado.
    const [respuestaTemporal, setRespuestaTemporal] = useState(null);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [contador, setContador] = useState(0);
    const [contadorSi, setContadorSi] = useState(0);
    const [respuestas, setRespuestas] = useState([]);
    const [grupoActual, setGrupoActual] = useState("peligro");

    const [finalizado, setFinalizado] = useState(false); // Estado para saber si el cuestionario ha terminado
    const [mensajeFinal, setMensajeFinal] = useState(""); // Estado para el mensaje final
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);


    const handleCheckboxChange = (respuesta) => {
        setRespuestaTemporal(respuesta); // Almacena la respuesta temporalmente
    };

    const handleSiguienteClick = () => {
        if (respuestaTemporal !== null) {
            setRespuestas([...respuestas, respuestaTemporal]);

            if (respuestaTemporal === "Sí") {
                setContadorSi(contadorSi + 1);
            }
            if (preguntaActual === 0 && respuestaTemporal === "No") {
                // Si es la primera pregunta y la respuesta es "No", cambia de grupo directamente
                determinarProximoGrupo();
            } else {
                // Si no es la primera pregunta o la respuesta no es "No"
                if (respuestaTemporal === "No") {
                    manejarRespuestaNo();
                } else {
                    avanzarAPreguntaSiguiente();
                }
            }

            setRespuestaTemporal(null);
        } else {
            alert('Por favor seleccione alguna de las opciones');
        }
    };

    const avanzarAPreguntaSiguiente = () => {
        const preguntasGrupoActual = preguntas.filter(p => p.tipo === grupoActual);
        if (preguntaActual < preguntasGrupoActual.length - 1) {
            // Si aún quedan preguntas en el grupo actual, avanza a la siguiente
            setPreguntaActual(preguntaActual + 1);
        } else {
            // Si es la última pregunta del grupo, determina el próximo grupo o finaliza el test
            determinarProximoGrupo();
        }
    
    };

    const manejarRespuestaNo = () => {
        const nuevoContador = contador + 1;
        setContador(nuevoContador);

        if (nuevoContador >= 2 || preguntaActual === preguntas.filter(p => p.tipo === grupoActual).length - 1) {
            determinarProximoGrupo();
        } else {
            setPreguntaActual(preguntaActual + 1); // Avanza a la siguiente pregunta dentro del mismo grupo
        }
    };

    // Esta función determina el próximo grupo de preguntas
    const determinarProximoGrupo = () => {
        setContador(0); // Resetea el contador de "No"

        const nuevoGrupo = grupoActual === "peligro" ? "riesgo" : grupoActual === "riesgo" ? "cuidado" : null;
        if (nuevoGrupo) {
            // Si hay un grupo siguiente, cambia a ese grupo
            setGrupoActual(nuevoGrupo);
            setPreguntaActual(0);
        } else {
            // Si no hay más grupos, finaliza el test y muestra el mensaje final
            setFinalizado(true);
            establecerMensajeFinal();
            finalizarTest();
        }
    };

    const establecerMensajeFinal = () => {
        if (contadorSi > 20) {
            setMensajeFinal("¡NO ESTAS SOLA! Estas corriendo peligro ten cuidado. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda.");
        } else if (contadorSi > 10 && contadorSi <= 20) {
            setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo de maltrato físico ten cuidado porque esto se puede agravar. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda.");
        } else {
            setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo de maltrato emocional ten cuidado porque esto puede ir a peor. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda.");
        }
    };

    //categoria de maltrato por la ultima respesta
    const determinarTipoMaltrato = (respuestas) => {
        let ultimoTipoMaltrato = "Ninguno";
        preguntas.forEach((pregunta, index) => {
            if (respuestas[index] === "Sí") {
                ultimoTipoMaltrato = pregunta.tipo;
            }
        });
        return ultimoTipoMaltrato;
    };

    const finalizarTest = () => {
        let tipoMaltrato = determinarTipoMaltrato(respuestas);
        enviarResultados(tipoMaltrato);
    };

    // Renderizamos la pregunta actual.
    const renderPregunta = () => {
        const preguntasGrupoActual = preguntas.filter(p => p.tipo === grupoActual);

        return (
            <div className="preg">
                <h2>{preguntasGrupoActual[preguntaActual].pregunta}</h2>
                <div className="resp">
                    {preguntasGrupoActual[preguntaActual].respuestas.map((respuesta, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                className="boton"
                                checked={respuestaTemporal === respuesta}
                                onChange={() => handleCheckboxChange(respuesta)}
                            />
                            {respuesta}
                        </label>
                    ))}
                </div>

                <div>
                    {finalizado && mensajeFinal ? (renderModalRespuestas()) : (
                        <>
                            <Button
                                onClick={handleSiguienteClick}
                                variant='contained'
                                color='primary'
                                size='large'
                            >
                                Siguiente
                            </Button>
                        </>
                    )}
                </div>

            </div>
        );
    };

    const renderModalRespuestas = () => {
        return (
            <div className="modalContainer">
                <div className="modal">
                    <header className="modal_header">
                        <h2 className="modal_header-title">Respuesta</h2>
                    </header>
                    <main className="modal_content">
                        <p>{mensajeFinal}</p>
                    </main>
                    <footer className="modal_footer">
                        <Link to={'/user/home'}>
                            <Button color='primary'
                                variant='contained'
                                size='large'>
                                Cerrar
                            </Button>
                        </Link>
                    </footer>
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderPregunta()}
        </div>
    );

};


export default Juridico;


//el siguiente fragmento muestra la respuesta a las preguntas
/*const renderModalRespuestas = () => {
    return (
        <div className="modalContainer">
            <div className="modal">
                <header className="modal_header">
                    <h2 className="modal_header-title">Resumen de Respuestas</h2>
                </header>
                <main className="modal_content">
                    {respuestas.map((respuesta, index) => (
                        <TextField
                            key={index}
                            fullWidth
                            type='text'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label={`Pregunta ${index + 1}`}
                            value={respuesta}
                            disabled
                        />
                    ))}
                </main>
                <footer className="modal_footer">
                    {Botón para cerrar el modal, por ejemplo }
                    <Button onClick={() => setMensajeFinal(false)}>Cerrar</Button>
                </footer>
            </div>
        </div>
    );
};*/



