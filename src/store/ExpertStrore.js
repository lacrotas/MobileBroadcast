import { makeAutoObservable } from 'mobx';
import EXPERTSIMAGE from '../base/EXPERTSIMAGE';

import FirstImage from "../assets/images/experts_image/1.png";
import SecondImage from "../assets/images/experts_image/2.png";
import ThirdImage from "../assets/images/experts_image/3.png";
import FourthImage from "../assets/images/experts_image/4.png";
import FifthImage from "../assets/images/experts_image/5.png";
import SixImage from "../assets/images/experts_image/6.png";


export default class ExpertStrore {
    constructor() {
        this._experts = [
            { id: "1", name: "Имя Фамилия", image: "8735dbb6-fa06-46cc-a9b3-d039e7e8c541.jpg", aboutText: "teks", sex: "m", articles: "", technologies: "Android/Kotlin", cityId: "1", link: "@telega", meatingId: "" },
            // { image: FirstImage, stack: ["Android", "Kotlin"], name: "Имя Фамилия", location: "Самара" },
            // { image: SecondImage, stack: ["Android"], name: "Имя Фамилия", location: "Минск" },
            // { image: ThirdImage, stack: ["Aurora", "Flutter", "IOS"], name: "Имя Фамилия", location: "Станмбул" },
            // { image: FourthImage, stack: ["IOS"], name: "Имя Фамилия", location: "Москва" },
            // { image: FifthImage, stack: ["Android", "Kotlin", "Aurora"], name: "Имя Фамилия", location: "Орел" },
            // { image: SixImage, stack: ["Android", "IOS", "Kotlin"], name: "Имя Фамилия", location: "Екатеринбург" }
        ];
        makeAutoObservable(this);
    }

    //actions
    setExperts(obj) {
        this._experts = obj;
    }

    get experts() {
        return this._experts;
    }
}