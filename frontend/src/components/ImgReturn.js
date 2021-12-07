import "../index.js";
import img01d from '../img/weather/01d.png';
import img02d from '../img/weather/02d.png';
import img03d from '../img/weather/03d.png';
import img04d from '../img/weather/04d.png';
import img09d from '../img/weather/09d.png';
import img10d from '../img/weather/10d.png';
import img11d from '../img/weather/11d.png';
import img13d from '../img/weather/13d.png';
import img50d from '../img/weather/50d.png';

import img01n from '../img/weather/01n.png';
import img02n from '../img/weather/02n.png';
import img03n from '../img/weather/03n.png';
import img04n from '../img/weather/04n.png';
import img09n from '../img/weather/09n.png';
import img10n from '../img/weather/10n.png';
import img11n from '../img/weather/11n.png';
import img13n from '../img/weather/13n.png';
import img50n from '../img/weather/50n.png';


export default class ImgReturn {

    constructor(icon){
        this.icon = icon;
    }

    Img(){
            switch(this.icon){
                case "01d":
                    return ({img01d});
                case '02d':
                    return ({img02d});
                case '03d':
                    return ({img03d});
                case '04d':
                    return ({img04d});
                case '09d':
                    return ({img09d});
                case '10d':
                    return ({img10d});
                case '11d':
                    return ({img11d});
                case '13d':
                    return ({img13d});
                case "50d":
                    return ({img50d});
                case '01n':
                    return ({img01n});
                case '02n':
                    return ({img02n});
                case '03n':
                    return ({img03n});
                case '04n':
                    return ({img04n});
                case '09n':
                    return ({img09n});
                case '10n':
                    return ({img10n});
                case '11n':
                    return ({img11n});
                case '13n':
                    return ({img13n});
                case '50n':
                    return ({img50n});
            }
        }

    get returnImg() {
        return this.Img();
    }
}