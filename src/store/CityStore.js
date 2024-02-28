import { makeAutoObservable } from 'mobx';

export default class CityStore {
    constructor() {
        this._cityes = [];
        makeAutoObservable(this);
    }
    //actions
    setCity(city) {
        this._cityes = city;
    }
    
    get user() {
        return this._user;
    }
}