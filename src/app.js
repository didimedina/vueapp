const book = new Vue({
    el: "#book", // need the # when selecting id's in the DOM
    data: {
        title: "Finding the Freedom in Freelancing",
        author: "Didi Medina",
        summary: "A practical guide to succeeding on your own for designers and developers!",
        showDetail: false
    },
    methods: {
        toggleDetail: function () {
            this.showDetail = !this.showDetail;
        },
        showTitle: function () {
            alert(this.title); // traditionally you'd have to write this.data.title but Vue handles that automatiaclly.
        } // 'this' doesnt work when using fat arrow functions syntax, Vue recommends sticking to classic syntax function() vs () => {}
    }
});

const colorsInTheRainbow = ["yellow", "blue", "green", "purple", "pink"];

const colors = new Vue({
    el: "#colors",
    data: {
        rainbow: colorsInTheRainbow
    }
});