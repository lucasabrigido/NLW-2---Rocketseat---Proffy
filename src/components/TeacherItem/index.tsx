import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC<any> = () => {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars2.githubusercontent.com/u/43851536?s=460&u=3630645442ca889180583458ab87790e0a175307&v=4" alt="perfil" 
                />
                <div>
                    <strong>Lucas Brígido</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                ng aliquip minim sunt ex ea ex culpa enim ex reprehenderit incididunt dolore. Laborum laboris pariatur aliqua anim dolore consectetur elit. Adipisicing aute commodo veniam aliquip eu cupidatat commodo. Quis Lorem veniam anim ipsum cupidatat reprehenderit consequat culpa minim anim laboris.
                <br/>
                eu excepteur reprehenderit nisi anim nulla voluptate nulla amet irure dolore.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button" >
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contrato
                </button>
            </footer>
    </article>
    )
};

export default TeacherItem;