import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      name: [],
      population: [],
      flag: [],
      selectedCountry: '',
      favouriteCountry: '',
    },
    mounted() {
      this.getCountries();
      this.getCountryName();
    },

    computed: {
      totalPopulation: function () {
        return this.countries.reduce((runningTotal, country) => {
          return runningTotal + country.population;
        }, 0);
      },
    },
    methods: {
      getCountries: function () {
        const result = fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countries = data);
      },

      getCountryName: function () {
        return this.countries.map((country) => {
          return this.name.push(country.name);
        });
      },

      getCountryPopulation: function () {
        return this.countries.map((country) => {
          return country.population;
        });
      },

      getCountryFlag: function () {
        return this.countries.map((country) => {
          return this.flag;
        });
      },

      getSelectedCountry: function () {
        return this.countries.filter((country) => {
          return country.name == this.selectedCountry.name;
        });
      },

    },

  });
});
