export default {
  methods: {
    convertMinsToHrsMins: (mins) => {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      let formattedDuration = h > 0 ? `${h}h ` : ``;
      formattedDuration += m > 0 ? `${m}m ` : ``;

      return formattedDuration;
    },
  },
};
