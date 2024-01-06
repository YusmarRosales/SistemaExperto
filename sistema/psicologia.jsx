import React, { useState } from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './style.scss';
import axios from "axios";

const Psicologia = () => {

    const preguntas = [

        {
            pregunta: "¿Has sido amenazada con violencia física por tu pareja si no cumples con sus expectativas o demandas?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Ha utilizado tu pareja a tus hijos, familiares u otras personas cercanas como medio de control o amenaza?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Te han obligado a tener relaciones sexuales o a realizar actos sexuales contra tu voluntad?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Ha habido intentos de tu pareja de destruir tu reputación personal o profesional como forma de control?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has vivido situaciones donde te has sentido en peligro físico por la conducta de tu pareja?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Ha habido amenazas de daño físico hacia personas que te importan como forma de controlarte?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Te han restringido de manera severa el acceso a recursos básicos como comida, ropa o atención médica?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sido vigilada, perseguida o acosada por tu pareja, incluso en espacios públicos?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sido forzada a cometer actos ilegales o moralmente cuestionables bajo amenaza o coacción?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has experimentado amenazas de muerte o daño físico grave por parte de tu pareja?",
            tipo: "peligro",
            respuestas: ["Sí", "No"],
        },




        {
            pregunta: "¿Has sido amenazada con ser abandonada o que te dejen sin apoyo si no cumples con ciertas demandas?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Tu pareja ha insinuado que nadie más te querría o estaría contigo además de él/ella?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has experimentado manipulación emocional para hacerte sentir en deuda o agradecida por cosas mínimas?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sido aislada de tus amigos, familia o redes de apoyo social?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Tu pareja ha amenazado con lastimarse a sí mismo/a o a ti si decides dejar la relación?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Se han utilizado tus vulnerabilidades o inseguridades personales en tu contra?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sido forzada a realizar acciones o comportamientos que van en contra de tus valores o deseos?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Tu pareja ha controlado aspectos financieros o recursos económicos como forma de poder sobre ti?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Te han obligado a justificar tus acciones o comportamientos de manera constante y excesiva?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has experimentado chantaje emocional, como amenazas de revelar secretos personales o íntimos?",
            tipo: "riesgo",
            respuestas: ["Sí", "No"],
        },



        {
            pregunta: "¿Alguna vez te has sentido menospreciada o devaluada por tu pareja o alguien cercano?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has experimentado comentarios despectivos sobre tu apariencia o capacidades por parte de tu pareja?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Te han hecho sentir que tus opiniones o pensamientos no son importantes o válidos?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sentido que controlan o limitan tus decisiones personales, como la vestimenta o amistades?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Se han burlado de ti o han minimizado tus logros en un contexto íntimo?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sido objeto de celos infundados o acusaciones sin base por parte de tu pareja?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has experimentado la sensación de caminar sobre 'cascaras de huevo' alrededor de tu pareja para evitar conflictos?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Tu pareja ha utilizado el silencio o la indiferencia como una forma de castigo o control?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Has sentido que tus necesidades emocionales son ignoradas o no atendidas regularmente?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        },
        {
            pregunta: "¿Te han hecho sentir culpable por situaciones o problemas que no son de tu responsabilidad?",
            tipo: "cuidado",
            respuestas: ["Sí", "No"],
        }
    ];

    const enviarResultados = async (tipoMaltrato) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No se ha iniciado sesión o falta el token');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8081/guardar', {
                resultado: tipoMaltrato

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
                // Si la primera pregunta es "Sí" pero tiene 2 respuestas de "no"
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
        const preguntasDelGrupo = preguntas.filter(p => p.tipo === grupoActual);
        if (preguntaActual < preguntasDelGrupo.length - 1) {
            setPreguntaActual(preguntaActual + 1);
        } else {
            // Finaliza el cuestionario cuando se responde la última pregunta del grupo actual
            setFinalizado(true);
            establecerMensajeFinal();
            finalizarTest();
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
        setContador(0);

        const nuevoGrupo = grupoActual === "peligro" ? "riesgo" : grupoActual === "riesgo" ? "cuidado" : null;
        if (nuevoGrupo) {
            setGrupoActual(nuevoGrupo);
            setPreguntaActual(0);
        } else {
            // Si no hay más grupos, finaliza el cuestionario
            setFinalizado(true);
            establecerMensajeFinal();
            finalizarTest();
        }
    };

    const establecerMensajeFinal = () => {
        const algunaRespuestaSi = respuestas.some(respuesta => respuesta === "Sí");

        if (!algunaRespuestaSi) {
            setMensajeFinal("no respondiste ningun ciclo");
        } else {
            if (grupoActual === "peligro") {
                setMensajeFinal("¡NO ESTAS SOLA! es importante que reconozcas que podrías estar experimentando una forma de violencia psicológica. A menudo, este tipo de violencia comienza de manera sutil y puede ser difícil de identificar.. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda.");
            } else if (grupoActual === "riesgo") {
                setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo situaciones más intensas de violencia psicológica ten cuidado, No tienes que manejar esto por tu cuenta. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda.");
            } else {
                setMensajeFinal("¡NO ESTAS SOLA! Estas sufriendo situaciones extremadamente graves de violencia psicológica, que pueden poner en riesgo tu integridad física y emocional. Acércate a nuestras instalaciones para darte brindarte información sobre tus derechos, cómo obtener protección y cómo recuperarte del abuso, el Instituto tachirense de la Mujer (INTAMUJER) te ofrecerá ayuda.");
            }
        }
    };

    const finalizarTest = () => {
        const algunaRespuestaSi = respuestas.some(respuesta => respuesta === "Sí");

        let tipoMaltrato;
        if (!algunaRespuestaSi) {
            tipoMaltrato = "ir al instituto";
        } else {
            tipoMaltrato = grupoActual;
        }

        enviarResultados(tipoMaltrato); 
        establecerMensajeFinal();
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

export default Psicologia;
