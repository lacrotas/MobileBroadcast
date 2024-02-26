import { makeAutoObservable } from 'mobx';
import EXPERTSIMAGE from '../base/EXPERTSIMAGE';

export default class ExpertStrore {
    constructor() {
        this._experts = EXPERTSIMAGE;
        makeAutoObservable(this);
    }
    //actions
    setExperts(obj) {
        this._experts = obj;
    }

    get experts() {
        return this._isAuth;
    }
}