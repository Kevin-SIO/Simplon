var app = new Vue({
    el : '#app',
    data : {
        nbPlace : null,
        numRangee : null,
        afficherSalle : false,
        dimension :{
            rangee : 9,
            colonne : 8
        },
        places : new Map()
    },
    methods : {

        /**
         * Ajout du nombre de place séléctionner à la rangée si elle peut l'accueillir
         */
        addToSelected : function(){

            if(this.places.has(this.numRangee)){ //si la rangée a déjà des places réservés

                
                if (this.places.get(this.numRangee) + parseInt(this.nbPlace) <= this.dimension.colonne) { //on regarde s'il y a de la place

                    this.places.set(this.numRangee, this.places.get(this.numRangee)+ parseInt(this.nbPlace));

                } else {
                    alert("Il n'y a pas assez de place disponible")
                }
            }
            else{
                this.places.set(this.numRangee,parseInt(this.nbPlace)); // on peut ajouter directement le nombre de place désiré à la rangée
            }

            this.afficherSalle = true; //affichage de la salle et propostion de nouvelle selection
        },

        renitialisation : function(){ //Remise à zéro pour nouveau choix de place
            this.nbPlace = null;
            this.numRangee = null;
            this.afficherSalle = false;
        },

    }
})