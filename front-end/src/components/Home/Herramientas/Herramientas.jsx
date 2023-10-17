import React from 'react'
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import { useState,useEffect} from 'react';
import axios from 'axios';
import "./Herramientas.css";
import Fade from 'react-reveal/Fade';
import {jasper} from "../../../assets/index"



const Herramientas = () => {


  return (
    <section className='seccion-herramientas'>

        <div className='h1-container'>
            <h1> Nuestras Areas de Conocimiento </h1>
        </div>
        
        <div class="slider">
            <h2>Inteligencia Artificial</h2>
        <div class="slide-track-IA">
            <div class="slide">
                <img src="https://brandlogos.net/wp-content/uploads/2023/05/openai-logo_brandlogos.net_1xac8.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://influencermarketinghub.com/wp-content/uploads/2023/02/image-9.png" alt=""/>
            </div>

            <div class="slide">
                <img src="https://assets-global.website-files.com/605dd4e52b25d325bdc4370e/62e3f4f4e0c0cc6334ba8186_logo.svg" alt=""/>
            </div>
            <div class="slide">
                <img src="https://mccdn.me/martech/next-lp//_next/static/media/ManyChat_Color_Horizontal.274e5e81.svg" alt=""/>
            </div>
            <div class="slide">
                <img src="https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/61dc4887c7d00a2f74b0a0af_synthesia-logo.svg" alt=""/>
            </div>

            <div class="slide">
                <img src="https://www.frase.io/wp-content/uploads/2020/11/Frase_Logo.png" alt=""/>
            </div>
            
            <div class="slide">
                <img src="https://images.squarespace-cdn.com/content/v1/5e6cfa89c315535aba12ee9d/1620070500897-0BUOX95Q8M9ZB3WQQPPR/Logo+-+Einstein+%282%29.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://uhorizon.pe/wp-content/uploads/2021/01/zoho-logo.png" alt=""/>
            </div>
            
            <div class="slide">
                <img src="https://assets-global.website-files.com/637f533d357967a5820f3f25/64ef48362db7729570635ad6_logo-white.svg" alt=""/>
            </div>
            <div class="slide">
                <img src="https://www.sembly.ai/wp-content/uploads/2023/01/sembly_logo.svg" alt=""/>
            </div>

            <div class="slide">
                <img src="https://www.conversica.com/wp-content/uploads/2023/01/conversica-logo.svg" alt = ""/>
            </div>
        </div>
    </div>


    <div class="slider">
            <h2>Desarrollo a la medida</h2>
        <div class="slide-track-desarrollo">
            <div class="slide">
                <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://ucarecdn.com/0295176b-b17a-4106-b3b0-5bf2b14365e6/" alt=""/>
            </div>
            <div class="slide">
                <img src="https://dist.neo4j.com/wp-content/uploads/20230926084108/Logo_FullColor_RGB_TransBG.svg" alt=""/>
            </div>
            <div class="slide">
                <img src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640" alt=""/>
            </div>
            <div class="slide">
                <img src="https://www.logo.wine/a/logo/Python_(programming_language)/Python_(programming_language)-Logo.wine.svg" alt=""/>
            </div>
            <div class="slide">
                <img src="https://static.vecteezy.com/system/resources/previews/022/101/050/original/java-logo-transparent-free-png.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://assets.stickpng.com/images/62b2220b038aad4d3ed7ca2f.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png" alt=""/>
            </div>

            <div class="slide">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg" alt=""/>
            </div>
            <div class="slide">
                <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ywjqppks5ffcnbfjuttq" alt=""/>
            </div>
            <div class="slide">
                <img src="https://pbs.twimg.com/media/FGDQccIXMAM4iJg.png:large" alt=""/>
            </div>
            <div class="slide">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/800px-Microsoft_Azure.svg.png" alt=""/>
            </div>
            
        </div>
    </div>

    <div class="slider">
            <h2>Automatizacion de procesos</h2>
        <div class="slide-track-automatizacion">
            <div class="slide">
                <img src="https://images.credly.com/size/680x680/images/8b943c4b-c186-4e9f-84aa-004322b76eed/image.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://3.bp.blogspot.com/-Plcz3gK2JYE/V2Ff_DYiz6I/AAAAAAAABoU/J4s2dDBVjW8HbZ70tlVPeLdQsJ1NzyM4ACLcB/s1600/agile-icon.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://logos-world.net/wp-content/uploads/2021/02/Jira-Emblem.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://logos-world.net/wp-content/uploads/2021/03/Trello-Logo.png" alt=""/>
            </div>
            
            <div class="slide">
                <img src="https://cdn-icons-png.flaticon.com/512/5266/5266541.png" alt=""/>
            </div>
            <div class="slide">
                <img src="https://www.sap.com/dam/application/shared/logos/sap_logo_rgb_onwhite_0300_0300.png.adapt.png/1656382976488.png" alt=""/>
            </div>

            <div class="slide">
                <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" alt=""/>
            </div>
            
        </div>
    </div>




    </section>
    




  )


}
export default Herramientas;