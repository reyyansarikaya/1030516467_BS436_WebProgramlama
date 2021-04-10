import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Kart Oyunu</h1>
                <p className="welcome-text">
                    Bu oyunda 3  kart içinden kediyi bulman gerekmektedir. İlk tercihte kedi kartını bulamazsanız. 2. seçim hakkı tanınacaktır.
                </p>
                <div className="action">
                    <Link className="play" to={"/game"}>Oyunu Başlat!</Link>
                </div>
            </div>
        );
    }
}

export default Home;