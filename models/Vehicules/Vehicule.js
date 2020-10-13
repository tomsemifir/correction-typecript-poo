"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, couleur, prix, moteur) {
        var _this = this;
        this.faireLePleinEssence = function (station, nbLitre) {
            var prix = nbLitre * station.getPrixEssence();
            console.log("La voiture " + _this.marque + " a d\u00E9pens\u00E9 " + prix + "\u20AC pour " + nbLitre + "L d'essence ");
        };
        //GETTERS
        this.getMarque = function () {
            return _this.marque;
        };
        this.getCouleur = function () {
            return _this.couleur;
        };
        this.getPrix = function () {
            return _this.prix;
        };
        this.getMoteur = function () {
            return _this.moteur;
        };
        //SETTERS
        this.setMarque = function (marque) {
            _this.marque = marque;
        };
        this.setCouleur = function (couleur) {
            _this.couleur = couleur;
        };
        this.setPrix = function (prix) {
            _this.prix = prix;
        };
        this.setMoteur = function (moteur) {
            _this.moteur = moteur;
        };
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.moteur = moteur;
    }
    return Vehicule;
}());
exports.Vehicule = Vehicule;
//# sourceMappingURL=Vehicule.js.map