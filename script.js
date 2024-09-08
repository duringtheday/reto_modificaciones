* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-size: none;
}

ul, 
ol {
    list-style: none;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    /* height: 100vh; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.8px;
    overflow: hidden;
    
}

/* Encabezado */
#header {
    padding: 50px;
    width: 100%;
    background: linear-gradient(150deg, #333333, #696969) no-repeat;
    color: white;
}
#header h1 {
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 0.8px;
}

/* Bloque principal */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    width: 100%;
    background: linear-gradient(150deg, #8cc0f5, #afd7ff);

}
/* Bloque para cambios de estilo */
.cambiar-estilo {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
}
/* Círculo */
#circulo {
    /* position: absolute; */
    width: 250px;
    height: 250px;
    /* background: linear-gradient(150deg, #33ff57, #55ff74); */
    /* opacity: 0.8; */
    border: 2px solid rgb(1, 21, 3);
    /* border-radius: 50%; */
    overflow: hidden;
    transition: background 0.5s ease, transform 0.5s ease;
    animation: changeColor 5s linear infinite;
    cursor: pointer;
    
}
/* Párrafo */
.cambiar-estilo p {
    position: absolute;
    top: 75px;
    margin: 20px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    color: rgb(18, 21, 23);
    letter-spacing: 0.8px;
    z-index: 1;
}
/* Botón `Cambiar Estilo` */
#cambio-estilo-btn {
    /* position: absolute; */
    top: 200px;
    margin: 50px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #333333;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
#cambio-estilo-btn:hover {
    transform: scale(1.05);
}
/* .verde {
    background: linear-gradient(150deg, #33ff57, #55ff74);
    color: rgb(2, 30, 6);
}
.amarillo {
    background: linear-gradient(150deg, #fcff33, #fcff55);
    color: rgb(37, 37, 2);
}
.naranja {
    background: linear-gradient(150deg, #ffb133, #ffbe55);
    color: rgb(59, 37, 2);  
}
.rojo {
    background: linear-gradient(150deg, #ff3333, #ff5555);
    color: rgb(255, 240, 240);
}
.violeta {
    background: linear-gradient(150deg, #f133ff, #ff55f1);
    color: rgb(255, 240, 255);

}
.azul {
    background: linear-gradient(150deg, #3358ff, #557fff);
    color: rgb(240, 243, 255);
}
.turquesa {
    background: linear-gradient(150deg, #33e0ff, #55eeff);
    color: rgb(2, 31, 33);
}
@keyframes changeColor {
    0% {
        background: var(--start-color);
    }
    100% {
        background: var(--end-color);
    }
} */
.verde {
    background: #33ff57;
    color: rgb(2, 30, 6);
}
.amarillo {
    background: #fcff33;
    color: rgb(37, 37, 2);
}
.naranja {
    background: #ffb133;
    color: rgb(59, 37, 2);  
}
.rojo {
    background: #ff3333;
    color: rgb(255, 240, 240);
}
.violeta {
    background: #f133ff;
    color: rgb(255, 240, 255);

}
.azul {
    background: #3358ff;
    color: rgb(240, 243, 255);
}
.turquesa {
    background: #33e0ff;
    color: rgb(2, 31, 33);
}
@keyframes changeColor {
    0% {
        background: var(--start-color);
    }
    100% {
        background: var(--end-color);
    }
}

#footer {
    padding: 20px;
    width: 100%;
    background: linear-gradient(150deg, #333333, #696969) no-repeat;
    color: white;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 12px;
    letter-spacing: 0.8px;
}



/* #prueba {
    position: absolute;
    width: 150px;
    height: 150px;
    background: #333333;
    border-radius: 50%;
    z-index: 3;
    animation: cambiaColor 3s ease-in-out infinite alternate;
}
@keyframes cambiaColor {
    0% {
        background: #3358ff;
    }
    100% {
        background: violet;
    }
} */
